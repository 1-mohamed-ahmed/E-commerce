const reducer = (currentState, action) => {
  switch (action.type) {
    case "allCategories":
      return { ...currentState, categories: action.payload };
    case "allProducts":
      return { ...currentState, products: action.payload };

    default:
      return currentState;
  }
};

export default reducer;
