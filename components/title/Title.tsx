import { StyleSheet, Text, View } from "react-native";
import React from "react";
type TitleProps = {
  title: string; 
  color?: string; // color isteğe bağlı bir string
};
export default function Title({ title, color }:TitleProps) {
  return (
    <View>
      <Text style={[styles.inp, { color: color }]}>{title} </Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  inp: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: "bold",
    color: "black",
    textAlign: "center"
  }
});
