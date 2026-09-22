import "./App.css";

// ============== COMPONENTS ================
import Header from "./components/header";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Footer from "./components/footer";
import Shop from "./pages/shop";
import SplashScreen from "./pages/splashScreen";
import Favourites from "./pages/favourites";
import About from "./pages/about";
import Contact from "./pages/contactUs";
import Login from "./pages/login";
import Register from "./pages/register";
import NotFound from "./pages/notFoundPage";
import ProductDetails from "./pages/productDetail";

// ============== LIBRARIES ================
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

function App() {
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const isNotFound = location.pathname === "8";

  // ================= SPLASH =================

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full">
      {/* ================= SPLASH ================= */}

      <AnimatePresence mode="wait">
        {loading && <SplashScreen />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex min-h-screen w-full flex-col"
        >
          {/* ================= HEADER ================= */}

          {!isAuthPage && <Header />}

          {/* ================= MAIN ================= */}

          <main className="w-full flex-1">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/shop" element={<Shop />} />

              <Route path="/cart" element={<Cart />} />

              <Route path="/wishlist" element={<Favourites />} />

              <Route path="/about" element={<About />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/productDetails/:id" element={<ProductDetails />} />

              {/* AUTH */}

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* NOT FOUND PAGE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* ================= FOOTER ================= */}

          {!isAuthPage || !isNotFound ? <Footer /> : <></>}
        </motion.div>
      )}
    </div>
  );
}

export default App;
