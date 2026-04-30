"use client";

import { motion } from "framer-motion";
import { MessageSquare, Paintbrush, FlaskConical, Factory, Truck } from "lucide-react";

const steps = [
  { step: "01", icon: MessageSquare, title: "Discovery Call", desc: "Tell us your vision, dimensions, quantity, and timeline. We'll ask the right questions." },
  { step: "02", icon: Paintbrush, title: "3D Design & Proof", desc: "Our designers create a digital mockup with your brand colors and artwork for approval." },
  { step: "03", icon: FlaskConical, title: "Physical Sample", desc: "We produce a physical sample for you to hold, feel, and approve before production begins." },
  { step: "04", icon: Factory, title: "Production", desc: "Full production run in our ISO-certified facility with real-time quality checkpoints." },
  { step: "05", icon: Truck, title: "Delivery", desc: "Fully packaged and shipped to your door worldwide, with live tracking every step of the way." },
];

export default function OurProcess() {
  return (
    <section className="py-24 bg-brand-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-accent font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
            From Concept to Delivered
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            A simple, transparent process designed to get your packaging right the first time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-light mb-5 mx-auto shadow-lg shadow-brand-primary/30">
                  <step.icon className="w-7 h-7 text-white" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-accent text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-white mb-2 text-lg">{step.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
