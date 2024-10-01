import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

const HomeIcon = ({ focused }: { focused: boolean }) => (
  <TabBarIcon name={focused ? "home" : "home-outline"} color="white" />
);

const SwapIcon = () => (
  <Ionicons name="swap-horizontal" size={26} color="white" />
);

const OrderIcon = () => (
  <View style={styles.orderButton}>
    <Ionicons name="add" size={26} color="white" />
  </View>
);

const WalletIcon = () => (
  <Ionicons name="wallet" size={26} color="white" />
);

const CommunityIcon = () => (
  <Ionicons name="people" size={26} color="white" />
);

export default function TabLayout() {

  return (
    <Tabs
    screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray", 
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="main"
        options={{
          title: "Home",
          tabBarIcon: HomeIcon,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Swap",
          tabBarIcon: SwapIcon,
        }}
      />

      <Tabs.Screen
        name="order"
        options={{
          title: "Order",
          tabBarIcon: OrderIcon,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Wallet",
          tabBarIcon: WalletIcon,
        }}
      />

      <Tabs.Screen
        name="community"
        options={{
          title: "Community",
          tabBarIcon: CommunityIcon,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#1f1f1f",
    borderTopColor: "black",
    position: "absolute",
    justifyContent: "space-around",
    alignItems: "baseline",
    shadowColor: "black",
    height: 60,
    paddingBottom: 20,
  },
  orderButton: {
    backgroundColor: "#22c55e",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30%",
  },
});
