import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-cafe py-12 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Coffee className="w-5 h-5" />
            <span className="font-display text-lg font-bold">Brew & Bite</span>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Where every sip meets comfort. Crafted with love, served with a smile.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
            <li><Link to="/menu" className="hover:opacity-100 transition-opacity">Menu</Link></li>
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3">Hours</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Mon – Fri: 7am – 9pm</li>
            <li>Saturday: 8am – 10pm</li>
            <li>Sunday: 8am – 8pm</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>123 Coffee Lane, Cafe District</li>
            <li>New York, NY 10001</li>
            <li>+1 (555) 123-4567</li>
            <li>hello@brewandbite.cafe</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-sm opacity-60">
        © 2026 Brew & Bite Cafe. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
