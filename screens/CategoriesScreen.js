import React from 'react';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate('Meals', { categoryId: itemData.item.id });
        }}
      />
    );
  };

  return <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />;
};

export default CategoriesScreen;
