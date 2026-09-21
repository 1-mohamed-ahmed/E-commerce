import { useContext, useMemo, useState } from "react";
import { AppContext } from "../context/appContext";

import {
  Search,
  SlidersHorizontal,
  ShoppingCart,
  Heart,
  ArrowUpDown,
  X,
} from "lucide-react";

const Shop = () => {
  const { products, favourite, dispatch, homeDispatch, categories } =
    useContext(AppContext);

  // ================= STATE =================

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  // ================= CATEGORIES =================

  const allCategories = useMemo(() => {
    return ["all", ...new Set(categories.map((category) => category.name))];
  }, [categories]);

  // ================= FILTER + SEARCH + SORT =================
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // ================= SEARCH =================

    if (search.trim()) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase().trim()),
      );
    }

    // ================= SORT =================

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, search, sort]);

  // ================= ADD TO CART =================

  const handleAddToCart = (product) => {
    dispatch({
      type: "addToCart",
      payload: product,
    });
  };

  // ================= FAVOURITE =================

  const isFavourite = (productId) => {
    return favourite.some((item) => item.id === productId);
  };

  const handleFavourite = (product) => {
    if (isFavourite(product.id)) {
      dispatch({
        type: "removeFromFavourite",
        payload: product.id,
      });

      return;
    }

    dispatch({
      type: "addToFavourite",
      payload: product,
    });
  };

  // ================= CLEAR FILTERS =================

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setSort("default");
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Our Collection
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-footer-color sm:text-4xl">
                Shop
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Discover our latest products and find something you’ll love.
              </p>
            </div>

            <p className="text-sm font-medium text-slate-500">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>
        </div>

        {/* ================= SEARCH ================= */}

        <div className="mb-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Search */}

            <div className="relative flex-1">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                autoFocus={true}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm text-slate-700 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full p-1 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            {/* Sort */}

            <div className="relative lg:w-56">
              <ArrowUpDown
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-600 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10"
              >
                <option value="default">Sort by</option>

                <option value="price-low">Price: Low to High</option>

                <option value="price-high">Price: High to Low</option>

                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* ================= CATEGORY ================= */}

          <div
            className="category-scroll
    mt-4 flex gap-2
    overflow-x-auto
    pb-2
    scroll-smooth"
          >
            {allCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setCategory(item);

                  if (item === "all") {
                    homeDispatch({
                      type: "resetProducts",
                    });

                    return;
                  }

                  homeDispatch({
                    type: "fetchCategory",
                    payload: item,
                  });
                }}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium capitalize transition-all duration-200 ${
                  category === item
                    ? "bg-primary text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item === "all" ? "All Products" : item}
              </button>
            ))}
          </div>
        </div>

        {/* ================= PRODUCTS ================= */}

        {filteredProducts.length === 0 ? (
          <div className="flex min-h-[45vh] items-center justify-center rounded-3xl bg-white px-6 py-12 text-center shadow-sm">
            <div>
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
                <SlidersHorizontal size={30} className="text-slate-400" />
              </div>

              <h2 className="text-xl font-bold text-footer-color sm:text-2xl">
                No products found
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Try changing your search or filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Clear Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* ================= IMAGE ================= */}

                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-slate-100">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Discount */}

                  {product.discountPercentage > 0 && (
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                      -{Math.round(product.discountPercentage)}%
                    </span>
                  )}

                  {/* Favourite */}

                  <button
                    type="button"
                    onClick={() => handleFavourite(product)}
                    aria-label={
                      isFavourite(product.id)
                        ? "Remove from favourites"
                        : "Add to favourites"
                    }
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-red-500"
                  >
                    <Heart
                      size={18}
                      className={
                        isFavourite(product.id)
                          ? "fill-red-500 text-red-500"
                          : ""
                      }
                    />
                  </button>
                </div>

                {/* ================= CONTENT ================= */}

                <div className="p-5">
                  {/* Category */}

                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    {product.category}
                  </p>

                  {/* Title */}

                  <h2 className="line-clamp-1 text-lg font-semibold text-footer-color">
                    {product.title}
                  </h2>

                  {/* Description */}

                  <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-slate-500">
                    {product.description}
                  </p>

                  {/* Rating */}

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-700">
                      ★ {product.rating}
                    </span>

                    <span className="text-xs text-slate-400">
                      ({product.stock} in stock)
                    </span>
                  </div>

                  {/* Price */}

                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xl font-bold text-footer-color">
                      ${product.price}
                    </span>

                    {product.discountPercentage > 0 && (
                      <span className="text-sm text-slate-400 line-through">
                        $
                        {(
                          product.price /
                          (1 - product.discountPercentage / 100)
                        ).toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Add To Cart */}

                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-footer-color px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary active:scale-[0.98]"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Shop;

// const appContext = useMemo(() => {
//   return {
//     categories: currentState.categories,
//     products: currentState.products,

//     cart: currentCart.cart,
//     favourite: currentCart.favourite,

//     dispatch: cartDispatch,
//   };
// }, [currentState, currentCart]);

// dispatch({
//   type: "addToCart",
//   payload: product,
// });

// dispatch({
//   type: "addToFavourite",
//   payload: product,
// });
