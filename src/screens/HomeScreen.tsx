import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

// import { Section } from "../Section";
import { useAuthorization } from "../utils/useAuthorization";
import { AccountDetailFeature } from "../components/account/account-detail-feature";
// import { SignInFeature } from "../components/sign-in/sign-in-feature";
import { OnboardFeature } from "./OnboardScreen";

export function HomeScreen() {
  const { selectedAccount } = useAuthorization();

  return (
    <View style={styles.screenContainer}>
      {selectedAccount ? (
        <AccountDetailFeature />
      ) : (
        <OnboardFeature/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
