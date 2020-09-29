import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const GoalInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={props.setEnteredGoal}
        value={props.enteredGoal}
      />
      <Button title="ADD" onPress={props.addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 30,
  },
});
export default GoalInput;
