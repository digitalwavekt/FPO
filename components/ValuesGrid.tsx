"use client";

import { motion } from "framer-motion";
import { Heart, Target, Eye, Award, Users, Leaf } from "lucide-react";

const values = [
  { icon: Heart, title: "Integrity", description: "We operate with complete transparency in pricing, sourcing, and quality." },
  { icon: Target, title: "Farmer First", description: "Every decision prioritizes the welfare and fair compensation of our farmer partners." },
  { icon: Eye, title: "Quality Vision", description: "We envision a market where only genuine, unadulterated products reach consumers." },
  { icon: Award, title: "Excellence", description: "We strive for excellence in product selection, storage, and customer service." },
  { icon: Users, title: "Community", description: "We exist to serve and strengthen the local agricultural community." },
  { icon: Leaf, title: "Sustainability", description: "We promote sustainable farming practices and responsible consumption." },
];

export default function ValuesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {values.map((value, i) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-off-white rounded-2xl p-6 border border-gray-100"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
            <value.icon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
