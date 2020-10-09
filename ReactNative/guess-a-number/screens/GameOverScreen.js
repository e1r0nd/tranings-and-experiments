import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Image source={require("../assets/success.png")} style={styles.image} />
      <Text>Number of rounds: {props.numOfRounds}</Text>
      <View style={styles.button}>
        <Button title="NEW GAME" onPress={props.startNewGame} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 30,
  },
  image: {
    width: "80%",
    height: 300,
  },
});

export default GameOverScreen;
