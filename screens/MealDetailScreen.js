import React, { useContext } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/favorites-context';

const MealDetailScreen = ({ route }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const favoritesCtx = useContext(FavoritesContext);

  const isFavorite = favoritesCtx.favorites.includes(mealId);

  const toggleFavoriteStatusHandler = () => {
    if (isFavorite) {
      favoritesCtx.removeFavorite(mealId);
    } else {
      favoritesCtx.addFavorite(mealId);
    }
  };

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <Button title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'} onPress={toggleFavoriteStatusHandler} />
    </View>
  );
};

export default MealDetailScreen;
