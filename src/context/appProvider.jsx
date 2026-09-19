// ========= OTHER COMPONENTS ============
import reducer from "../reducer/homeReducer";
import { AppContext } from "./appContext";
import ApiConst from "../const/api_const";
// ========= Hoocks =============
import { useReducer, useEffect, useMemo } from "react";
// ========= OUT LIBRARIES
import axios from "axios";

const AppProvider = ({ children }) => {
  const reducerInitializer = {
    categories: [],
    products: [],
  };
  const [currentState, dispatch] = useReducer(reducer, reducerInitializer);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get(ApiConst.endPoits.allCategories);

        const categoriesName = response.data;

        dispatch({
          type: "allCategories",
          payload: categoriesName,
        });
      } catch (error) {
        console.log(error);
      }
    }

    getCategories();
  }, []);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await axios.get(ApiConst.baseUrl);

        const allProducts = response.data;

        dispatch({
          type: "allProducts",
          payload: allProducts.products,
        });
      } catch (error) {
        console.log(error);
      }
    }

    getAllProducts();
  }, []);

  const appContext = useMemo(() => {
    return {
      categories: currentState.categories,
      products: currentState.products,
    };
  }, [currentState]);

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
