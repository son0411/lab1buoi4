import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Italian', '#f5428d'),
  new Category('c2', 'Quick & Easy', '#f54242'),
  // Thêm nhiều danh mục khác...
];

export const MEALS = [
  new Meal('m1', ['c1'], 'Spaghetti', 'https://example.com/spaghetti.jpg', 20, 'simple', 'affordable', ['Pasta', 'Tomato']),
  new Meal('m2', ['c2'], 'Hamburger', 'https://example.com/hamburger.jpg', 15, 'simple', 'affordable', ['Beef', 'Buns']),
  // Thêm nhiều món ăn khác...
];
