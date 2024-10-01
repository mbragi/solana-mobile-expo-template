import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import AssetsCard from "../ui/AssestsCard";
import { AccountBalance } from "../account/account-ui";
import { useAuthorization } from "@/hooks/useAuthorization";

export function ProfileFeature() {
  const { selectedAccount } = useAuthorization();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Profile Image and Username */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "https://placekitten.com/50/50" }} // Replace with profile image
            style={styles.profileImage}
          />
          <Text style={styles.username}>djmwfioknwl...</Text>
        </View>
        {/* More Options Icon */}
        <View>
          <Ionicons name="time-outline" size={24} color="white" />
        </View>
      </View>

        {/* Assets Section */}
        <AssetsCard title="ASSET BALANCE" amount="2,000 TRC">
        {selectedAccount && (
          <AccountBalance address={selectedAccount.publicKey} />
        )}
      </AssetsCard>

      {/* Categories (Airtime, Data, TV, Electricity) */}
      <View style={styles.categoriesContainer}>
        <View style={styles.categoryItem}>
          <Ionicons name="call-outline" size={24} color="white" />
          <Text style={styles.categoryText}>Airtime</Text>
        </View>
        <View style={styles.categoryItem}>
          <MaterialIcons name="cloud-download" size={24} color="white" />
          <Text style={styles.categoryText}>Data</Text>
        </View>
        <View style={styles.categoryItem}>
          <FontAwesome name="tv" size={24} color="white" />
          <Text style={styles.categoryText}>TV</Text>
        </View>
        <View style={styles.categoryItem}>
          <FontAwesome name="bolt" size={24} color="white" />
          <Text style={styles.categoryText}>Electricity</Text>
        </View>
      </View>

      {/* Assets Cards */}
      <View style={styles.assetsCards}>
        {/* Trash Coin Row */}
        <View style={styles.assetRow}>
          <View style={styles.assetInfo}>
            <View style={styles.iconWrapper}>
              <Image
                source={require("@assets/images/icon.png")} // Replace with actual icon image
                style={styles.coinIcon}
              />
            </View>
            <View>
              <Text style={styles.assetName}>Trash Coin</Text>
              <View style={styles.assetDetails}>
                <Text style={styles.assetPrice}>$0.025</Text>
                <Text style={styles.assetChange}>+23.0%</Text>
              </View>
            </View>
          </View>
          <Text style={styles.assetAmount}>1,800 Trc</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* USD Coin Row */}
        <View style={styles.assetRow}>
          <View style={styles.assetInfo}>
            <View style={styles.iconWrapper}>
              <Image
                source={{
                  uri: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
                }}
                style={styles.coinIcon}
              />
            </View>
            <View>
              <Text style={styles.assetName}>USD Coin</Text>
              <View style={styles.assetDetails}>
                <Text style={styles.assetPrice}>$1.00</Text>
                <Text style={styles.assetChange}>0.0%</Text>
              </View>
            </View>
          </View>
          <Text style={styles.assetAmount}>5 USDC</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    position:'relative'
  },
  header: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    color: "white",
    marginLeft: 8,
  },
  assetsSection: {
    marginHorizontal: 16,
    padding: 32,
    borderRadius: 8,
  },
  assetsTitle: {
    color: "white",
  },
  assetsAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 28,
  },
  categoryItem: {
    alignItems: "center",
  },
  categoryText: {
    color: "white",
    marginTop: 4,
  },
  assetsCards: {
    backgroundColor: "black",
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    columnGap: 16,
  },
  assetRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  assetInfo: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 8,
  },
  iconWrapper: {
    padding: 8,
    borderRadius: 9999,
  },
  coinIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  assetName: {
    color: "white",
    fontWeight: "bold",
  },
  assetDetails: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: 8,
  },
  assetPrice: {
    color: "gray",
    fontSize: 12,
  },
  assetChange: {
    color: "green",
    fontSize: 12,
  },
  assetAmount: {
    color: "white",
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "gray",
  },
});
