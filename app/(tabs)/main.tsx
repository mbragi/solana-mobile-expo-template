import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useMobileWallet } from "@/hooks/useMobileWallet";
import { useAuthorization } from "@/hooks/useAuthorization";
import AssetsCard from "@/components/ui/AssestsCard"; // Import the new component

export default function Tab() {
  const { disconnect } = useMobileWallet();
  const { selectedAccount } = useAuthorization();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userContainer}>
          {/* Profile Image */}
          <Image
            source={{ uri: selectedAccount?.walletIcon }}
            style={styles.profileImage}
          />
          {/* Username */}
          <Text style={styles.username}>{selectedAccount?.display_address}</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome name="search" size={24} color="white" />
          <FontAwesome
            name="bell"
            size={24}
            color="white"
            onPress={async () => {
              await disconnect();
            }}
          />
        </View>
      </View>

      {/* Assets Section */}
      <AssetsCard title="ASSET BALANCE" amount="2,000 TRC" />

      {/* Collectibles Section */}
      <ScrollView style={styles.collectiblesContainer}>
        <Text style={styles.collectiblesTitle}>Collectibles</Text>

        {/* Grid of Collectibles */}
        <View style={styles.collectiblesGrid}>
          {[...Array(6)].map((_, index) => (
            <View key={index} style={styles.collectibleCard}>
              {/* Image */}
              <Image
                source={{ uri: "https://via.placeholder.com/200x150" }}
                style={styles.collectibleImage}
              />
              {/* Collectible Info */}
              <Text style={styles.collectibleName}>TrashB 50cl</Text>
              <Text style={styles.collectibleQuantity}>Quantity: 2x</Text>
              <Text style={styles.collectibleAmount}>Amount: 50cl</Text>

              {/* Redeem Button */}
              <TouchableOpacity style={styles.redeemButton}>
                <Text style={styles.redeemButtonText}>Redeem</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    position: "relative",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 8,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  collectiblesContainer: {
    flex: 1,
    padding: 16,
  },
  collectiblesTitle: {
    fontSize: 20,
    color: "white",
    marginBottom: 16,
  },
  collectiblesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  collectibleCard: {
    backgroundColor: "#1f1f1f",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: "48%",
  },
  collectibleImage: {
    width: "100%",
    height: 128,
    borderRadius: 8,
  },
  collectibleName: {
    color: "white",
    marginTop: 8,
  },
  collectibleQuantity: {
    color: "#A0A0A0",
  },
  collectibleAmount: {
    color: "#A0A0A0",
  },
  redeemButton: {
    backgroundColor: "#4CAF50",
    padding: 8,
    borderRadius: 24,
    marginTop: 8,
    alignItems: "center",
  },
  redeemButtonText: {
    color: "white",
    fontWeight: "600",
  },
});
