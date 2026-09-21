import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import { useState } from "react";

// ====================== ANIMATION VARIANTS ==========

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
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
    x: -45,
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
    x: 45,
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

const Contact = () => {
  // ======================= FORM STATE ===============================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // ====================  HANDLE INPUT =====================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ====================== HANDLE SUBMIT ==============================

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* ===================== HERO ====================== */}

      <section className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {/* Background glow */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 1.2,
          }}
          className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <MessageCircle size={16} />
            We'd love to hear from you
          </div>

          <h1 className="text-4xl font-black tracking-tight text-footer-color sm:text-5xl lg:text-6xl">
            Let's start a<span className="text-primary"> conversation.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
            Have a question, need help with an order, or simply want to say
            hello? Send us a message and we'll get back to you.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT SECTION =============== */}

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* ================= LEFT INFO ===================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeLeft}
            className="flex flex-col"
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Contact Us
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight text-footer-color sm:text-4xl">
              We're here to
              <span className="text-primary"> help.</span>
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-500">
              Whether you have a question about a product, your order, or
              anything else, our team is ready to help.
            </p>

            {/* Contact Cards */}

            <div className="mt-10 space-y-4">
              {/* Email */}

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-semibold text-footer-color">
                    support@novashop.com
                  </p>
                </div>
              </motion.div>

              {/* Phone */}

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Phone size={21} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-semibold text-footer-color">
                    +20 100 000 0000
                  </p>
                </div>
              </motion.div>

              {/* Location */}

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold text-footer-color">
                    Cairo, Egypt
                  </p>
                </div>
              </motion.div>

              {/* Working Hours */}

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Clock3 size={21} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Working Hours
                  </p>

                  <p className="mt-1 text-sm font-semibold text-footer-color">
                    Sat - Thu · 9:00 AM - 8:00 PM
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Small note */}

            <div className="mt-7 flex items-start gap-3 rounded-2xl bg-slate-50 p-5">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-primary"
              />

              <p className="text-sm leading-6 text-slate-500">
                We usually respond to messages within one business day.
              </p>
            </div>
          </motion.div>

          {/* ================= RIGHT FORM ==================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeRight}
          >
            <div className="rounded-4xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/40 sm:p-8 lg:p-10">
              {/* Form Header */}

              <div className="mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                  <Send size={21} />
                </div>

                <h3 className="mt-5 text-2xl font-black text-footer-color">
                  Send us a message
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill out the form below and we'll get back to you soon.
                </p>
              </div>

              {/* Success Message */}

              {submitted && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mb-6 flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                >
                  <CheckCircle2 size={19} />
                  Your message has been sent successfully.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                </div>

                {/* Subject */}

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What can we help you with?"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={6}
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                {/* Submit */}

                <motion.button
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
                >
                  Send Message
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== FAQ ======================= */}

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <Sparkles size={26} className="mx-auto text-primary" />

          <h2 className="mt-4 text-3xl font-black text-footer-color sm:text-4xl">
            Need quick answers?
          </h2>

          <p className="mt-4 text-slate-500">
            Here are a few things our customers often ask about.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {[
            {
              question: "How can I track my order?",
              answer:
                "Once your order is shipped, you'll receive the tracking information through your email.",
            },
            {
              question: "Can I return a product?",
              answer:
                "Yes. Products can be returned according to our return and refund policy.",
            },
            {
              question: "How long does delivery take?",
              answer:
                "Delivery time depends on your location and the selected shipping method.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.question}
              initial={{
                opacity: 0,
                y: 20,
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
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <h3 className="font-bold text-footer-color">{item.question}</h3>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Contact;
