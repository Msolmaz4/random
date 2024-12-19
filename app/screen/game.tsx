import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ComputerNumber from "@/components/ComputerNunber/ComputerNumber";
import { Link, useRouter } from "expo-router";
import Title from "@/components/title/Title";
import Button from "@/components/button/Button";
import { useNavigation } from "expo-router"; // Sadece buraya koy
import GuesNumber from "@/components/GuesNumber/GuesNumber";

const generateRandomNumber = (min, max, exclude) => {
  let random;
  do {
    random = Math.floor(Math.random() * (max - min)) + min;
  } while (random === exclude && max - min > 1); // Sadece geçerli bir sayı varsa döngü devam eder
  return random;
};

let min = 1;
let max = 100;
export default function Game({ userNumber, onGaverOver, erneut }) {
  const initial = generateRandomNumber(1, 100, userNumber);
  const [current, setCurrent] = useState(initial);
  const [guesCount, setGuesCount] = useState([initial]);
  const [range, setRange] = useState({ min: 1, max: 100 }); // min ve max için state ekleniyor

  useEffect(() => {
    if (current === userNumber) {
      onGaverOver(guesCount.length);
    }
  }, [current, userNumber, onGaverOver]);

  const handle = (text) => {
    if (
      (text === "lower" && current < userNumber) ||
      (text === "greater" && current > userNumber)
    ) {
      Alert.alert("Hata!", "Yanlış yönlendirme yaptınız!", [
        {
          text: "Tamam",
          onPress: () => console.log("Tamam tıklandı"),
          style: "cancel",
        },
      ]);
      return;
    }

    setRange((prevRange) => {
      let newMin = prevRange.min;
      let newMax = prevRange.max;

      if (text === "lower") {
        newMax = current; // Üst sınırı güncelle
      } else if (text === "greater") {
        newMin = current + 1; // Alt sınırı güncelle
      }

      // Eğer geçerli bir aralık yoksa uyarı göster
      if (newMin >= newMax) {
        Alert.alert("Geçerli bir sayı kalmadı!", "Oyunu yeniden başlatın.");
        return prevRange; // Değişiklik yapılmaz
      }

      const newRandom = generateRandomNumber(newMin, newMax, current);
      setCurrent(newRandom);
      setGuesCount((prev) => [newRandom, ...prev]);

      return { min: newMin, max: newMax }; // Yeni aralığı döndür
    });
  };

  return (
    <View>
      <Title title="Computervorhersage"  />

      <ComputerNumber>
        <Text>Computer: {current}</Text>
      </ComputerNumber>
      <View>
        <Text>erhöhen und verringern</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => handle("lower")}>
          <Button title="MINUS (-)" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handle("greater")}>
          <Button title="PLUS (+)" />
        </TouchableOpacity>
      </View>
      <Button title="Home/Erneut" onPress={erneut} color="red" />
      <View style={{ marginTop: 10 }}>
        <FlatList
       
          data={guesCount}
          renderItem={({ item, index }) => (
            <GuesNumber
              roundNumber={guesCount.length - index}
              guesNumber={item}
              item={item}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: { padding: 10, backgroundColor: "blue", borderRadius: 5 },
  buttonText: { color: "white", fontSize: 18 },
});
