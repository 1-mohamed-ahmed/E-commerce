import { motion } from "motion/react";

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-white"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 0.45,
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="absolute h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />

      {/* ================= CONTENT ================= */}

      <div className="relative flex flex-col items-center">
        {/* ================= LOGO ================= */}

        <div className="flex items-center">
          {/* N */}

          <motion.div
            initial={{
              scale: 0.5,
              rotate: -10,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              rotate: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-3xl font-extrabold text-white shadow-xl shadow-primary/20"
          >
            N
          </motion.div>

          {/* BRAND */}

          <div className="ml-4 overflow-hidden">
            {/* Nova */}

            <motion.div
              initial={{
                x: -60,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.45,
                duration: 1,
                ease: "easeOut",
              }}
              className="text-4xl font-extrabold tracking-tight text-footer-color"
            >
              Nova
            </motion.div>

            {/* SHOP */}

            <motion.div
              initial={{
                x: 60,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
                duration: 1,
                ease: "easeOut",
              }}
              className="text-sm font-bold tracking-[0.35em] text-primary"
            >
              SHOP
            </motion.div>
          </div>
        </div>

        {/* ================= My NAME ================= */}

        <motion.div
          initial={{
            y: 25,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 1.05,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-7 flex flex-col items-center"
        >
          {/* LABEL */}

          <p className="text-[10px] font-medium tracking-[0.35em] text-slate-400">
            DESIGNED & DEVELOPED BY
          </p>

          {/* NAME */}

          <motion.p
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 1.2,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-2 text-xl font-extrabold tracking-[0.18em] text-footer-color"
          >
            MOHAMED AHMED
          </motion.p>
        </motion.div>

        {/* ================= TAGLINE ================= */}

        <motion.p
          initial={{
            y: 15,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 1.45,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mt-4 text-xs font-medium tracking-[0.3em] text-primary"
        >
          SHOP • DISCOVER • ENJOY
        </motion.p>

        {/* ================= LOADING BAR ================= */}

        <div className="mt-8 h-0.75 w-40 overflow-hidden rounded-full bg-slate-100">
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "0%",
            }}
            transition={{
              delay: 1.35,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="h-full w-full rounded-full bg-primary"
          />
        </div>

        {/* ================= LOADING TEXT ================= */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
          className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300"
        >
          Loading your experience
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
