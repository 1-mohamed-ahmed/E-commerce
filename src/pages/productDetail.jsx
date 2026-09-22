import { useContext, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Check,
  Package,
} from "lucide-react";

import { AppContext } from "../context/appContext";

const ProductDetails = () => {
  const { id } = useParams();

  const { products, favourite, cart, dispatch } = useContext(AppContext);

  const [quantity, setQuantity] = useState(1);

  // ================= PRODUCT =================

  const product = useMemo(() => {
    return products?.find((item) => String(item.id) === String(id));
  }, [products, id]);

  // ================= LOADING =================

  if (!products || products.length === 0) {
    return (
      <main className="min-h-[75vh] bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 rounded-full border-4 border-slate-200 border-t-primary animate-spin" />

          <p className="mt-4 text-sm text-slate-500">Loading product...</p>
        </div>
      </main>
    );
  }

  // ================= NOT FOUND =================

  if (!product) {
    return (
      <main className="min-h-[75vh] bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-sm">
            <Package className="text-slate-400" size={34} />
          </div>

          <h1 className="mt-6 text-3xl font-black text-slate-900">
            Product Not Found
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            The product you're looking for doesn't exist or may have been
            removed.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-hover"
          >
            <ArrowLeft size={17} />
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  // ================= STATUS =================

  const isFavourite = favourite?.some((item) => item.id === product.id);

  const isInCart = cart?.some((item) => item.id === product.id);

  // ================= PRICE =================

  const discount = Number(product.discountPercentage || 0);

  const originalPrice =
    discount > 0 ? product.price / (1 - discount / 100) : product.price;

  const totalPrice = product.price * quantity;

  // ================= REVIEWS =================

  const reviewsCount = product.reviews?.length || 0;

  // ================= FAVOURITE =================

  const handleFavourite = () => {
    if (isFavourite) {
      dispatch({
        type: "removeFromFavourite",
        payload: product.id,
      });
    } else {
      dispatch({
        type: "addToFavourite",
        payload: product,
      });
    }
  };

  // ================= CART =================

  const handleAddToCart = () => {
    dispatch({
      type: "addToCart",
      payload: {
        ...product,
        quantity,
      },
    });
  };

  // ================= QUANTITY =================

  const increaseQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, product.stock));
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-5 text-sm sm:px-6 lg:px-8">
          <Link to="/" className="text-slate-400 transition hover:text-primary">
            Home
          </Link>

          <ChevronRight size={15} className="text-slate-300" />

          <Link
            to="/shop"
            className="text-slate-400 transition hover:text-primary"
          >
            Shop
          </Link>

          <ChevronRight size={15} className="text-slate-300" />

          <span className="max-w-50 truncate font-medium text-slate-900">
            {product.title}
          </span>
        </div>
      </div>

      {/* =====================================================
          PRODUCT SECTION
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div>
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50">
              {/* Discount */}

              {discount > 0 && (
                <div className="absolute left-5 top-5 z-10 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white shadow-lg">
                  -{Math.round(discount)}% OFF
                </div>
              )}

              {/* Favourite */}

              <button
                type="button"
                onClick={handleFavourite}
                aria-label={
                  isFavourite ? "Remove from favourites" : "Add to favourites"
                }
                className={`absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-md transition duration-300 hover:scale-105 ${
                  isFavourite
                    ? "border-red-100 text-red-500"
                    : "border-slate-100 text-slate-600 hover:border-red-100 hover:text-red-500"
                }`}
              >
                <Heart size={21} fill={isFavourite ? "currentColor" : "none"} />
              </button>

              {/* Image */}

              <div className="flex aspect-square items-center justify-center p-8 sm:p-14 lg:p-16">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-contain mix-blend-multiply transition duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Small info under image */}

            <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                  <Check size={18} className="text-emerald-600" />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Authentic Product
                  </p>

                  <p className="text-[11px] text-slate-400">Quality checked</p>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-slate-100 sm:block" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Package size={18} className="text-blue-500" />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Fast Delivery
                  </p>

                  <p className="text-[11px] text-slate-400">Ready to ship</p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <div className="flex flex-col justify-center">
            {/* Category */}

            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                {product.category}
              </span>

              {product.brand && (
                <span className="text-sm font-medium text-slate-400">
                  {product.brand}
                </span>
              )}
            </div>

            {/* Title */}

            <h1 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {product.title}
            </h1>

            {/* Rating */}

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-2.5 py-1.5">
                  <Star
                    size={16}
                    className="text-yellow-500"
                    fill="currentColor"
                  />

                  <span className="text-sm font-bold text-slate-900">
                    {product.rating}
                  </span>
                </div>

                <span className="text-sm text-slate-400">
                  {reviewsCount} reviews
                </span>
              </div>

              <span className="hidden h-5 w-px bg-slate-200 sm:block" />

              <span
                className={`text-sm font-semibold ${
                  product.stock <= 5 ? "text-amber-500" : "text-emerald-600"
                }`}
              >
                {product.stock <= 5 ? `Only ${product.stock} left` : "In stock"}
              </span>
            </div>

            {/* Price */}

            <div className="mt-7">
              <div className="flex flex-wrap items-end gap-3">
                <span className="text-4xl font-black tracking-tight text-slate-900">
                  ${product.price.toFixed(2)}
                </span>

                {discount > 0 && (
                  <span className="mb-1 text-lg text-slate-400 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {discount > 0 && (
                <p className="mt-2 text-xs font-medium text-emerald-600">
                  You save ${(originalPrice - product.price).toFixed(2)}
                </p>
              )}
            </div>

            {/* Description */}

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-500">
              {product.description}
            </p>

            <div className="my-8 h-px bg-slate-100" />

            {/* Quantity + Cart */}

            <div>
              <p className="mb-3 text-sm font-bold text-slate-900">Quantity</p>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Quantity */}

                <div className="flex h-14 w-full items-center justify-between rounded-xl border border-slate-200 sm:w-36">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                    className="flex h-full w-12 items-center justify-center text-slate-500 transition hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <Minus size={17} />
                  </button>

                  <span className="font-bold text-slate-900">{quantity}</span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stock}
                    className="flex h-full w-12 items-center justify-center text-slate-500 transition hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <Plus size={17} />
                  </button>
                </div>

                {/* Add Cart */}

                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={isInCart}
                  className={`flex h-14 flex-1 items-center justify-center gap-3 rounded-xl px-6 font-bold transition duration-300 ${
                    isInCart
                      ? "cursor-not-allowed bg-slate-800 text-white"
                      : "bg-primary text-white shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:bg-primary-hover"
                  }`}
                >
                  <ShoppingCart size={20} />

                  {isInCart ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>

              {quantity > 1 && (
                <p className="mt-3 text-sm text-slate-400">
                  Total:{" "}
                  <span className="font-bold text-slate-900">
                    ${totalPrice.toFixed(2)}
                  </span>
                </p>
              )}
            </div>

            {/* Wishlist */}

            <button
              type="button"
              onClick={handleFavourite}
              className={`mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-xl border text-sm font-bold transition ${
                isFavourite
                  ? "border-red-100 bg-red-50 text-red-500"
                  : "border-slate-200 text-slate-600 hover:border-red-100 hover:text-red-500"
              }`}
            >
              <Heart size={18} fill={isFavourite ? "currentColor" : "none"} />

              {isFavourite ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>

            {/* =================================================
                SERVICE CARDS
            ================================================== */}

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {/* Shipping */}

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <Truck size={21} className="text-primary" />

                <p className="mt-4 text-xs font-bold text-slate-900">
                  Free Shipping
                </p>

                <p className="mt-1 text-[11px] leading-5 text-slate-400">
                  Orders over $75
                </p>
              </div>

              {/* Payment */}

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <ShieldCheck size={21} className="text-primary" />

                <p className="mt-4 text-xs font-bold text-slate-900">
                  Secure Payment
                </p>

                <p className="mt-1 text-[11px] leading-5 text-slate-400">
                  100% secure checkout
                </p>
              </div>

              {/* Returns */}

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <RotateCcw size={21} className="text-primary" />

                <p className="mt-4 text-xs font-bold text-slate-900">
                  Easy Returns
                </p>

                <p className="mt-1 text-[11px] leading-5 text-slate-400">
                  30 day returns
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            PRODUCT INFORMATION
        ====================================================== */}

        <section className="mt-16 border-t border-slate-100 pt-12 lg:mt-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-primary">
              Details
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
              Product Information
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Everything you need to know about this product.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-200/40">
              <p className="text-xs font-medium text-slate-400">Brand</p>

              <p className="mt-2 text-lg font-bold capitalize text-slate-900">
                {product.brand || "Nova"}
              </p>
            </div>

            {/* Category */}

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-200/40">
              <p className="text-xs font-medium text-slate-400">Category</p>

              <p className="mt-2 text-lg font-bold capitalize text-slate-900">
                {product.category}
              </p>
            </div>

            {/* Stock */}

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-200/40">
              <p className="text-xs font-medium text-slate-400">
                Available Stock
              </p>

              <p className="mt-2 text-lg font-bold text-slate-900">
                {product.stock} units
              </p>
            </div>

            {/* Discount */}

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-200/40">
              <p className="text-xs font-medium text-slate-400">Discount</p>

              <p className="mt-2 text-lg font-bold text-slate-900">
                {Math.round(discount)}%
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default ProductDetails;
