import React, { useRef, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { useRouter } from "expo-router";
import { ConnectButton } from "./connect-button";

export function OnboardFeature() {
  // const router = useRouter();
  const translateX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenWidth = Dimensions.get("window").width;

  const sections = [
    {
      id: 1,
      image: require("../../../assets/svg/Group 3.png"),
      title: "Earn Trash Coins for every action",
      description:
        "The more you collect, the closer you get to transforming trash into treasure",
    },
    {
      id: 2,
      image: require("../../../assets/svg/Group 6.png"),
      title: "Swap, redeem, and stake rare NFTs",
      description:
        "Trade your Trash Coins for unique NFTs that you can keep, trade, or sell on the marketplace",
    },
    {
      id: 3,
      image: require("../../../assets/svg/Group 7.png"),
      title: "Join our Community",
      description:
        "Join a growing community focused on sustainability and turning digital waste into valuable assets",
    },
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <GestureHandlerRootView style={styles.root}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Smooth updates
      >
        {sections.map((section) => (
          <View key={section.id} style={[styles.sectionContainer, { width: screenWidth }]}>
            {/* Rotated Image */}
            <View style={styles.imageContainer}>
              <Image source={section.image} style={styles.image} />
            </View>

            {/* Text Content */}
            <Text style={styles.title}>{section.title}</Text>
            <Text style={styles.description}>{section.description}</Text>

            {/* Slide Indicator */}
            <View style={styles.indicatorContainer}>
              {sections.map((_, index) => (
                <View
                  key={_.id}
                  style={[
                    styles.indicator,
                    currentIndex === index && styles.activeIndicator,
                  ]}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      <ConnectButton />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 0,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "black",
  },
  sectionContainer: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    transform: [{ rotate: '0deg' }], // Customize rotation if needed
    marginBottom: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    maxWidth: 300,
  },
  description: {
    color: "#B0B0B0", // Light gray color (like Tailwind's `text-gray-400`)
    fontSize: 18,
    marginBottom: 32,
    textAlign: "center",
    maxWidth: 300,
  },
  indicatorContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: "#2cc15c",
  },
});
