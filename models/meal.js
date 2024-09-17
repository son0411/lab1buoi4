class Meal {
    constructor(id, categoryIds, title, imageUrl, duration, complexity, affordability, ingredients) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.imageUrl = imageUrl;
      this.duration = duration;
      this.complexity = complexity;
      this.affordability = affordability;
      this.ingredients = ingredients;
    }
  }
  
  export default Meal;
  