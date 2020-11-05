import React from "react";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m3");
  return <MealList displayedMeals={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default FavoritesScreen;
