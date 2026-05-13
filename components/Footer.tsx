import Link from "next/link";
import { Phone, MapPin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white/90">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center font-bold text-xl text-white">
                SS
              </div>
              <div>
                <div className="font-bold text-white">Shree Shyam Krishi</div>
                <div className="text-sm text-white/70">Samiti Ltd., Jasrapur</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Authorized FPO-linked retail initiative connecting authentic farm products directly to local families.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">Near Panchayat Bhawan, Jasrapur</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div className="text-sm text-white/70">
                  <div>95491 45596</div>
                  <div>70146 43207</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Visit Us</h4>
            <p className="text-sm text-white/70 mb-4">
              Open daily for your convenience. Call before visiting to confirm product availability.
            </p>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "WhatsApp"].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium text-white/70 hover:bg-accent hover:text-white transition-colors cursor-pointer"
                >
                  {social[0]}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} Shree Shyam Krishi Utpadan Prasanskaran evam Vipannan Sahakari Samiti Ltd., Jasrapur. All rights reserved.
            </p>
            <p className="text-xs text-white/40 text-center md:text-right">
              Prices and product availability may change. Please contact before visiting.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
