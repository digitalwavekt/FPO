"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const leaders = [
  {
    name: "Naveen Chaneja",
    role: "Chief Executive Officer",
    image: "https://ui-avatars.com/api/?name=Naveen+Chaneja&background=0B5D3B&color=fff&size=400&bold=true",
    description: "Leading the organization with a vision to empower farmers and serve communities with integrity.",
  },
  {
    name: "Yogesh Kumar Saini",
    role: "Manager",
    image: "https://ui-avatars.com/api/?name=Yogesh+Kumar+Saini&background=7A4E2D&color=fff&size=400&bold=true",
    description: "Managing day-to-day operations and ensuring seamless connection between farmers and customers.",
  },
];

export default function LeadershipSection() {
  return (
    <SectionWrapper className="bg-off-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-semibold text-sm uppercase tracking-wider"
          >
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4"
          >
            Leadership & Management
          </motion.h2>
          <p className="text-gray-600 text-lg">
            Dedicated professionals committed to transforming the agricultural retail experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{leader.name}</h3>
                  <p className="text-white/80 font-medium">{leader.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{leader.description}</p>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
