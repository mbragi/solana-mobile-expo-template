import React, { useEffect } from "react";
import { OnboardFeature } from "@/components/onboard/onboard-feature";
import { useAuthorization } from "@/hooks/useAuthorization";
import { router } from "expo-router";
import { Text } from "react-native-paper";

export default function App() {
  const { selectedAccount } = useAuthorization();

  useEffect(() => {
    if (selectedAccount) {
      console.log(selectedAccount);
      router.replace("/(tabs)/main");
    }
  }, [selectedAccount]);

  if (selectedAccount) {
    return <Text style={{color: 'white'}}>Loading...</Text>
  }

  return (
    <>
      <OnboardFeature />
    </>
  );
}
