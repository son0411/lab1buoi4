import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/favorites-context';

const FavoritesScreen = ({ navigation }) => {
  const favoritesCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter(meal => favoritesCtx.favorites.includes(meal.id));

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          navigation.navigate('MealDetail', { mealId: itemData.item.id });
        }}
      />
    );
  };

  return (
    <View>
      <FlatList data={favoriteMeals} renderItem={renderMealItem} />
    </View>
  );
};

export default FavoritesScreen;
