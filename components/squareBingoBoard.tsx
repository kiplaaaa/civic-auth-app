import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type SquareGoalsProps = {
  goal: string;
  onPress: () => void;
};

export default function SquareGoals({ goal, onPress }: SquareGoalsProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.square}>
      <Text style={styles.text} numberOfLines={2}>
        {goal}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  square: {
    height: 90,
    width: 90,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
  },
});
