import { useContext, useMemo, useState } from "react";
import { AppContext } from "../context/appContext";

import { Search, SlidersHorizontal, ArrowUpDown, X } from "lucide-react";
import ProductCard from "../components/productCard";

const Shop = () => {
  const { products, homeDispatch, categories } = useContext(AppContext);

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
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
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
