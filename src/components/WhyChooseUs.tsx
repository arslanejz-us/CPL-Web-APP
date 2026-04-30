"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Leaf, Palette, Globe, Award, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Clock, title: "7-Day Turnaround", desc: "Rush production available. We meet your deadlines without compromising quality.", color: "bg-blue-50 text-blue-600" },
  { icon: Leaf, title: "Eco-Friendly Options", desc: "FSC-certified materials, soy-based inks, and compostable packaging solutions.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Palette, title: "Free Design Support", desc: "Our in-house design team creates print-ready artwork at no extra charge.", color: "bg-orange-50 text-orange-600" },
  { icon: Globe, title: "Global Shipping", desc: "We ship to 50+ countries with full customs documentation support.", color: "bg-purple-50 text-purple-600" },
  { icon: Award, title: "ISO 9001 Certified", desc: "Rigorous quality control ensures every order meets international standards.", color: "bg-brand-primary/10 text-brand-primary" },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "A dedicated account manager from quote to delivery — always reachable.", color: "bg-rose-50 text-rose-600" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-24"
          >
            <span className="text-brand-accent font-semibold text-sm uppercase tracking-widest">Why CPL</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold text-brand-navy leading-tight">
              Why 5,000+ Brands Choose Us
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              We&apos;re not just a manufacturer. We&apos;re your packaging partner — committed to making every box, bag, and mailer a brand statement.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="default">
                <Link href="/contact-us">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about-us">Our Story</Link>
              </Button>
            </div>
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { value: "5K+", label: "Brands Served" },
                { value: "98%", label: "Satisfaction Rate" },
                { value: "12+", label: "Years Experience" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-display font-bold text-brand-primary">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - feature grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -2 }}
                className="group bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-brand-navy mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
