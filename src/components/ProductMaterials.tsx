"use client";

import { motion, cubicBezier } from "framer-motion";
import { Layers, Sparkles } from "lucide-react";

type Material = {
  name?: string;
  label?: string;
};

interface ProductMaterialsProps {
  materials?: Material[] | null;
  finishes?: Material[] | null;
}

const DEFAULT_MATERIALS = [
  { label: "Kraft Paper" },
  { label: "Corrugated Cardboard" },
  { label: "Rigid Board" },
  { label: "Recycled Paper" },
];

const DEFAULT_FINISHES = [
  { label: "Matte Finish" },
  { label: "Gloss Finish" },
  { label: "Textured Finish" },
  { label: "Embossing" },
];

export default function ProductMaterials({ materials, finishes }: ProductMaterialsProps) {
  const displayMaterials = (materials && materials.length > 0)
    ? materials
    : DEFAULT_MATERIALS;

  const displayFinishes = (finishes && finishes.length > 0)
    ? finishes
    : DEFAULT_FINISHES;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  return (
    <section className="py-16 lg:py-20 bg-white" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3">
            Materials & Finishing Options
          </h2>
          <p className="text-slate-600 max-w-2xl">
            Choose from premium materials and finishing options to customize your packaging exactly the way you need it.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Materials Card */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal">Available Materials</h3>
            </div>

            <div className="space-y-3">
              {displayMaterials.map((material, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 hover:border-brand-primary/30 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0" />
                  <span className="text-slate-700 font-medium">
                    {material.label || "Premium Material"}
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-slate-500 mt-6 pt-6 border-t border-slate-200">
              All materials are eco-friendly certified and sustainably sourced.
            </p>
          </motion.div>

          {/* Finishes Card */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal">Finishing Options</h3>
            </div>

            <div className="space-y-3">
              {displayFinishes.map((finish, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 hover:border-brand-primary/30 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0" />
                  <span className="text-slate-700 font-medium">
                    {finish.label || "Premium Finish"}
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-slate-500 mt-6 pt-6 border-t border-slate-200">
              Custom finishes available. Contact our team for special requests.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

