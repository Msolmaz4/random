import { Stack } from 'expo-router';

export default function ScreenLayout() {
  return (
    <Stack>
   
      <Stack.Screen name="game" options={{ headerShown: false }} />
      <Stack.Screen name="gameStart" options={{ headerShown: false }} />
      <Stack.Screen name="gameOver" options={{ headerShown: false }} />
    </Stack>
  );
}

