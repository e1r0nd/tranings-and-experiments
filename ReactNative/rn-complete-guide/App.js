import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler() {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
  }

  function removeGoalHandler(id) {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.key !== id)
    );
  }

  return (
    <View style={styles.screen}>
      <GoalInput
        addGoalHandler={addGoalHandler}
        setEnteredGoal={setEnteredGoal}
        enteredGoal={enteredGoal}
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
