// ========= OTHER COMPONENTS ============
import HomeReducer from "../reducer/homeReducer";
import CartAndFavouriteReducer from "../reducer/CartReducer";
import { AppContext } from "./appContext";
import ApiConst from "../const/api_const";

// ========= HOOKS ============
import { useReducer, useEffect, useMemo, useState } from "react";

// ========= OUT LIBRARIES ============
import axios from "axios";

const homeReducerinitializer = {
  categories: [],
  products: [],
  productCategory: null,
};

const AppProvider = ({ children }) => {
  // ================= HOME =================

  const [currentState, homeDispatch] = useReducer(
    HomeReducer,
    homeReducerinitializer,
  );

  // ================= CART & FAVOURITE =================
  const [currentCart, cartDispatch] = useReducer(
    CartAndFavouriteReducer,
    { cart: [], favourite: [] },
    () => {
      const savedCart = localStorage.getItem("cart");
      const savedFavourite = localStorage.getItem("favourite");
      return {
        cart: savedCart ? JSON.parse(savedCart) : [],
        favourite: savedFavourite ? JSON.parse(savedFavourite) : [],
      };
    },
  );

  const [isLogedIn, setIsLogedin] = useState(false);

  useEffect(() => {
    if (!currentState.productCategory) return;
    async function fetchCategoryData() {
      try {
        const response = await axios.get(currentState.productCategory.url);
        const data = response.data;

        homeDispatch({
          type: "allProducts",
          payload: data.products,
        });
      } catch (e) {
        console.log(e);
      }
    }
    fetchCategoryData();
    return () => {};
  }, [currentState.productCategory]);

  // ================= LOCAL STORAGE =================

  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(currentCart.favourite));
  }, [currentCart.favourite]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(currentCart.cart));
  }, [currentCart.cart]);

  // ================= APII - CATEGORIES =================
  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get(ApiConst.endPoits.allCategories);
        const categoriesName = response.data;
        homeDispatch({
          type: "allCategories",
          payload: categoriesName,
        });
      } catch (error) {
        console.log(error);
      }
    }

    getCategories();
  }, []);

  // ================= API - PRODUCTS =================

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await axios.get(ApiConst.baseUrl);

        const allProducts = response.data;

        homeDispatch({
          type: "allProducts",
          payload: allProducts.products,
        });
      } catch (error) {
        console.log(error);
      }
    }

    getAllProducts();
  }, []);

  // ================= CONTEXT =================
  const appContext = useMemo(() => {
    return {
      // Categorie
      categories: currentState.categories,
      // Products
      products: currentState.products,
      homeDispatch: homeDispatch,
      // Cart & Favourite
      cart: currentCart.cart,
      favourite: currentCart.favourite,
      dispatch: cartDispatch,
      // Loign
      isLogedIn: isLogedIn,
      setIsLogedin: setIsLogedin,
    };
  }, [currentState, currentCart, isLogedIn]);

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
