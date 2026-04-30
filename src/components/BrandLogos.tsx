"use client";

import { motion } from "framer-motion";

const brands = ["Nike", "Unilever", "L'Oréal", "Amazon", "Nestlé", "Apple", "Samsung", "IKEA"];

export default function BrandLogos() {
  return (
    <section className="py-16 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10"
        >
          Trusted by leading brands worldwide
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-2xl font-display font-bold text-slate-200 hover:text-brand-primary transition-colors duration-300 cursor-default select-none"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
