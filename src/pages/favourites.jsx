import { useContext } from "react";
import { AppContext } from "../context/appContext";

import { Link } from "react-router-dom";
import { Heart, ArrowRight, ShoppingCart, Trash2 } from "lucide-react";

const Favourites = () => {
  const { favourite, dispatch } = useContext(AppContext);

  // ================= REMOVE FROM FAVOURITE =================

  const handleRemoveFavourite = (productId) => {
    dispatch({
      type: "removeFromFavourite",
      payload: productId,
    });
  };

  // ================= ADD TO CART =================

  const handleAddToCart = (product) => {
    dispatch({
      type: "addToCart",
      payload: product,
    });
  };

  return (
    <main className="min-h-[70vh] bg-slate-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      {favourite.length === 0 ? (
        // ================= EMPTY =================

        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="w-full max-w-lg rounded-3xl px-6 py-12 text-center sm:px-10">
            {/* Icon */}

            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#FFF1F2]">
              <Heart size={38} strokeWidth={1.7} className="text-[#FFA1AD]" />
            </div>

            {/* Content */}

            <h1 className="text-2xl font-bold text-footer-color sm:text-3xl">
              Your wishlist is empty
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              You haven't saved any products yet. Explore our collection and
              save the products you love.
            </p>

            {/* Button */}

            <Link
              to="/"
              className="mx-auto mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:text-base"
            >
              Browse Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      ) : (
        // ================= FAVOURITES =================

        <div className="mx-auto max-w-7xl">
          {/* ================= HEADER ================= */}

          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Heart size={20} className="fill-[#FFA1AD] text-[#FFA1AD]" />

                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Wishlist
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-footer-color sm:text-4xl">
                Your Favourites
              </h1>

              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Products you saved for later.
              </p>
            </div>

            {/* Counter */}

            <div className="w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              {favourite.length} {favourite.length === 1 ? "item" : "items"}
            </div>
          </div>

          {/* ================= PRODUCTS ================= */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favourite.map((product) => (
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
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      -{Math.round(product.discountPercentage)}%
                    </span>
                  )}

                  {/* Remove */}

                  <button
                    type="button"
                    onClick={() => handleRemoveFavourite(product.id)}
                    aria-label={`Remove ${product.title} from favourites`}
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 size={17} />
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

                  {/* ================= PRICE ================= */}

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

                  {/* ================= ADD TO CART ================= */}

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
        </div>
      )}
    </main>
  );
};

export default Favourites;
