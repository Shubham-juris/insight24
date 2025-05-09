import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {[
            {
              title: "Platform",
              links: [
                "Podcasting",
                "News Publishing",
                "Live Broadcasting",
                "Analytics",
              ],
            },
            {
              title: "Resources",
              links: ["Help Center", "Community", "Tutorials", "API Docs"],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Blog", "Contact"],
            },
            {
              title: "Legal",
              links: [
                "Terms of Service",
                "Privacy Policy",
                "Cookie Policy",
                "GDPR Compliance",
              ],
            },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-white tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-pink-400 transition duration-200 block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Logo and Social Icons */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Insight24 Logo"
              className="w-20 h-20 object-contain transform transition-all hover:scale-110"
            />
          </Link>

          <div className="flex space-x-5">
            <a
              href="https://www.instagram.com/insight_24_"
              className="text-pink-400 hover:text-pink-500 transition duration-300"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6" />
            </a>

            <a
              href="https://www.youtube.com/@insight24talks"
              className="text-red-400 hover:text-pink-500 transition duration-300"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Insight24</span>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
