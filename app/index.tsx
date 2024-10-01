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
    return null
  }

  return (
    <OnboardFeature />
  );
}
