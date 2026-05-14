"use client";

import { motion } from "framer-motion";
import { Leaf, ShoppingBag, TrendingUp, HeartHandshake, BadgeCheck, Truck } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import AnimatedCounter from "./AnimatedCounter";

const farmerBenefits = [
  { icon: TrendingUp, text: "Better pricing through collective bargaining" },
  { icon: HeartHandshake, text: "Reduced exploitation by middlemen" },
  { icon: BadgeCheck, text: "Access to better markets and branding" },
  { icon: Leaf, text: "Value addition opportunities" },
];

const consumerBenefits = [
  { icon: ShoppingBag, text: "Authentic sourcing directly from farms" },
  { icon: BadgeCheck, text: "Fewer intermediaries, fresher products" },
  { icon: TrendingUp, text: "Transparent pricing and supply chain" },
  { icon: Truck, text: "Trusted local supply chain" },
];

export default function FPOSection() {
  return (
    <SectionWrapper className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-semibold text-sm uppercase tracking-wider"
            >
              Understanding FPO
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6"
            >
              What is a Farmer Producer Organization?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              Farmer Producer Organizations (FPOs) are collective farmer-led entities that help farmers improve bargaining power, reduce costs, access better markets, and connect directly with consumers. They represent a transformative approach to agricultural commerce in India.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-primary font-bold text-lg mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  For Farmers
                </h4>
                <ul className="space-y-3">
                  {farmerBenefits.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <item.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-secondary font-bold text-lg mb-4 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  For Consumers
                </h4>
                <ul className="space-y-3">
                  {consumerBenefits.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <item.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: 100, suffix: "%", label: "Farmer-Linked Sourcing", color: "bg-primary" },
              { value: 500, suffix: "+", label: "Farmer Families Supported", color: "bg-secondary" },
              { value: 4, suffix: "", label: "Premium Products Available", color: "bg-accent" },
              { text: "Jasrapur", label: "Trusted Local Outlet", color: "bg-primary" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                className={`${stat.color} rounded-2xl p-6 text-white`}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.text ? (
                    <span>{stat.text}</span>
                  ) : typeof stat.value === "number" ? (
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  ) : null}
                </div>
                <div className="text-sm text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
