"use client";

import { motion, cubicBezier } from "framer-motion";
import { MessageCircle, Box, CheckCircle2, Cog, Truck } from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  icon: typeof MessageCircle;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Discovery & Brief",
    description:
      "Tell us your product, brand goals, and timeline. Our specialists draft a tailored packaging recommendation in under 24 hours.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Free 3D Design",
    description:
      "Our in-house design team creates dielines, mockups, and photo-realistic 3D renders so you can see your packaging before production.",
    icon: Box,
  },
  {
    number: "03",
    title: "Sample & Approval",
    description:
      "Verify color, finish, and structure with a physical sample. Approve once, and we lock the spec for the full production run.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Production",
    description:
      "ISO-certified facilities, premium materials, and rigorous QC at every stage. Standard turnaround is 7-10 business days.",
    icon: Cog,
  },
  {
    number: "05",
    title: "Global Delivery",
    description:
      "Door-to-door shipping to 50+ countries with full tracking. Free expedited delivery within the USA on every order.",
    icon: Truck,
  },
];

export default function OurProcess() {
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

  return (
    <section className="py-16 lg:py-24 bg-brand-charcoal text-white" aria-labelledby="process-heading" suppressHydrationWarning>
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
              How It Works
            </span>
          </motion.span>

          <motion.h2
            id="process-heading"
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight"
          >
            From Concept to Delivered Packaging in 5 Steps
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            We&apos;ve streamlined every step so you can focus on your product - we&apos;ll handle the rest.
          </motion.p>
        </motion.div>

        {/* Timeline - Desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-white/20" />

            {/* Steps Grid */}
            <div className="grid grid-cols-5 gap-4">
              {STEPS.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.div key={step.number} variants={itemVariants}>
                    <div className="relative">
                      {/* Number Badge */}
                      <div className="flex justify-center mb-8">
                        <div className="w-12 h-12 rounded-full bg-brand-primary text-brand-charcoal font-bold text-lg flex items-center justify-center relative z-10">
                          {step.number}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                          <IconComponent className="w-8 h-8 text-brand-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                        <p className="text-sm text-white/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Timeline - Mobile/Tablet */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:hidden space-y-8"
        >
          {STEPS.map((step) => {
            const IconComponent = step.icon;
            return (
              <motion.div key={step.number} variants={itemVariants}>
                <div className="flex gap-6">
                  {/* Badge & Icon */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-brand-primary text-brand-charcoal font-bold flex items-center justify-center text-sm">
                      {step.number}
                    </div>
                    {step.number !== "05" && (
                      <div className="w-0.5 h-16 bg-white/20 my-3" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
