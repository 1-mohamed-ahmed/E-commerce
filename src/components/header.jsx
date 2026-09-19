import {
  Heart,
  ShoppingCart,
  UserRound,
  ChevronDown,
  ChevronUp,
  Search,
  Menu,
  X,
} from "lucide-react";

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/appContext";
const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Categories",
    path: "/Categories",
  },
  {
    label: "about",
    path: "/about",
  },
  {
    label: "Blog",
    path: "/Blog",
  },
  {
    label: "contact",
    path: "/contact",
  },
];

const Header = () => {
  const { categories } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-center sm:text-xl text-white py-2 w-full tracking-wide">
        <h1>Free shipping on orders over $75 - use code NOVA 10 for 10% off</h1>
      </div>

      {/* Header */}
      <nav className="sticky bg-white border-b border-slate-100 shadow-sm px-2 sm:px-15 py-4 top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          {/* Logo */}
          <Link
            onClick={() => {
              setOpenCategory(false);
            }}
            to={"/"}
          >
            <div className="flex ">
              <span className="bg-primary hidden md:flex sm:flex sm:w-8 sm:h-8 mr-2 rounded-[9px] sm:text-[18px] text-white justify-center items-center">
                N
              </span>

              <span className="font-bold text-[18px] sm:text-2xl">Nova</span>

              <span className="text-primary text-[18px] font-bold sm:text-2xl">
                SHOP
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 md:text-[18px] md:mx-4 ">
            {links.map((link) => {
              if (link.label === "Categories") {
                return (
                  <div className="relative" key={link.label}>
                    <button
                      onClick={() => {
                        setOpenCategory(!openCategory);
                      }}
                      className={`cursor-pointer flex items-center hover:text-primary  transition-colors duration-200`}
                    >
                      {link.label}{" "}
                      {openCategory ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>
                    {openCategory && (
                      <div className="absolute max-h-60 overflow-auto top-full left-0 mt-3 w-55 bg-white rounded-xl shadow-lg border border-slate-100 p-2">
                        {categories.map((cat) => {
                          return (
                            <Link
                              onClick={() => {
                                setOpenCategory(false);
                              }}
                              to={cat.slug}
                              key={cat.slug}
                              className="p-2 block hover:bg-primary-hover"
                            >
                              {cat.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <Link
                    onClick={() => {
                      setOpenCategory(false);
                    }}
                    className="cursor-pointer hover:text-primary  transition-colors duration-200"
                    key={link.label}
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                );
              }
            })}
          </div>
          {/* Search bar - desktop */}

          <div
            onClick={() => {
              setOpenCategory(false);
            }}
            className="hidden lg:flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 w-64 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all"
          >
            <svg
              className="w-4 h-4 text-slate-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              onClick={() => {
                setOpenCategory(false);
              }}
              type="text"
              placeholder="Search products..."
              className="bg-transparent text-sm text-[#0f172a] placeholder-slate-400 outline-none w-full ml-2"
            />
          </div>
          {/* Icosn */}

          <div className="flex items-center gap-1 w-60 justify-evenly">
            <button
              onClick={() => {
                setOpenCategory(false);
              }}
              className="hover:text-primary flex lg:hidden hover:scale-110 transition-all duration-300"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => {
                setOpenCategory(false);
              }}
              className="hover:text-primary   hover:scale-110 transition-all duration-300"
            >
              <Heart size={20} />
            </button>
            <button
              onClick={() => {
                setOpenCategory(false);
              }}
              className="hover:text-primary  hover:scale-110 transition-all duration-300"
            >
              <ShoppingCart size={20} />
            </button>
            <button
              onClick={() => {
                setOpenCategory(false);
              }}
              className="bg-primary hidden sm:flex px-3 py-2 gap-2 text-white items-center rounded-2xl hover:bg-primary-hover hover:scale-90 transition-all duration-300"
            >
              <UserRound size={20} strokeWidth={2.25} />
              <span>sign in</span>
            </button>

            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setOpenCategory(false);
              }}
              className=" sm:hidden px-3 py-2 gap-2 text-white text-[17px] items-center rounded-2xl hover:scale-110 transition-all duration-300 "
            >
              {menuOpen ? <X color={"black"} /> : <Menu color={"black"} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          onClick={() => {
            setOpenCategory(false);
          }}
          className={`md:hidden overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-in-out ${
            menuOpen
              ? "max-h-125 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block hover:bg-primary hover:text-white w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <button className="w-full mt-2 px-4 py-3 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-hover transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
