"use client";

import { motion } from "framer-motion";
import { Heart, Target, Globe, Zap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const values = [
  {
    icon: Heart,
    title: "Authentic Food Access",
    description: "We believe every family deserves access to genuine, unadulterated agricultural products sourced responsibly.",
  },
  {
    icon: Target,
    title: "Fair Farmer Income",
    description: "By reducing unnecessary middlemen, we ensure farmers receive the true value of their hard work and harvest.",
  },
  {
    icon: Globe,
    title: "Reduced Supply Chain Compromise",
    description: "Shorter supply chains mean fresher products, lower environmental impact, and better quality control.",
  },
  {
    icon: Zap,
    title: "Stronger Local Ecosystems",
    description: "When you buy from us, you strengthen the entire local agricultural economy and support rural livelihoods.",
  },
];

export default function InitiativeSection() {
  return (
    <SectionWrapper className="bg-off-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80"
                alt="Agricultural products"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-xs">
              <div className="text-primary font-bold text-2xl mb-1">Direct</div>
              <div className="text-gray-600 text-sm">From farm to family with complete transparency</div>
            </div>
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-semibold text-sm uppercase tracking-wider"
            >
              Our Initiative
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6"
            >
              Why This Initiative Exists
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-600 text-lg leading-relaxed mb-10"
            >
              This initiative exists to bridge the gap between farmers and families. Inspired by the need for authentic food access, fair farmer income, reduced supply chain compromise, and stronger local agricultural ecosystems, we are building a sustainable future for our community.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
