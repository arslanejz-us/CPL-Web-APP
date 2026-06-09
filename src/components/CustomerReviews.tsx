"use client";

import { motion, cubicBezier } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

type Review = {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar?: string;
};

const REVIEWS: Review[] = [
  {
    id: "1",
    text: "CPL transformed our packaging. The quality is outstanding and the customer service is unmatched. We've shipped over 200,000 units with zero defect issues.",
    author: "Sarah Mitchell",
    role: "Founder",
    company: "Artisan Foods Co",
    rating: 5,
    avatar: "SM",
  },
  {
    id: "2",
    text: "We switched from our previous supplier and saved 30% while improving print quality. The 3D mockup process means there are no surprises in production.",
    author: "James Chen",
    role: "Supply Chain Manager",
    company: "TechBox Ltd",
    rating: 5,
    avatar: "JC",
  },
  {
    id: "3",
    text: "The ability to customize at scale is incredible. Our brand now really stands out on shelves and customers consistently mention the unboxing experience.",
    author: "Emma Rodriguez",
    role: "Director of Marketing",
    company: "EcoStyle Beauty",
    rating: 5,
    avatar: "ER",
  },
  {
    id: "4",
    text: "Professional team, premium materials, and exceptional delivery timelines. CPL is our go-to packaging partner for all our product lines.",
    author: "Michael Zhang",
    role: "CEO",
    company: "DigitalHub Inc",
    rating: 5,
    avatar: "MZ",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count
              ? "fill-brand-primary text-brand-primary"
              : "text-slate-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      boxShadow: "0 20px 50px -15px rgba(13, 47, 66, 0.25)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-white text-slate-700 relative overflow-hidden" suppressHydrationWarning>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block mb-3"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">
              Customer Trust
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-charcoal mb-3 leading-tight"
          >
            Loved by Industry Leaders
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Join thousands of brands that trust CPL for premium packaging solutions
          </motion.p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {REVIEWS.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              whileHover="hover"
              className="group h-full"
            >
              <motion.div
                variants={hoverVariants}
                className="relative h-full bg-white rounded-xl border border-slate-100 hover:border-brand-primary/30 p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/10 overflow-hidden"
              >
                {/* Gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Quote Icon */}
                <div className="mb-3 relative z-10">
                  <Quote className="w-6 h-6 text-brand-primary/25" />
                </div>

                {/* Star Rating */}
                <div className="mb-3 relative z-10">
                  <StarRating count={review.rating} />
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 flex-1 relative z-10">
                  &quot;{review.text}&quot;
                </p>

                {/* Author Info */}
                <div className="border-t border-slate-100 pt-4 relative z-10">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-primary text-white font-bold flex items-center justify-center text-xs flex-shrink-0">
                      {review.avatar || review.author.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-brand-charcoal text-sm">
                        {review.author}
                      </p>
                      <p className="text-xs text-slate-600">
                        {review.role}, {review.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-charcoal to-brand-primary/90 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">4.9★</div>
              <p className="text-white/90 font-medium text-sm md:text-base">Average Rating</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">2,500+</div>
              <p className="text-white/90 font-medium text-sm md:text-base">Happy Clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">98%</div>
              <p className="text-white/90 font-medium text-sm md:text-base">Repeat Order Rate</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
