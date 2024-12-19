import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";
type ButtonProps = {
  title: string; // title zorunlu bir string
  onPress: () => void; // onPress zorunlu bir fonksiyon
  color?: string; // color isteğe bağlı bir string
};
export default function Button({ title, onPress ,color}:ButtonProps ) {
  return (
    <View style={[styles.contanier, { backgroundColor: color || "white" }]}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.contanier, styles.press ] : (styles.contanier)
        }
        onPress={onPress}
      >
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
    margin: 10,
    borderBlockColor: "#000",
 
 
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  press: {
    opacity: 0.5,
     backgroundColor: "red"
  },
  title: {

  },
});
