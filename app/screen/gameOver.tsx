import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "@/components/title/Title";
import Button from "@/components/button/Button";

export default function GameOver({roundsNumber,userNumber,erneut}) {
  return (
    <View style={styles.container}>
      <Title title="Spiel vorbei" color="red" />
      <Text style={styles.result}>
        <Text style={styles.count}>{roundsNumber}</Text><Text style={styles.text}>    versuchen </Text>  
        <Text style={styles.count}>        {userNumber}</Text>  
                  Usernumber haben Sie gefunden
      </Text>
      <Button title="Home/Erneut" onPress={erneut}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  
    fontStyle: "italic",
    borderBlockColor: "#ffffff",

    width: "100%",
    height: "100%",
    padding: 10,
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 100,
    paddingRight: 100,
    borderRadius: 10,
    borderWidth: 10,
    borderColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  

  result: {
    fontSize: 20,
    color: "#e22121",
  },
  count: {
    fontSize: 20,
    color: "#133de4",
  },
  text:{
    color:"#ffffff"
  },
});
