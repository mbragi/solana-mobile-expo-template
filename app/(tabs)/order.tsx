import { OrderFeature } from "@/components/order/order-feature";
import { SafeAreaView } from "react-native";

export default function Tab() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <OrderFeature />
    </SafeAreaView>
  );
}
