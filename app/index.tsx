import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
//import GameStart from "@/components/screen/GameStart";
import { LinearGradient } from "expo-linear-gradient";
//import Game from "@/components/screen/Game";
import GameStart from "./screen/gameStart";
import Game from "./screen/game";
import GameOver from "./screen/gameOver";

const index = () => {
  const router = useRouter();
  const [userNumber, setUserNumber] = useState("");
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const sendeNumber = (number) => {
    console.log(number, "number");
    setUserNumber(number);
    setGameIsOver(false);
  };
  const gameOverHandle = (numberCount) => {
    setRoundsNumber(numberCount);
    setGameIsOver(true);
  };

  const erneut = () => {
    setUserNumber("");
    setRoundsNumber(0);
  };
  let screnn = <GameStart onSendNumber={sendeNumber} />;
  if (userNumber) {
    screnn = (
      <>
        <Game
          userNumber={userNumber}
          onGaverOver={gameOverHandle}
          erneut={erneut}
        />
        {/* <Link href="/" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Game11</Text>
        </TouchableOpacity>
      </Link> */}
      </>
    );
  }

  if (gameIsOver && userNumber) {
    screnn = (
      <GameOver
        roundsNumber={roundsNumber}
        userNumber={userNumber}
        erneut={erneut}
      />
    );
  }

  return (
    <ImageBackground
      source={require("@/assets/images/weg.jpg")}
      style={styles.container}
    >
      {screnn}
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: { padding: 10, backgroundColor: "blue", borderRadius: 5 },
  buttonText: { color: "white", fontSize: 18 },
});
