"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, ArrowLeft, Check, Package, Shield, Clock } from "lucide-react";
import Link from "next/link";
import { Product } from "@/data/products";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const isComingSoon = product.category === "Coming Soon";

  return (
    <div className="pt-24 pb-20 bg-off-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
          >
            <div className="aspect-square relative">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover ${isComingSoon ? "grayscale" : ""}`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <Package className="w-24 h-24 text-gray-300" />
                </div>
              )}
              {isComingSoon && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="px-6 py-3 bg-white rounded-full text-lg font-bold text-gray-900">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              {product.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {!isComingSoon && (
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-primary">&#8377;{product.price}</span>
                <span className="text-xl text-gray-500">/{product.unit}</span>
              </div>
            )}

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {!isComingSoon && (
              <>
                <div className="flex items-start gap-3 mb-4 bg-white p-4 rounded-xl border border-gray-100">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Source & Origin</div>
                    <div className="text-gray-600 text-sm">{product.origin}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4 bg-white p-4 rounded-xl border border-gray-100">
                  <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Quality Assurance</div>
                    <div className="text-gray-600 text-sm">{product.qualityNote}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4 bg-white p-4 rounded-xl border border-gray-100">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Availability</div>
                    <div className="text-gray-600 text-sm">{product.availability}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-8 bg-white p-4 rounded-xl border border-gray-100">
                  <Package className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Packaging</div>
                    <div className="text-gray-600 text-sm">{product.packaging}</div>
                  </div>
                </div>

                {product.benefits.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-bold text-gray-900 mb-4">Key Benefits</h3>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.usage.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-bold text-gray-900 mb-4">Usage Ideas</h3>
                    <ul className="space-y-2">
                      {product.usage.map((use, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent shrink-0" />
                          <span className="text-gray-600">{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <p className="text-gray-700 font-medium mb-4 text-center">
                {isComingSoon 
                  ? "This product will be available soon. Contact us for updates."
                  : "Online ordering is not available yet. Please contact us to purchase."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:9549145596"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="https://maps.app.goo.gl/iXByCZsJrZkSjSP8A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Visit Store
                </a>
                <a
                  href="https://wa.me/919549145596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
