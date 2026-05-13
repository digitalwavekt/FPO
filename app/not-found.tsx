import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export const metadata = {
  title: "Page Not Found | Shree Shyam Krishi Samiti",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="flex items-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-full font-medium hover:bg-primary/5 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
