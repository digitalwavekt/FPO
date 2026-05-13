import { Metadata } from "next";
import { Target, Eye } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import ValuesGrid from "@/components/ValuesGrid";

export const metadata: Metadata = {
  title: "About Us | Shree Shyam Krishi Samiti - Jasrapur",
  description: "Learn about Shree Shyam Krishi Utpadan Prasanskaran evam Vipannan Sahakari Samiti Ltd., our mission to support farmers, and our commitment to authentic agricultural products.",
  openGraph: {
    title: "About Us | Shree Shyam Krishi Samiti",
    description: "Our mission, vision, and commitment to farmer empowerment and community service.",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-3 mb-6">
            About Shree Shyam Krishi Samiti
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            An authorized FPO-linked retail initiative dedicated to transforming how agricultural products reach local families.
          </p>
        </div>
      </div>

      <SectionWrapper className="bg-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To create a sustainable bridge between farmer producer organizations and local consumers, ensuring fair income for farmers and genuine, affordable agricultural products for every family. We are committed to eliminating unnecessary intermediaries while maintaining the highest standards of quality and transparency.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted local destination for farmer-authentic products in Jasrapur and surrounding regions. We envision a thriving ecosystem where farmers prosper, consumers eat healthier, and the local economy grows stronger through direct, ethical agricultural commerce.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Our Core Values
            </h2>
          </div>
          <ValuesGrid />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Shree Shyam Krishi Utpadan Prasanskaran evam Vipannan Sahakari Samiti Ltd. was established with a singular purpose: to transform the agricultural retail landscape in Jasrapur. In an era where supply chains have grown increasingly complex and opaque, we saw an opportunity to return to simplicity and authenticity.
              </p>
              <p>
                By partnering directly with Farmer Producer Organizations (FPOs), we have created a retail channel that respects both the producer and the consumer. Farmers receive better prices for their harvest, free from the exploitation of multiple intermediaries. Consumers receive products they can trust, knowing exactly where their food comes from.
              </p>
              <p>
                Our initiative is not merely a business, it is a commitment to the agricultural community that sustains us. Every product on our shelves represents the hard work of a farming family, processed and packaged with care to preserve its natural goodness.
              </p>
              <p>
                We believe that when you choose Shree Shyam Krishi Samiti, you are not just buying a product. You are supporting a farmer, strengthening the local economy, and investing in a more transparent, equitable food system for future generations.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
