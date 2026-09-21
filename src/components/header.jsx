import {
  Heart,
  ShoppingCart,
  UserRound,
  ChevronDown,
  ChevronUp,
  Search,
  Menu,
  X,
  LogIn,
  UserPlus,
} from "lucide-react";

import { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { AppContext } from "../context/appContext";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Shop",
    path: "/shop",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const { categories, favourite, cart } = useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();

  // ================= PAGE =================

  const isShopPage = location.pathname === "/shop";

  // ================= STATE =================

  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  // ================= CLOSE MENUS =================

  const closeMenus = () => {
    setOpenCategory(false);
    setAccountOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= TOP BANNER ================= */}

      <div className="bg-primary px-4 py-2 text-center text-white">
        <p className="text-xs font-medium tracking-wide sm:text-sm">
          Free shipping on orders over $75 — use code{" "}
          <span className="font-bold">NOVA10</span> for 10% off
        </p>
      </div>

      {/* ================= HEADER ================= */}

      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between gap-4">
            {/* ================= LOGO ================= */}

            <Link to="/" onClick={closeMenus} className="shrink-0">
              <div className="flex items-center">
                <span className="mr-2 flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white shadow-sm">
                  N
                </span>

                <span className="text-xl font-extrabold tracking-tight text-footer-color sm:text-2xl">
                  Nova
                </span>

                <span className="ml-1 text-xl font-extrabold tracking-tight text-primary sm:text-2xl">
                  SHOP
                </span>
              </div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}

            <div className="hidden items-center gap-7 md:flex">
              {links.map((link) => {
                if (link.label === "Categories") {
                  return (
                    <div className="relative" key={link.label}>
                      <button
                        type="button"
                        onClick={() => setOpenCategory((prev) => !prev)}
                        className="flex items-center gap-1.5 text-sm font-medium text-slate-700 transition-colors hover:text-primary"
                      >
                        Categories
                        {openCategory ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>

                      {/* CATEGORY DROPDOWN */}

                      {openCategory && (
                        <div className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
                          <div className="mb-1 px-3 py-2">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                              Browse Categories
                            </p>
                          </div>

                          <div className="max-h-72 overflow-y-auto">
                            {categories.map((cat) => (
                              <Link
                                key={cat.slug}
                                to={`/category/${cat.slug}`}
                                onClick={closeMenus}
                                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-primary/10 hover:text-primary"
                              >
                                {cat.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={closeMenus}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-slate-700 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* ================= SEARCH ================= */}

            {!isShopPage && (
              <div className="hidden min-w-0 flex-1 lg:flex lg:max-w-xs">
                <div
                  onClick={() => navigate("/shop")}
                  className="flex w-full cursor-text items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 transition-all hover:border-primary/40 hover:bg-white focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/10"
                >
                  <Search size={18} className="shrink-0 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Search products..."
                    readOnly
                    className="w-full cursor-pointer bg-transparent text-sm text-footer-color outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            )}

            {/* ================= ACTIONS ================= */}

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              {/* MOBILE SEARCH */}

              <button
                type="button"
                onClick={() => navigate("/shop")}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-all hover:bg-primary/10 hover:text-primary lg:hidden"
              >
                <Search size={20} />
              </button>

              {/* ================= WISHLIST ================= */}

              <Link
                to="/wishlist"
                onClick={closeMenus}
                className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-all hover:bg-primary/10 hover:text-primary"
              >
                <Heart size={20} />

                {favourite?.length > 0 && (
                  <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                    {favourite.length}
                  </span>
                )}
              </Link>

              {/* ================= CART ================= */}

              <Link
                to="/cart"
                onClick={closeMenus}
                className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-all hover:bg-primary/10 hover:text-primary"
              >
                <ShoppingCart size={20} />

                {cart?.length > 0 && (
                  <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                    {cart.length}
                  </span>
                )}
              </Link>

              {/* ================= ACCOUNT ================= */}

              <div className="relative hidden sm:block">
                <button
                  type="button"
                  onClick={() => {
                    setAccountOpen((prev) => !prev);
                    setOpenCategory(false);
                  }}
                  className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-hover hover:shadow-md"
                >
                  <UserRound size={18} />

                  <span>Account</span>

                  {accountOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {/* ACCOUNT DROPDOWN */}

                {accountOpen && (
                  <div className="absolute right-0 top-full mt-3 w-60 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
                    {/* HEADER */}

                    <div className="border-b border-slate-100 px-3 py-3">
                      <p className="text-sm font-bold text-footer-color">
                        Welcome to Nova
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Sign in or create your account
                      </p>
                    </div>

                    {/* SIGN IN */}

                    <Link
                      to="/login"
                      onClick={closeMenus}
                      className="mt-2 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-primary/10 hover:text-primary"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <LogIn size={18} />
                      </span>

                      <div>
                        <p className="font-semibold">Sign In</p>

                        <p className="text-xs text-slate-400">
                          Login to your account
                        </p>
                      </div>
                    </Link>

                    {/* CREATE ACCOUNT */}

                    <Link
                      to="/register"
                      onClick={closeMenus}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-primary/10 hover:text-primary"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <UserPlus size={18} />
                      </span>

                      <div>
                        <p className="font-semibold">Create Account</p>

                        <p className="text-xs text-slate-400">
                          Create a new account
                        </p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* ================= MOBILE MENU ================= */}

              <button
                type="button"
                onClick={() => {
                  setMenuOpen((prev) => !prev);
                  setOpenCategory(false);
                  setAccountOpen(false);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition-all hover:bg-slate-100 sm:hidden"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* ================= MOBILE MENU ================= */}

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
              menuOpen
                ? "max-h-150 border-t border-slate-100 opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-1 px-1 py-4">
              {/* NAV LINKS */}

              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={closeMenus}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-all ${
                    location.pathname === link.path
                      ? "bg-primary text-white"
                      : "text-slate-700 hover:bg-primary hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* ================= MOBILE ACCOUNT ================= */}

              <div className="mt-3 border-t border-slate-100 pt-3">
                {/* WISHLIST */}

                <Link
                  to="/wishlist"
                  onClick={closeMenus}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  <Heart size={19} />
                  Wishlist
                  {favourite?.length > 0 && (
                    <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-white">
                      {favourite.length}
                    </span>
                  )}
                </Link>

                {/* CART */}

                <Link
                  to="/cart"
                  onClick={closeMenus}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  <ShoppingCart size={19} />
                  Cart
                  {cart?.length > 0 && (
                    <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-white">
                      {cart.length}
                    </span>
                  )}
                </Link>

                {/* SIGN IN */}

                <Link
                  to="/login"
                  onClick={closeMenus}
                  className="mt-2 flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <LogIn size={19} />
                  Sign In
                </Link>

                {/* CREATE ACCOUNT */}

                <Link
                  to="/register"
                  onClick={closeMenus}
                  className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <UserPlus size={19} />
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
