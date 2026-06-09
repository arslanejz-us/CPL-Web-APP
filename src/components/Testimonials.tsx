"use client";

import { motion, cubicBezier } from "framer-motion";
import { Star } from "lucide-react";

type Testimonial = {
  text: string;
  author: string;
  role: string;
  rating: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    text: "CPL transformed our packaging. The quality is outstanding and the customer service is unmatched. We've shipped over 200,000 units with zero defect issues.",
    author: "Sarah Mitchell",
    role: "Founder, Artisan Foods Co",
    rating: 5,
  },
  {
    text: "We switched from our previous supplier and saved 30% while improving print quality. The 3D mockup process means there are no surprises in production.",
    author: "James Chen",
    role: "Supply Chain Manager, TechBox Ltd",
    rating: 5,
  },
  {
    text: "The ability to customize at scale is incredible. Our brand now really stands out on shelves and customers consistently mention the unboxing experience.",
    author: "Emma Rodriguez",
    role: "Director of Marketing, EcoStyle Beauty",
    rating: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`Rated ${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < count
              ? "fill-brand-primary text-brand-primary"
              : "text-slate-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  const hoverVariants = {
    hover: {
      y: -4,
      boxShadow: "0 20px 40px -10px rgba(13, 47, 66, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-white text-slate-700" aria-labelledby="testimonials-heading" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.span variants={itemVariants} className="inline-block mb-3">
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">
              Trusted Worldwide
            </span>
          </motion.span>

          <motion.h2
            id="testimonials-heading"
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-charcoal mb-3 leading-tight"
          >
            What Our Clients Say
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Real feedback from brand owners, supply chain leads, and marketing
            teams shipping with CPL.
          </motion.p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <motion.div
                variants={hoverVariants}
                className="relative h-full bg-white rounded-xl p-6 border border-slate-100 hover:border-brand-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/10 overflow-hidden flex flex-col"
              >
                {/* Gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Stars */}
                <div className="mb-4">
                  <StarRow count={testimonial.rating} />
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 text-base leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-primary text-white font-bold flex items-center justify-center text-sm flex-shrink-0">
                      {testimonial.author
                        .split(" ")
                        .map((p) => p[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-bold text-brand-charcoal text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-xl p-8 lg:p-12 border border-slate-100 shadow-sm"
          aria-label="Customer satisfaction stats"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
            <motion.div variants={itemVariants}>
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-primary mb-2">
                4.9
              </div>
              <p className="text-slate-600 font-medium text-sm md:text-base">Average Rating</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-primary mb-2">
                1,200+
              </div>
              <p className="text-slate-600 font-medium text-sm md:text-base">Verified Reviews</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-primary mb-2">
                98%
              </div>
              <p className="text-slate-600 font-medium text-sm md:text-base">Repeat Order Rate</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
