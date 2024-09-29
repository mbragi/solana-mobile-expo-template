import { ConnectButton } from "@/components/sign-in/sign-in-ui";
import React, {  useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export function OnboardFeature() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenWidth = Dimensions.get("window").width;

  const sections = [
    {
      id: 1,
      image: require("../../assets/svg/Group 3.png"),
      title: "Earn Trash Coins for every action",
      description:
        "The more you collect, the closer you get to transforming trash into treasure",
    },
    {
      id: 2,
      image: require("../../assets/svg/Group 6.png"),
      title: "Swap, redeem, and stake rare NFTs",
      description:
        "Trade your Trash Coins for unique NFTs that you can keep, trade, or sell on the marketplace",
    },
    {
      id: 3,
      image: require("../../assets/svg/Group 7.png"),
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
    <GestureHandlerRootView style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {sections.map((section) => (
          <View key={section.id} style={[styles.section, { width: screenWidth }]}>
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
                    { backgroundColor: currentIndex === index ? "#2cc15c" : "#ffffff" },
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    marginTop: -80,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 0,
  },
  section: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    color: '#ffffff',
    fontSize: 32, 
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    maxWidth: 300,
  },
  description: {
    color: '#9ca3af', 
    fontSize: 20, 
    marginBottom: 30,
    textAlign: "center",
    maxWidth: 300,
  },
  indicatorContainer: {
    flexDirection: "row",
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});
