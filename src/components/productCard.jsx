import { useContext } from "react";
import { Heart, Plus, ShoppingBag } from "lucide-react";
import StarRating from "./starRating";
import { AppContext } from "../context/appContext";

export default function ProductCard({ product }) {
  const { favourite, cart, dispatch } = useContext(AppContext);
  const isInFavourite = favourite.some((item) => item.id === product.id);

  const isInCart = cart.some((item) => item.id === product.id);

  // Calculate original price
  const originalPrice =
    product.discountPercentage > 0
      ? product.price / (1 - product.discountPercentage / 100)
      : product.price;

  // Reviews count
  const reviewsCount = product.reviews?.length || 0;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* ================= IMAGE ================= */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* ================= BADGES ================= */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.discountPercentage > 0 && (
            <span className="rounded-lg bg-rose-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
              -{Math.round(product.discountPercentage)}%
            </span>
          )}

          {product.stock <= 5 && (
            <span className="rounded-lg bg-amber-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
              Low stock
            </span>
          )}
        </div>

        {/* ================= FAVOURITE ================= */}
        <button
          type="button"
          onClick={() => {
            if (isInFavourite) {
              dispatch({ type: "removeFromFavourite", payload: product.id });
            } else {
              dispatch({ type: "addToFavourite", payload: product });
            }
          }}
          aria-label={
            isInFavourite ? "Remove from favourites" : "Add to favourites"
          }
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg"
        >
          <Heart
            size={19}
            strokeWidth={2}
            fill={isInFavourite ? "#f23a65" : "none"}
            color={isInFavourite ? "#f23a65" : "#475569"}
          />
        </button>

        {/* ================= QUICK ADD ================= */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
          <button
            type="button"
            onClick={() => {
              if (isInCart) return;

              dispatch({ type: "addToCart", payload: product });
            }}
            disabled={isInCart}
            className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold shadow-lg transition-all duration-300 ${
              isInCart
                ? "cursor-not-allowed bg-slate-700 text-white"
                : "bg-footer-color text-white hover:bg-primary"
            }`}
          >
            {isInCart ? (
              <>
                <ShoppingBag size={17} />
                Added
              </>
            ) : (
              <>
                <Plus size={18} />
                Quick Add
              </>
            )}
          </button>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col p-4">
        {/* Category */}
        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
          {product.category}
        </p>

        {/* Product title */}
        <h3 className="mb-2 line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-footer-color transition-colors duration-200 group-hover:text-primary">
          {product.title}
        </h3>

        {/* ================= RATING ================= */}
        <div className="mb-4 flex items-center gap-2">
          <StarRating rating={product.rating} size="sm" />

          <span className="text-xs text-slate-400">({reviewsCount})</span>
        </div>

        {/* ================= PRICE ================= */}
        <div className="mt-auto flex items-end justify-between gap-2">
          <div className="flex min-w-0 flex-wrap items-baseline gap-2">
            {/* Current price */}
            <span className="text-lg font-bold text-footer-color">
              ${product.price.toFixed(2)}
            </span>

            {/* Original price */}
            {product.discountPercentage > 0 && (
              <span className="text-xs text-slate-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Stock */}
          <button
            onClick={() => {
              dispatch({ type: "addToCart", payload: product });
            }}
            className="bg-primary rounded-lg p-1 hover:scale-105 hover:bg-primary-hover cursor-pointer
            transition-all duration-200 hover:shadow-2xl"
          >
            <Plus color="white" size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}
