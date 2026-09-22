import { Link } from "react-router-dom";
import { Home, SearchX } from "lucide-react";
import { motion } from "motion/react";

const NotFound = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-50 flex items-center justify-center px-4 py-16 overflow-hidden">
      <div className="w-full max-w-3xl text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <SearchX size={38} strokeWidth={1.8} />
          </div>
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[110px] sm:text-[150px] leading-none font-black tracking-tight text-slate-900"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 mt-5"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-slate-500 max-w-md mx-auto mt-3 leading-7"
        >
          Sorry, the page you're looking for doesn't exist or may have been
          moved to another location.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8"
        >
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition-all duration-300 hover:-translate-y-0.5"
          >
            <Home size={19} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
