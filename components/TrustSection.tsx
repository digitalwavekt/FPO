"use client";

import { motion } from "framer-motion";
import { Shield, Users, TrendingUp, Heart, Store, Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const trustItems = [
  {
    icon: Shield,
    title: "FPO Linked Initiative",
    description: "An authorized retail initiative directly connected with Farmer Producer Organizations, ensuring genuine farmer-sourced products.",
  },
  {
    icon: Users,
    title: "Farmer Direct Ecosystem",
    description: "Our supply chain minimizes intermediaries, allowing farmers to receive fair compensation while you get fresher products.",
  },
  {
    icon: TrendingUp,
    title: "Transparent Pricing",
    description: "Clear, honest pricing with no hidden costs. What you see is what you pay, with complete visibility into product value.",
  },
  {
    icon: Heart,
    title: "Community Focused",
    description: "Built to strengthen the local agricultural economy and create sustainable livelihoods for farming families.",
  },
  {
    icon: Store,
    title: "Trusted Local Retail Outlet",
    description: "Your neighborhood authorized agricultural retail outlet committed to quality, consistency, and community service.",
  },
  {
    icon: Award,
    title: "Quality-Centric Products",
    description: "Every product undergoes careful selection and quality checks to ensure you receive only the best agricultural goods.",
  },
];

export default function TrustSection() {
  return (
    <SectionWrapper className="bg-off-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-semibold text-sm uppercase tracking-wider"
          >
            Why Trust Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4"
          >
            Built on Trust, Driven by Mission
          </motion.h2>
          <p className="text-gray-600 text-lg">
            We are committed to bridging the gap between farmers and families with transparency and integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
