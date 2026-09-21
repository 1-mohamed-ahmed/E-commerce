import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Heart,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  ShoppingBag,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

// ================= ANIMATION VARIANTS =================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const About = () => {
  return (
    <main className="overflow-hidden bg-white">
      {/* ===================== HERO ====================== */}

      <section className="relative isolate overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* Background decorations */}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 1.2,
            ease: "easeOut",
          }}
          className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div initial="hidden" animate="visible" variants={fadeLeft}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles size={16} />
              More than shopping
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-footer-color sm:text-5xl lg:text-6xl">
              We make shopping
              <span className="block text-primary">simple & enjoyable.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
              Nova Shop is built around one simple idea: shopping online should
              feel easy, fast, and enjoyable from the first click to the final
              delivery.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
              >
                Explore Products
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRight}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Main card */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-4xl border border-white bg-white p-5 shadow-2xl shadow-slate-200/70"
              >
                <div className="rounded-3xl bg-linear-to-br from-primary/10 via-white to-purple-100/50 p-8">
                  <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-primary text-5xl font-black text-white shadow-xl shadow-primary/20">
                    N
                  </div>

                  <div className="mt-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                      Nova Shop
                    </p>

                    <h2 className="mt-2 text-3xl font-black text-footer-color">
                      Shop.
                      <br />
                      Discover.
                      <br />
                      Enjoy.
                    </h2>
                  </div>

                  <div className="mt-8 flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Star
                        key={item}
                        size={17}
                        fill="currentColor"
                        className="text-amber-400"
                      />
                    ))}

                    <span className="ml-2 text-sm font-medium text-slate-500">
                      Happy shopping
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating card */}

              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-7 -left-5 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <Check size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Quality first
                  </p>

                  <p className="text-xs text-slate-400">Every detail matters</p>
                </div>
              </motion.div>

              {/* Floating shopping icon */}

              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-5 -top-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-xl shadow-primary/30"
              >
                <ShoppingBag size={28} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}

      <section className="border-y border-slate-100 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            {
              icon: Users,
              value: "10K+",
              label: "Happy Customers",
            },
            {
              icon: ShoppingBag,
              value: "25K+",
              label: "Orders Delivered",
            },
            {
              icon: Heart,
              value: "98%",
              label: "Customer Satisfaction",
            },
            {
              icon: Star,
              value: "4.9",
              label: "Average Rating",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                className="text-center"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={21} />
                </div>

                <h3 className="text-2xl font-black text-footer-color sm:text-3xl">
                  {stat.value}
                </h3>

                <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ================= OUR STORY ===================== */}

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* IMAGE / VISUAL */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeLeft}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-4xl bg-slate-100 p-4">
              <div className="flex min-h-105 items-center justify-center rounded-3xl bg-linear-to-br from-primary/10 via-white to-purple-100">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-40 w-40 items-center justify-center rounded-[2.5rem] bg-primary text-7xl font-black text-white shadow-2xl shadow-primary/30"
                >
                  N
                </motion.div>
              </div>

              <div className="absolute bottom-8 left-8 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Our philosophy
                </p>

                <p className="mt-1 text-sm font-bold text-footer-color">
                  Simple. Modern. Human.
                </p>
              </div>
            </div>
          </motion.div>

          {/* TEXT */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRight}
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight text-footer-color sm:text-4xl">
              Built to make online shopping
              <span className="text-primary"> feel better.</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-500">
              We believe great ecommerce is not only about selling products. It
              is about creating an experience that feels natural, trustworthy,
              and enjoyable.
            </p>

            <p className="mt-4 leading-8 text-slate-500">
              From discovering a product to adding it to your cart, every part
              of Nova Shop is designed with simplicity and convenience in mind.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Simple and intuitive shopping experience",
                "Carefully selected products",
                "Fast and reliable experience",
                "Designed with customers in mind",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check size={15} />
                  </div>

                  <span className="text-sm font-medium text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ====================== */}

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Why Nova
            </span>

            <h2 className="mt-3 text-3xl font-black text-footer-color sm:text-4xl">
              Everything you need for
              <span className="text-primary"> better shopping.</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              We focus on the little details that make the shopping experience
              feel effortless.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Truck,
                title: "Fast Delivery",
                text: "Get your orders delivered quickly and reliably.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Shopping",
                text: "Your shopping experience should always feel safe.",
              },
              {
                icon: Heart,
                title: "Customer First",
                text: "Every feature starts with the customer in mind.",
              },
              {
                icon: Sparkles,
                title: "Simple Experience",
                text: "Clean design and simple interactions make shopping easier.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-footer-color">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {feature.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CTA ======================= */}

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-footer-color px-6 py-16 text-center sm:px-12"
        >
          {/* Glow */}

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative">
            <Sparkles className="mx-auto text-primary" size={28} />

            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-black text-white sm:text-4xl">
              Ready to discover something
              <span className="text-primary"> new?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
              Explore our collection and find products that fit your style,
              needs, and everyday life.
            </p>

            <Link
              to="/shop"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
            >
              Start Shopping
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
