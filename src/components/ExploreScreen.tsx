import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  Animated,
  PanResponder,
  StyleSheet,
  Alert,
} from "react-native";

export function ExploreScreen() {
  const [sendAmount, setSendAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");

  const balance = 2000; // Sample balance for validation
  const pan = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 150) {
          Animated.spring(pan, {
            toValue: 300,
            useNativeDriver: false,
          }).start(() => {
            pan.setValue(0);
            Alert.alert("Swap executed!");
          });
        } else {
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const handleSendAmountChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, ""); // Allow only numbers
    setSendAmount(numericValue);

    // Logic to calculate receive amount based on a conversion rate, for example
    const conversionRate = 1.1; // Example conversion rate
    setReceiveAmount((parseInt(numericValue,10) * conversionRate).toFixed(2)); // Update receive amount
  };

  const validateSwap = () => {
    if (parseFloat(sendAmount) > balance) {
      Alert.alert("Insufficient balance");
      return false;
    }
    return true;
  };

  const handleSwap = () => {
    if (validateSwap()) {
      // Trigger swap
      pan.setValue(300);
      Alert.alert("Swap executed!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Swap</Text>
        <Ionicons name="time-outline" size={24} color="white" />
      </View>

      <View style={styles.swapContainer}>
        {/* Send Section */}
        <View style={styles.sendSection}>
          <Text style={styles.label}>Send</Text>
          <View style={styles.balanceContainer}>
            <View style={styles.tokenContainer}>
              <Image
                source={require('@assets/images/icon.png')}
                style={styles.tokenIcon}
              />
              <Text style={styles.tokenText}>Trc</Text>
            </View>
            <Text style={styles.balanceText}>Balance: {balance}</Text>
          </View>
          <TextInput
            style={styles.input}
            value={sendAmount}
            keyboardType="numeric"
            onChangeText={handleSendAmountChange}
            placeholder="Amount"
            placeholderTextColor="#A0A0A0"
          />
        </View>

        <View style={styles.arrowContainer}>
          <Ionicons name="swap-vertical-outline" size={30} color="green" />
        </View>

        {/* Receive Section */}
        <View style={styles.receiveSection}>
          <Text style={styles.label}>Receive</Text>
          <View style={styles.receiveContainer}>
            <View style={styles.tokenContainer}>
              <Image
                source={{
                  uri: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
                }}
                style={styles.tokenIcon}
              />
              <Text style={styles.tokenText}>USDC</Text>
            </View>
          </View>
          <TextInput
            style={styles.input}
            value={receiveAmount}
            editable={false} // Make receive amount read-only
            placeholder="Amount"
            placeholderTextColor="#A0A0A0"
          />
        </View>

        <View style={styles.swipeButtonContainer}>
          <Animated.View
            {...panResponder.panHandlers}
            style={[
              styles.swipeButton,
              { transform: [{ translateX: pan }] },
            ]}
          >
            <Text style={styles.swipeButtonText}>Swipe to Swap</Text>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  swapContainer: {
    width: '91%',
    backgroundColor: '#1f1f1f',
    borderRadius: 8,
    padding: 16,
    marginTop: 40,
  },
  sendSection: {
    marginBottom: 24,
  },
  label: {
    color: '#A0A0A0',
    fontSize: 12,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  tokenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tokenIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    borderRadius: 12,
  },
  tokenText: {
    color: 'white',
  },
  balanceText: {
    color: '#A0A0A0',
  },
  input: {
    backgroundColor: '#333333',
    color: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    textAlign: 'right',
  },
  arrowContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  receiveSection: {
    marginBottom: 24,
  },
  receiveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  swipeButtonContainer: {
    height: 48,
    backgroundColor: '#333333',
    width: '100%',
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
  },
  swipeButton: {
    backgroundColor: 'green',
    borderRadius: 24,
    height: '100%',
    width: 192,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});
