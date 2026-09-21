import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight, Plus, Minus, Trash2 } from "lucide-react";
import { useContext, useState } from "react";

import { AppContext } from "../context/appContext";

const Cart = () => {
  const { cart, dispatch } = useContext(AppContext);

  // ================= COUNTERS =================
  const [counters, setCounters] = useState({});

  // ================= SUBTOTAL =================
  const subtotal =
    cart?.reduce((total, product) => {
      const quantity = counters[product.id] || 1;

      return total + product.price * quantity;
    }, 0) || 0;

  return (
    <>
      {/* ================= EMPTY CART ================= */}

      {cart?.length === 0 ? (
        <section className="min-h-[70vh] bg-slate-50 flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-lg text-center">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                <ShoppingBag
                  size={32}
                  strokeWidth={1.8}
                  className="text-primary"
                />
              </div>
            </div>

            {/* Content */}
            <h1 className="mb-3 text-xl font-bold text-footer-color sm:text-3xl">
              Your Cart is Empty
            </h1>

            <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              Looks like you haven't added anything to your cart yet. Explore
              our products and find something you love.
            </p>

            {/* Button */}
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Continue Shopping
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      ) : (
        /* ================= CART ================= */

        <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8 lg:px-12">
          <div className="mx-auto">
            {/* ================= HEADER ================= */}

            <div className="mb-8">
              <p className="mb-1 text-sm font-medium text-primary">
                Shopping Cart
              </p>

              <h1 className="text-2xl font-bold text-footer-color sm:text-3xl">
                Your Cart
              </h1>

              <p className="my-2 text-sm text-slate-500">
                Review your products before checkout.
              </p>

              <p className="text-sm text-[#90A1C9]">
                {cart.length} {cart.length === 1 ? "Item" : "Items"}
              </p>
            </div>

            {/* ================= MAIN GRID ================= */}

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* ================= PRODUCTS ================= */}

              <div className="space-y-4 lg:col-span-2">
                {cart.map((product) => {
                  const quantity = counters[product.id] || 1;

                  return (
                    <div
                      key={product.id}
                      className="
                        flex
                        max-sm:flex-col
                        gap-5
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-4
                        shadow-sm
                        transition-all
                        duration-300
                        hover:shadow-md
                        sm:p-5
                        md:flex-row
                        md:items-center
                        md:justify-between
                      "
                    >
                      {/* ================= LEFT ================= */}

                      <div className="flex min-w-0 flex-1 gap-4 sm:gap-5">
                        {/* Product Image */}

                        <div
                          className="
                            flex
                            h-24
                            w-24
                            shrink-0
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-2xl
                            bg-slate-50
                            shadow-sm
                            sm:h-28
                            sm:w-28
                          "
                        >
                          <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="
                              h-full
                              w-full
                              object-contain
                              p-2
                              transition-transform
                              duration-300
                              hover:scale-105
                            "
                          />
                        </div>

                        {/* Product Details */}

                        <div className="flex min-w-0 flex-1 flex-col justify-between">
                          {/* Category */}

                          <div>
                            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-primary sm:text-sm">
                              {product.category}
                            </p>

                            <h2 className="line-clamp-2 text-sm font-semibold text-footer-color sm:text-base">
                              {product.title}
                            </h2>

                            {/* Price on Mobile */}

                            <p className="mt-2 text-base font-bold text-footer-color md:hidden">
                              ${(product.price * quantity).toFixed(2)}
                            </p>
                          </div>

                          {/* Quantity */}

                          <div className="mt-4 flex w-fit items-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                            {/* Minus */}

                            <button
                              onClick={() =>
                                setCounters((prev) => ({
                                  ...prev,
                                  [product.id]: Math.max(1, quantity - 1),
                                }))
                              }
                              className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                text-slate-500
                                transition-colors
                                hover:bg-white
                                hover:text-primary
                              "
                            >
                              <Minus size={16} />
                            </button>

                            {/* Counter */}

                            <span
                              className="
                                flex
                                h-9
                                min-w-10
                                items-center
                                justify-center
                                border-x
                                border-slate-200
                                bg-white
                                text-sm
                                font-semibold
                                text-footer-color
                              "
                            >
                              {quantity}
                            </span>

                            {/* Plus */}

                            <button
                              onClick={() =>
                                setCounters((prev) => ({
                                  ...prev,
                                  [product.id]: quantity + 1,
                                }))
                              }
                              className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                text-slate-500
                                transition-colors
                                hover:bg-white
                                hover:text-primary
                              "
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* ================= RIGHT ================= */}

                      <div
                        className="
                          flex
                          max-sm:flex-row-reverse
                          sm:flex-col
                          items-center
                          justify-between
                          gap-4
                          border-t
                          border-slate-100
                          pt-4
                          md:border-t-0
                          md:pt-0
                        "
                      >
                        {/* Delete */}

                        <button
                          onClick={() => {
                            dispatch({
                              type: "removeFromCart",
                              payload: product.id,
                            });
                          }}
                          className="
                            rounded-lg
                            p-2
                            text-slate-400
                            transition-all
                            duration-200
                            hover:bg-red-50
                            hover:text-red-500
                          "
                          title="Remove product"
                        >
                          <Trash2 size={18} />
                        </button>

                        {/* Price */}

                        <p className="text-base font-bold text-footer-color sm:text-lg">
                          ${(product.price * quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ================= ORDER SUMMARY ================= */}

              <aside
                className="
                  h-fit
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  sm:p-6
                  lg:sticky
                  lg:top-24
                "
              >
                <h2 className="mb-6 text-lg font-bold text-footer-color">
                  Order Summary
                </h2>

                {/* Subtotal */}

                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-slate-500">Subtotal</span>

                  <span className="font-semibold text-footer-color">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                {/* Shipping */}

                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-slate-500">Shipping</span>

                  <span className="font-semibold text-green-600">Free</span>
                </div>

                {/* Divider */}

                <div className="my-5 border-t border-slate-200" />

                {/* Total */}

                <div className="mb-6 flex items-center justify-between">
                  <span className="font-semibold text-footer-color">Total</span>

                  <span className="text-xl font-bold text-primary">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                {/* Checkout */}

                <button
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-primary
                    px-5
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-lg
                  "
                >
                  Proceed to Checkout
                  <ArrowRight size={18} />
                </button>

                {/* Continue Shopping */}

                <Link
                  to="/"
                  className="
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-footer-color
                    transition-colors
                    hover:border-primary
                    hover:text-primary
                  "
                >
                  Continue Shopping
                </Link>
              </aside>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
