import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.num}>{props.children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Color.secondaryColor,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  num: {
    color: Color.primaryColor,
    fontWeight: "bold",
    fontSize: 22,
  },
});
export default NumberContainer;
