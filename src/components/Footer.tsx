import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* College Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#F59E0B] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold">Prestige College</span>
                <span className="text-xs block text-white/60">of Excellence</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Empowering minds since 1985. Prestige College is committed to providing world-class education, fostering innovation, and building future leaders.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2563EB] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-[#F59E0B]">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Departments", path: "/departments" },
                { name: "Library", path: "/library" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-[#2563EB] text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-[#F59E0B]">Departments</h3>
            <ul className="space-y-2.5">
              {["Computer Science", "Mechanical Engg.", "Civil Engineering", "Electrical Engg.", "Commerce", "Arts & Humanities"].map(
                (dept) => (
                  <li key={dept}>
                    <Link
                      to="/departments"
                      className="text-white/70 hover:text-[#2563EB] text-sm transition-colors"
                    >
                      → {dept}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-[#F59E0B]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 text-[#2563EB] shrink-0" />
                123 College Road, Academic City, State - 400001
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                info@prestigecollege.edu
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © 2026 Prestige College of Excellence. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}