"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const isComingSoon = product.category === "Coming Soon";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={!isComingSoon ? { y: -8 } : {}}
      className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 ${
        !isComingSoon ? "hover:shadow-2xl shadow-lg" : "shadow-md opacity-75"
      }`}
    >
      <div className="aspect-square overflow-hidden bg-gray-100 relative">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover ${!isComingSoon ? "group-hover:scale-110 transition-transform duration-700" : "grayscale"}`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <Clock className="w-16 h-16 text-gray-300" />
          </div>
        )}
        {isComingSoon && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="px-4 py-2 bg-white/90 rounded-full text-sm font-bold text-gray-900">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
          {product.category}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {!isComingSoon ? (
            <>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-primary">&#8377;{product.price}</span>
                <span className="text-sm text-gray-500 font-normal">/{product.unit}</span>
              </div>
              <Link
                href={`/products/${product.slug}`}
                className="flex items-center gap-1 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors"
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </>
          ) : (
            <span className="text-sm text-gray-500 font-medium">Stay tuned for updates</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
