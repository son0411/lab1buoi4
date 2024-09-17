import React from 'react';
import { View, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

const MealsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

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
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
    </View>
  );
};

export default MealsScreen;
