import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-70 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            {
              title: "Platform",
              links: ["Podcasting", "News Publishing", "Live Broadcasting", "Analytics"],
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
              links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "GDPR Compliance"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Insight24
          </div>

          <div className="flex space-x-6">
            {[
              { name: "Facebook", href: "#", iconPath: "M22.675 0h-21.35..." },
              { name: "Twitter", href: "#", iconPath: "M23.954 4.569c-.885..." },
              { name: "GitHub", href: "#", iconPath: "M12 0c-6.626..." },
              { name: "LinkedIn", href: "#", iconPath: "M12.017 0c-6.621..." },
            ].map((social, index) => (
              <a key={index} href={social.href} className="hover:text-white" aria-label={social.name}>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={social.iconPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Insight24. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
