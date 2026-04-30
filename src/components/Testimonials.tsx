"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Brand Director, Glow Cosmetics",
    text: "CPL transformed our unboxing experience. The quality of the rigid boxes is exceptional — our customers constantly mention the packaging in reviews.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Marcus Chen",
    role: "CEO, NutriCore Supplements",
    text: "7-day turnaround is no joke — they delivered on time every single time. The design team nailed our brand identity on the first proof.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Priya Patel",
    role: "Operations Manager, EcoWear",
    text: "The eco-friendly kraft boxes are perfect for our sustainability brand story. Our customers love that the packaging is 100% recyclable.",
    rating: 5,
    initials: "PP",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-accent font-semibold text-sm uppercase tracking-widest">Social Proof</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-brand-navy">
            Brands Love Us
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
            <span className="text-muted-foreground text-sm ml-2">4.9/5 from 1,200+ reviews</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-brand-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-foreground leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-light flex items-center justify-center text-white text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-brand-navy text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
