import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  // ================= STATE =================

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ================= SUBMIT =================

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login data:", formData);

    // مؤقتًا
    // بعدين هنا هنربط Firebase Authentication أو الـ Backend

    navigate("/");
  };

  return (
    <main className="min-h-[calc(100vh-72px)] bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 lg:grid-cols-2">
        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative hidden overflow-hidden bg-primary p-10 lg:flex lg:min-h-145 lg:flex-col lg:justify-between"
        >
          {/* Background decorations */}

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute right-10 top-1/2 h-32 w-32 rounded-full border border-white/10" />

          {/* Logo */}

          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center">
              <span className="mr-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-extrabold text-primary shadow-lg">
                N
              </span>

              <div>
                <p className="text-2xl font-extrabold tracking-tight text-white">
                  Nova
                </p>

                <p className="text-xs font-bold tracking-[0.3em] text-white/70">
                  SHOP
                </p>
              </div>
            </Link>
          </div>

          {/* Content */}

          <div className="relative z-10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm">
              <ShoppingBag size={28} />
            </div>

            <h2 className="max-w-md text-4xl font-extrabold leading-tight text-white">
              Welcome back to your shopping experience.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Sign in to access your account, manage your orders, save your
              favourite products, and enjoy a personalized shopping experience.
            </p>
          </div>

          {/* Bottom */}

          <div className="relative z-10 flex items-center gap-3 text-sm text-white/70">
            <ShieldCheck size={18} />

            <span>Secure & simple shopping</span>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-center p-6 sm:p-10 lg:p-14"
        >
          <div className="w-full max-w-md">
            {/* Mobile Logo */}

            <div className="mb-8 flex justify-center lg:hidden">
              <Link to="/" className="flex items-center">
                <span className="mr-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                  N
                </span>

                <span className="text-2xl font-extrabold tracking-tight text-footer-color">
                  Nova
                </span>

                <span className="ml-1 text-2xl font-extrabold tracking-tight text-primary">
                  SHOP
                </span>
              </Link>
            </div>

            {/* Heading */}

            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold text-primary">
                Welcome back
              </p>

              <h1 className="text-3xl font-extrabold tracking-tight text-footer-color sm:text-4xl">
                Sign in to your account
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Enter your details below to continue shopping.
              </p>
            </div>

            {/* ================= FORM ================= */}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <div className="group relative">
                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-footer-color outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                  />
                </div>
              </div>

              {/* PASSWORD */}

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-semibold text-primary transition-colors hover:text-primary-hover"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="group relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-12 text-sm text-footer-color outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* REMEMBER */}

              <div className="flex items-center">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="h-4 w-4 cursor-pointer rounded border-slate-300 text-primary accent-primary focus:ring-primary"
                  />

                  <span className="text-sm text-slate-500">Remember me</span>
                </label>
              </div>

              {/* SUBMIT */}

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/25"
              >
                <span>Sign In</span>

                <ArrowRight size={18} />
              </motion.button>
            </form>

            {/* ================= DIVIDER ================= */}

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-100" />

              <span className="text-xs font-medium text-slate-400">OR</span>

              <div className="h-px flex-1 bg-slate-100" />
            </div>

            {/* ================= CREATE ACCOUNT ================= */}

            <div className="text-center">
              <p className="text-sm text-slate-500">Don't have an account?</p>

              <Link
                to="/register"
                className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-primary-hover"
              >
                Create a new account
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* BACK HOME */}

            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="text-xs font-medium text-slate-400 transition-colors hover:text-primary"
              >
                ← Back to Nova SHOP
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Login;
