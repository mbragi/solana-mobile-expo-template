import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

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
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? "home" : "home-outline"} color="white" />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Swap",
          tabBarIcon: ({ focused }) => (
            <Ionicons name="swap-horizontal" size={26} color="white" />
          ),
        }}
      />

      <Tabs.Screen
        name="order"
        options={{
          title: "Order",
          tabBarIcon: ({ focused }) => (
            <View style={styles.orderButton}>
              <Ionicons name="add" size={26} color="white" />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Wallet",
          tabBarIcon: ({ focused }) => (
            <Ionicons name="wallet" size={26} color="white" />
          ),
        }}
      />

      <Tabs.Screen
        name="community"
        options={{
          title: "Community",
          tabBarIcon: ({ focused }) => (
            <Ionicons name="people" size={26} color="white" />
          ),
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
    alignItems: "center",
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
