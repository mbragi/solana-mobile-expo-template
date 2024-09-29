import React from 'react';
import { Button } from 'react-native-paper';
import { StyleProp, ViewStyle } from 'react-native';

interface CustomButtonProps {
  mode: 'contained' | 'outlined';
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export function CustomButton({
  mode,
  onPress,
  disabled = false,
  style,
  children,
}: Readonly<CustomButtonProps>) {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      disabled={disabled}
      style={style}
    >
      {children}
    </Button>
  );
}
