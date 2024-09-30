import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';

export function OrderFeature() {
  const [image, setImage] = useState(null);
  const [size, setSize] = useState('50CL');
  const [quantity, setQuantity] = useState('');
  const [agent, setAgent] = useState('Jerry Bun Victor');

  // Function to handle image picking
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
        // @ts-ignore
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        {/* Image picker */}
        <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Text style={styles.imagePlaceholder}>Add Image</Text>
          )}
        </TouchableOpacity>

        {/* Size Picker */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Size</Text>
          <RNPickerSelect
            onValueChange={(value: React.SetStateAction<string>) => setSize(value)}
            items={[
              { label: '50CL', value: '50CL' },
              { label: '75CL', value: '75CL' },
              { label: '100CL', value: '100CL' },
            ]}
            value={size}
            style={{
              inputIOS: styles.pickerInput,
              inputAndroid: styles.pickerInput,
            }}
          />
        </View>

        {/* Quantity Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Quantity</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            placeholder="Enter Quantity"
            placeholderTextColor="#888"
            value={quantity}
            onChangeText={setQuantity}
          />
        </View>

        {/* Agent Picker */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Agent</Text>
          <RNPickerSelect
            onValueChange={(value: React.SetStateAction<string>) => setAgent(value)}
            items={[
              { label: 'Bun Victor', value: 'Jerry Victor' },
              { label: 'Another Agent', value: 'Another Agent' },
            ]}
            value={agent}
            style={{
              inputIOS: styles.pickerInput,
              inputAndroid: styles.pickerInput,
            }}
          />
        </View>

        {/* Location (Static for now) */}
        <View style={styles.locationContainer}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.locationText}>Jos, Plateau State Nigeria</Text>
        </View>

        {/* Plan an order button */}
        <View style={styles.orderButtonContainer}>
          <Button title="Plan an order" color="#f1f1f1" onPress={() => { /* Handle Order Planning */ }} />
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
  formContainer: {
    width: '100%',
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 8,
  },
  imagePicker: {
    backgroundColor: '#1F2937', // bg-gray-900
    height: 160,
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  imagePlaceholder: {
    color: '#6B7280', // text-gray-500
  },
  inputGroup: {
    marginTop: 16,
  },
  label: {
    color: '#F3F4F6', // text-gray-100
    paddingVertical: 8,
  },
  textInput: {
    borderColor: '#1F2937', // border bg-gray-900
    backgroundColor: '#1F2937',
    padding: 8,
    borderRadius: 8,
    color: '#FFFFFF', // text color
  },
  pickerInput: {
    backgroundColor: '#111827', // #111827 - bg
    color: 'white',
    padding: 10,
    borderRadius: 8,
  },
  locationContainer: {
    marginTop: 32,
  },
  locationText: {
    color: '#F3F4F6', // text-gray-100
  },
  orderButtonContainer: {
    marginTop: 24,
    backgroundColor: '#10B981', // bg-green-600
    borderRadius: 8,
  },
});
