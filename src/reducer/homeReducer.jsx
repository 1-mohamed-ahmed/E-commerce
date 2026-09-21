const HomeReducer = (currentState, action) => {
  switch (action.type) {
    case "allCategories":
      return { ...currentState, categories: action.payload };
    case "allProducts":
      return { ...currentState, products: action.payload };
    //=========== SHOP =================
    case "fetchCategory": {
      const selectedCategory = currentState.categories.find((cat) => {
        return cat.name === action.payload;
      });

      if (!selectedCategory) return currentState;

      return { ...currentState, productCategory: selectedCategory };
    }

    default:
      return currentState;
  }
};

export default HomeReducer;
