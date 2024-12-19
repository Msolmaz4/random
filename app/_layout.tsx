import { Stack } from 'expo-router';

export default function Layout() {
  return (
    
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
        <Stack.Screen name="screen/game" options={{ title: "Game" }} />
        <Stack.Screen name="screen/gameStart" options={{ headerShown: false }} />
        <Stack.Screen name="screen/gameOver" options={{ headerShown: false }} />
      </Stack>
  
  );
}
