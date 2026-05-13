import { Metadata } from "next";
import { allProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Our Products | Shree Shyam Krishi Samiti - Jasrapur",
  description: "Browse our collection of authentic farmer-linked products including coriander powder, red chilli powder, turmeric powder, and corn daliya at transparent prices.",
  openGraph: {
    title: "Our Products | Shree Shyam Krishi Samiti",
    description: "Authentic FPO-linked agricultural products at transparent prices.",
  },
};

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-20 bg-off-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Product Catalog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 text-lg">
            Browse our current collection of authentic farmer-linked products. Visit our store or call us to purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProducts.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 text-center">
          <p className="text-gray-600 mb-4">
            <strong className="text-gray-900">Note:</strong> Online ordering is not available yet. Please visit our store or call us to purchase products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:9549145596"
              className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Call to Order: 95491 45596
            </a>
            <a
              href="https://maps.app.goo.gl/iXByCZsJrZkSjSP8A"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              Visit Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
