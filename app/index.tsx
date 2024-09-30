import React, { useEffect } from "react";
import { OnboardFeature } from "@/components/onboard/onboard-feature";
import { useAuthorization } from "@/hooks/useAuthorization";
import { router } from "expo-router";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { SafeAreaView } from "react-native";

export default function App() {
  const { selectedAccount } = useAuthorization();

  useEffect(() => {
    if (selectedAccount) {
      router.replace("/(tabs)/main");
    }
  }, [selectedAccount]);

  if (selectedAccount) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator
          animating={true}
          color={MD2Colors.green400}
          size={40}
        />
      </SafeAreaView>
    );
  }

  return (
    <>
      <OnboardFeature />
    </>
  );
}
