import AsyncStorage from "@react-native-async-storage/async-storage";
import { PublicKey, PublicKeyInitData } from "@solana/web3.js";
import {
  Account as AuthorizedAccount,
  AuthorizationResult,
  AuthorizeAPI,
  AuthToken,
  Base64EncodedAddress,
  DeauthorizeAPI,
} from "@solana-mobile/mobile-wallet-adapter-protocol";
import { toUint8Array } from "js-base64";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";

const CHAIN = "solana";
const CLUSTER = "devnet";
const CHAIN_IDENTIFIER = `${CHAIN}:${CLUSTER}`;

export type Account = Readonly<{
  address: Base64EncodedAddress;
  label?: string;
  publicKey: PublicKey;
  display_address?: string;
  walletIcon?: string; // New field for the base64-encoded icon
}>;

type WalletAuthorization = Readonly<{
  accounts: Account[];
  authToken: AuthToken;
  selectedAccount: Account;
}>;

function getAccountFromAuthorizedAccount(account: AuthorizedAccount): Account {
  const publicKey = getPublicKeyFromAddress(account.address);

  // Handle the wallet icon, ensuring it's in a usable data URI format
  const walletIcon = account.icon ? `data:image/png;base64,${account.icon}` : "https://placekitten.com/50/50"; // Change the type as needed (e.g., image/svg+xml, image/webp)

  // Generate a display address
  const display_address = `${account.address.slice(0, 6)}...`;

  return {
    ...account,
    publicKey,
    walletIcon, // Add wallet icon from the API response
    display_address, // Add display address for easy UI display
  };
}

function getAuthorizationFromAuthorizationResult(
  authorizationResult: AuthorizationResult,
  previouslySelectedAccount?: Account
): WalletAuthorization {
  console.log("Authorization Payload:", authorizationResult);

  let selectedAccount: Account;
  if (
    previouslySelectedAccount == null ||
    !authorizationResult.accounts.some(
      ({ address }) => address === previouslySelectedAccount.address
    )
  ) {
    const firstAccount = authorizationResult.accounts[0];
    selectedAccount = getAccountFromAuthorizedAccount(firstAccount);
  } else {
    selectedAccount = previouslySelectedAccount;
  }

  return {
    accounts: authorizationResult.accounts.map(getAccountFromAuthorizedAccount),
    authToken: authorizationResult.auth_token,
    selectedAccount,
  };
}

function getPublicKeyFromAddress(address: Base64EncodedAddress): PublicKey {
  const publicKeyByteArray = toUint8Array(address);
  return new PublicKey(publicKeyByteArray);
}

function cacheReviver(key: string, value: any) {
  if (key === "publicKey") {
    return new PublicKey(value as PublicKeyInitData);
  } else {
    return value;
  }
}

const AUTHORIZATION_STORAGE_KEY = "authorization-cache";

async function fetchAuthorization(): Promise<WalletAuthorization | null> {
  const cacheFetchResult = await AsyncStorage.getItem(
    AUTHORIZATION_STORAGE_KEY
  );

  if (!cacheFetchResult) {
    return null;
  }

  return JSON.parse(cacheFetchResult, cacheReviver);
}

async function persistAuthorization(
  auth: WalletAuthorization | null
): Promise<void> {
  await AsyncStorage.setItem(AUTHORIZATION_STORAGE_KEY, JSON.stringify(auth));
}

export const APP_IDENTITY = {
  name: "Solana Trash Coin",
  uri: "https://trashcoin.bluehouseng.com",
};

export function useAuthorization() {
  const queryClient = useQueryClient();
  const { data: authorization, isLoading } = useQuery({
    queryKey: ["wallet-authorization"],
    queryFn: () => fetchAuthorization(),
  });
  const { mutate: setAuthorization } = useMutation({
    mutationFn: persistAuthorization,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wallet-authorization"] });
    },
  });

  const handleAuthorizationResult = useCallback(
    async (
      authorizationResult: AuthorizationResult
    ): Promise<WalletAuthorization> => {
      const nextAuthorization = getAuthorizationFromAuthorizationResult(
        authorizationResult,
        authorization?.selectedAccount
      );
      await setAuthorization(nextAuthorization);
      return nextAuthorization;
    },
    [authorization]
  );

  const authorizeSession = useCallback(
    async (wallet: AuthorizeAPI) => {
      const authorizationResult = await wallet.authorize({
        identity: APP_IDENTITY,
        chain: CHAIN_IDENTIFIER,
        auth_token: authorization?.authToken,
      });
      return (await handleAuthorizationResult(authorizationResult))
        .selectedAccount;
    },
    [authorization, handleAuthorizationResult]
  );

  const deauthorizeSession = useCallback(
    async (wallet: DeauthorizeAPI) => {
      if (authorization?.authToken == null) {
        return;
      }
      await wallet.deauthorize({ auth_token: authorization.authToken });
      await setAuthorization(null);
    },
    [authorization]
  );

  return useMemo(
    () => ({
      accounts: authorization?.accounts,
      authorizeSession,
      deauthorizeSession,
      selectedAccount: authorization?.selectedAccount,
      isLoading,
    }),
    [authorization, authorizeSession, deauthorizeSession]
  );
}
