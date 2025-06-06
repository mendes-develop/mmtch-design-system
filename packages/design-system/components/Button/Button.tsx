import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface MyButtonProps {
  onPress: () => void;
  children: string;
}

export const Button = ({ onPress, children }: MyButtonProps) => {
  return (
    <Pressable
      className="self-center px-8 py-2 bg-primary-foreground rounded-lg web:hover:bg-sky-600 native:active:bg-sky-600"
      onPress={onPress}
    >
      <Text className="text-primary-foreground text-lg font-bold">{children}</Text>
    </Pressable>
  );
};
