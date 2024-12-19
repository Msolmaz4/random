import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";

import Title from "@/components/title/Title";
import Button from "@/components/button/Button";

export default function GameStart({ onSendNumber }) {
  const [number, onChangeNumber] = React.useState("");
  const resetHandle = () => {
    //console.log("reset");
    onChangeNumber("");
  };
  const confirmHandle = () => {
    //console.log("confirm");
    const choseNumber = parseInt(number);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        "ungültige Nummer",
        "Die Zahl muss zwischen 1 und 99 liegen",
        [{ text: "OK", onPress: resetHandle }]
      );
      return;
    }
    onSendNumber(choseNumber);
  };

  return (
    <View style={styles.container}>
      <Title title={"App zum Erraten von Zahlen"} />
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Zahl eingeben"
          maxLength={2}
          onChangeText={onChangeNumber}
          value={number}
        />
        <View style={styles.btn}>
          <View style={styles.button}>
            {" "}
            <Button title={"Lösung"} onPress={resetHandle} />
          </View>
          <View style={styles.button}>
            <Button title={"Akzeptieren"} onPress={confirmHandle} />{" "}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
 

  card: {
    backgroundColor: "#7f854d",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: 300,
    borderRadius: 20,
    marginTop: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    opacity: 0.8,
  },
  input: {
    width: 150,
    height: 75,
    marginLeft: 50,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",

    fontSize: 20,
    color: "black",
  },
  btn: {
    flexDirection: "row",

    justifyContent: "space-between",

    marginTop: 10,
  },
  button: {},
});
