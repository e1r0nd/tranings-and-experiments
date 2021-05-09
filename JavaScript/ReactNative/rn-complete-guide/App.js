import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  function addGoalHandler() {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    closeModal();
  }

  function removeGoalHandler(id) {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.key !== id)
    );
  }

  function closeModal() {
    setIsAddMode(false);
    setEnteredGoal("");
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        addGoalHandler={addGoalHandler}
        setEnteredGoal={setEnteredGoal}
        enteredGoal={enteredGoal}
        closeModal={closeModal}
      />
      <FlatList
        data={courseGoals}
        renderItem={(data) => (
          <GoalItem
            id={data.item.key}
            onDelete={removeGoalHandler}
            title={data.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});
