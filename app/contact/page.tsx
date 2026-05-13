import { Metadata } from "next";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Shree Shyam Krishi Samiti - Jasrapur",
  description: "Visit or contact Shree Shyam Krishi Utpadan Prasanskaran evam Vipannan Sahakari Samiti Ltd. in Jasrapur. Call 95491 45596 or 70146 43207 for enquiries.",
  openGraph: {
    title: "Contact Us | Shree Shyam Krishi Samiti",
    description: "Visit our store in Jasrapur or call us for authentic farmer products.",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-off-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg">
            Visit our store, call us, or send a message. We are here to help you with authentic farmer products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Address</div>
                    <div className="text-gray-600">
                      Shree Shyam Krishi Utpadan Prasanskaran evam Vipannan Sahakari Samiti Ltd.
                      <br />
                      Near Panchayat Bhawan, Jasrapur
                    </div>
                    <ContactClient type="copy" text="Near Panchayat Bhawan, Jasrapur" />
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone Numbers</div>
                    <div className="space-y-2">
                      <a href="tel:9549145596" className="block text-primary hover:underline font-medium">
                        95491 45596
                      </a>
                      <a href="tel:7014643207" className="block text-primary hover:underline font-medium">
                        70146 43207
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Working Hours</div>
                    <div className="text-gray-600">
                      Open Daily: 8:00 AM - 8:00 PM
                      <br />
                      <span className="text-sm text-gray-500">Sunday: Open (Call to confirm)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="tel:9549145596"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/919549145596"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-fit">
            <div className="aspect-video relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d74.0!3d26.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDAwJzAwLjAiTiA3NMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">Find Us on Google Maps</h3>
                  <p className="text-sm text-gray-600 mt-1">Near Panchayat Bhawan, Jasrapur</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/iXByCZsJrZkSjSP8A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
                >
                  Open Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-center">
          <p className="text-yellow-800 text-sm">
            <strong>Disclaimer:</strong> Prices and product availability may change without prior notice. 
            Please contact us or visit the store to confirm current stock and pricing before making a trip.
          </p>
        </div>
      </div>
    </div>
  );
}
