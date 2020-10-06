import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.scree}>
      <Header title="Guess a Number"></Header>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  scree: { flex: 1 },
});
