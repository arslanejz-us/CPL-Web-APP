"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-accent via-[#ff7a45] to-brand-accent-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px"}} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
            Ready to Elevate Your Packaging?
          </h2>
          <p className="mt-5 text-xl text-white/80 max-w-2xl mx-auto">
            Get a free quote in 60 seconds. No commitment, no pressure — just great packaging solutions tailored to your brand.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="xl" className="bg-white text-brand-accent hover:bg-white/90 shadow-xl">
              <Link href="/contact-us">
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="xl" className="bg-white/10 text-white border border-white/30 hover:bg-white/20 shadow-none">
              <a href="tel:+18001234567">
                <Phone className="w-5 h-5" /> Call Us Now
              </a>
            </Button>
          </div>
          <p className="mt-6 text-white/60 text-sm">
            Join 5,000+ brands already packaging with CPL
          </p>
        </motion.div>
      </div>
    </section>
  );
}
