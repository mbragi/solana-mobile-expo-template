import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
interface AssetVisibilityToggleProps {
  title: string;
  amount: string;
}
const AssetsCard = ({ title, amount }: AssetVisibilityToggleProps) => {
  const [showAssets, setShowAssets] = useState(true);

  return (
    <LinearGradient
      colors={["#4CAF50", "#FFFFFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 2, y: 0 }}
      style={styles.assetsContainer}
    >
      <FontAwesome
        name={showAssets ? "eye" : "eye-slash"}
        size={24}
        color="white"
        style={styles.assetsToggle}
        onPress={() => {
          setShowAssets(!showAssets);
        }}
      />
      <View>
        <Text style={styles.assetsTitle}>{title}</Text>
        {!showAssets ? (
          <Text style={styles.assetsAmount}>{amount}</Text>
        ) : (
          <Text style={styles.assetsHidden}>*****</Text>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  assetsContainer: {
    marginHorizontal: 16,
    padding: 32,
    borderRadius: 8,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  assetsTitle: {
    color: "white",
  },
  assetsAmount: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 14,
    color: "white",
  },
  assetsHidden: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 14,
  },
  assetsToggle: {
    color: "white",
    marginBottom: 16,
    textAlign: "center",
  },
});

export default AssetsCard;
