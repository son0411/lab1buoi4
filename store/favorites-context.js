import React, { useState } from 'react';

export const FavoritesContext = React.createContext({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  const addFavorite = (mealId) => {
    setFavoriteMeals((currentFavorites) => [...currentFavorites, mealId]);
  };

  const removeFavorite = (mealId) => {
    setFavoriteMeals((currentFavorites) => currentFavorites.filter(id => id !== mealId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites: favoriteMeals, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
