// ====== COMPONENTS ==========
import ProductCard from "../components/productCard";

// ====== IMAGES ===========
import beautyImage from "../assets/beautyImage.png";
import fragrancesImage from "../assets/fragrances.png";
import furnitureImage from "../assets/furniture.png";
import groceriesImage from "../assets/groceries.jpeg";

// =========== OUT LIBRARIES =============
import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AppContext } from "../context/appContext";

const categoryImages = [
  beautyImage,
  fragrancesImage,
  furnitureImage,
  groceriesImage,
];

const Home = () => {
  const { products, categories } = useContext(AppContext);
  return (
    <div className="bg-white min-h-screen px-3 sm:px-15">
      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden bg-linear-to-br from-slate-50 to-white py-20 flex items-center"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl" />
        </div>

        <motion.div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            initial={{ x: -300, opacity: 0.1 }}
            viewport={{ once: true }}
            className="md-justify-center md:flex md:flex-col items-center sm:items-start"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-primary text-sm font-medium rounded-full border border-teal-100 mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              New Season Arrivals
            </span>
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold text-footer-color  leading-[1.05] mb-6">
              Discover
              <br />
              <span className="text-primary">products</span>
              <br />
              you'll love
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-md">
              Carefully curated collections from the world's best brands. Free
              shipping on orders over $75.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                // onClick={() => navigate("shop")}
                className="px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-hover transition-colors shadow-lg shadow-teal-200 text-base"
              >
                Shop Now
              </button>
              <button
                // onClick={() => navigate("shop")}
                className="px-8 py-4 bg-white text-footer-color  font-semibold rounded-2xl hover:bg-slate-50 border border-slate-200 transition-colors text-base"
              >
                Explore Categories
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-slate-100">
              {[
                { value: "50K+", label: "Happy Customers" },
                { value: "2K+", label: "Products" },
                { value: "4.9★", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-footer-color ">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 300 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-teal-100 to-blue-100 rounded-3xl transform rotate-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/5">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&h=875&fit=crop&auto=format"
                  alt="Featured product"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating cards */}
              <div className="absolute -left-6 top-1/4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-footer-color ">
                    Order Placed!
                  </div>
                  <div className="text-xs text-slate-400">
                    Est. delivery in 2 days
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-1/4 bg-white rounded-2xl shadow-xl p-4">
                <div className="text-xs font-bold text-footer-color  mb-1">
                  Trending Now
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 text-amber-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  4.9 · 12K reviews
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="w-full mx-auto pb-10 sm:pb-15 bg-white ">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
              Browse By
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-footer-color ">
              Popular Categories
            </h2>
          </div>

          <Link
            to={"/shop"}
            className="hidden sm:flex items-center gap-2 text-primary font-medium
          hover:gap-3 transition-all text-sm"
          >
            View All
            <MoveRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, index) => {
            if (index >= 4) {
              return;
            } else {
              return (
                <button
                  key={cat.name}
                  className="group relative overflow-hidden rounded-2xl aspect-4/3 bg-slate-100 hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={categoryImages[index]}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-footer-color /70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                    <div className="text-white font-bold text-base sm:text-lg">
                      {cat.name}
                    </div>
                    {/* <div className="text-slate-300 text-xs sm:text-sm mt-0.5">
                      {cat.count} items
                    </div> */}
                  </div>
                </button>
              );
            }
          })}
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full bg-white mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
              Hand-picked
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-footer-color ">
              Featured Products
            </h2>
          </div>
          <Link to={"/shop"}>
            <button className="hidden sm:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all text-sm">
              View All
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, index) => {
            //to show 8 products
            if (index < 8) {
              return <ProductCard key={p.id} product={p} />;
            }
          })}
        </div>
      </section>

      {/* Promo Banner */}
      <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-footer-color  to-[#1e293b] text-white">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10">
            <div className="absolute inset-0 bg-linear-to-l from-primary" />
          </div>
          <div className="relative p-10 sm:p-16 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-left">
              <span className="inline-block px-3 py-1 bg-primary/20 text-[#2dd4bf] text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Limited Time
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Summer Sale — Up to 40% Off
              </h2>
              <p className="text-slate-300 text-base max-w-md">
                Shop our biggest sale of the season. Thousands of products at
                incredible prices. Ends Sunday.
              </p>
            </div>
            <button
              //   onClick={() => navigate("shop")}
              className="shrink-0 px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-hover transition-colors text-base"
            >
              Shop the Sale
            </button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="w-full mx-auto py-10 bg-white">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
              Just In
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-footer-color ">
              New Arrivals
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products
            .filter((p) => p.id > 8 && p.id <= 14)
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="border-t border-slate-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🚚",
                title: "Free Shipping",
                desc: "On orders over $75",
              },
              {
                icon: "↩️",
                title: "Easy Returns",
                desc: "30-day return policy",
              },
              {
                icon: "🔒",
                title: "Secure Payment",
                desc: "256-bit SSL encryption",
              },
              {
                icon: "🎧",
                title: "24/7 Support",
                desc: "Real humans, always",
              },
            ].map((feat) => (
              <div
                key={feat.title}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-xl">
                  {feat.icon}
                </div>
                <div>
                  <div className="font-semibold text-footer-color text-sm mb-0.5">
                    {feat.title}
                  </div>
                  <div className="text-xs text-slate-400">{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-3">
            Stay in the loop
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-footer-color mb-4">
            Get exclusive deals first
          </h2>
          <p className="text-slate-500 mb-8">
            Subscribe and be the first to know about new collections, sales, and
            special offers.
          </p>

          <p className="text-xs text-slate-400 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
