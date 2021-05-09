import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  return (
    <MealList displayedMeals={favoriteMeals} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default FavoritesScreen;
