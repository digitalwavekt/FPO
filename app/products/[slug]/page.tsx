import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allProducts } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = allProducts.find((p) => p.slug === params.slug);
  if (!product) return {};

  return {
    title: `${product.name} - &#8377;${product.price}/${product.unit} | Shree Shyam Krishi Samiti`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Shree Shyam Krishi Samiti`,
      description: product.shortDescription,
      images: product.image ? [product.image] : [],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = allProducts.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
