import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ComputerNumber({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "yellow",
    borderRadius: 10,
    padding: 25,
    margin: 10,

    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
