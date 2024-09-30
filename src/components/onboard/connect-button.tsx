import React, { useState, useCallback } from "react";

import { alertAndLog } from "@/utils/alertAndLog";
import { useAuthorization } from "@/hooks/useAuthorization";
import { useMobileWallet } from "@/hooks/useMobileWallet";
import { Linking, Platform, Text } from "react-native";
import { CustomButton } from "@/components/ui/button";
import { SolanaMobileWalletAdapterError } from "@solana-mobile/mobile-wallet-adapter-protocol";

export function ConnectButton() {
  const { authorizeSession } = useAuthorization();
  const { connect } = useMobileWallet();
  const [authorizationInProgress, setAuthorizationInProgress] = useState(false);

  const handleConnectPress = useCallback(async () => {
    try {
      if (authorizationInProgress) {
        return;
      }
      setAuthorizationInProgress(true);
      await connect();
    } catch (err: any) {
      console.log("Error caught:", err);

      if (
        err instanceof SolanaMobileWalletAdapterError || 
        err?.message?.includes("Found no installed wallet that supports the mobile wallet protocol")
      ) {
        // If no wallet is found, redirect to the Play Store or App Store
        const url =
          Platform.OS === "android"
            ? "https://play.google.com/store/apps/details?id=app.phantom" // Android URL
            : "https://apps.apple.com/app/phantom-solana-wallet/id1598432977"; // iOS URL

        Linking.openURL(url).catch((error) => {
          alertAndLog('Failed to Link to PlayStore', error.message)
        });
      } else {
        // Log any other unexpected errors
        alertAndLog('Unable to connect wallet', err)
      }
    } finally {
      setAuthorizationInProgress(false);
    }
  }, [authorizationInProgress, authorizeSession]);

  return (
    <CustomButton
      mode="contained"
      disabled={authorizationInProgress}
      onPress={handleConnectPress}
      style={{
        backgroundColor: "#2cc15c",
        borderRadius: 25,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        bottom: "3%",
      }}
    >
      <Text className="text-white font-bold">Connect Wallet </Text>
    </CustomButton>
  );
}