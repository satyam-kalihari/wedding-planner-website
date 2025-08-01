import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-br from-indigo-950 to-purple-950 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-pink-300">
              PerfectEvent &<br /> Weddings
            </h3>
            <p className="text-gray-300 text-sm">
              Crafting unforgettable moments and making your wedding dreams a
              beautiful reality. Your perfect day, meticulously planned.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-pink-300">
              Important Links
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="#hero"
                  className="hover:text-pink-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-pink-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-pink-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="hover:text-pink-300 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-pink-300 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-pink-300 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-pink-300">
              Get in Touch
            </h4>
            <address className="not-italic space-y-2 text-gray-300">
              <p>
                <i className="fas fa-map-marker-alt mr-2"></i>52, Naik nagar,
                Gurukrupa housing society, Manewada ring road, Nagpur - 440027
              </p>
              <p>
                <i className="fas fa-phone mr-2"></i>{" "}
                <a
                  href="tel:+919876543210"
                  className="hover:text-pink-300 transition-colors"
                >
                  +91 9665510693, +91 7720076200
                </a>
              </p>
              <p>
                <i className="fas fa-envelope mr-2"></i>{" "}
                <a
                  href="mailto:info@dreamweavers.com"
                  className="hover:text-pink-300 transition-colors"
                >
                  theperfectplanner14@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* <div>
            <h4 className="text-xl font-semibold mb-4 text-pink-300">
              Stay Connected
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Join our newsletter for exclusive wedding tips and inspiration!
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow p-3 rounded-l-md bg-white bg-opacity-10 border border-pink-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 transition-colors duration-300 text-white px-5 rounded-r-md"
              >
                Join
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com/youragency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-300 transition-colors text-2xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://pinterest.com/youragency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-300 transition-colors text-2xl"
              >
                <i className="fab fa-pinterest"></i>
              </a>
              <a
                href="https://facebook.com/youragency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-300 transition-colors text-2xl"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://youtube.com/youragency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-300 transition-colors text-2xl"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div> */}
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 DreamWeavers Weddings. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
