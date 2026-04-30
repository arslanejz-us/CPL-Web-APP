"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Box, ShoppingBag, Package, Layers, Cylinder, Gift } from "lucide-react";

const categories = [
  { icon: Box, name: "Rigid Boxes", desc: "Premium magnetic closure & telescopic boxes", href: "/products", color: "from-blue-500/10 to-blue-600/5", iconColor: "text-blue-600" },
  { icon: ShoppingBag, name: "Shopping Bags", desc: "Custom printed paper & kraft bags", href: "/products", color: "from-emerald-500/10 to-emerald-600/5", iconColor: "text-emerald-600" },
  { icon: Package, name: "Mailer Boxes", desc: "E-commerce ready shipping boxes", href: "/products", color: "from-orange-500/10 to-orange-600/5", iconColor: "text-orange-600" },
  { icon: Layers, name: "Folding Cartons", desc: "Retail-ready paperboard packaging", href: "/products", color: "from-purple-500/10 to-purple-600/5", iconColor: "text-purple-600" },
  { icon: Cylinder, name: "Tubes & Cylinders", desc: "Cosmetic tubes and display cylinders", href: "/products", color: "from-pink-500/10 to-pink-600/5", iconColor: "text-pink-600" },
  { icon: Gift, name: "Gift Packaging", desc: "Luxury gift boxes and wrapping sets", href: "/products", color: "from-brand-primary/10 to-brand-primary/5", iconColor: "text-brand-primary" },
];

export default function PackagingCategories() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-accent font-semibold text-sm uppercase tracking-widest">Product Range</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-brand-navy leading-tight">
            Every Package, Perfectly Crafted
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From luxury rigid boxes to eco-friendly mailers — we manufacture packaging for every industry.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <Link
                href={cat.href}
                className={`group block bg-gradient-to-br ${cat.color} border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-black/5 transition-all duration-300`}
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <cat.icon className={`w-7 h-7 ${cat.iconColor}`} />
                </div>
                <h3 className="text-xl font-display font-bold text-brand-navy mb-2">{cat.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cat.desc}</p>
                <span className={`flex items-center gap-1 text-sm font-semibold ${cat.iconColor} group-hover:gap-2 transition-all`}>
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
