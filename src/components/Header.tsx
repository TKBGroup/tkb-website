"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FullNav from "./FullNav";
import { socialLinks, SocialName } from "./lib/navLinks";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IconType } from "react-icons";

export default function Header() {
  const [isFullNavVisible, setFullNavVisible] = useState(false);

  const closeNav = () => {
    setFullNavVisible(false);
  }

  const icons: Record<SocialName, IconType> = {
    Facebook: FaFacebookF,
    Instagram: FaInstagram,
    LinkedIn: FaLinkedinIn,
  };
 
  return (
    <header
      onMouseEnter={() => setFullNavVisible(true)}
      onMouseLeave={() => setFullNavVisible(false)}
      className={`fixed top-0 left-0 w-full ${
        isFullNavVisible ? "bg-white" : "bg-white/80"
      } backdrop-blur-sm shadow-sm z-50 transition-all duration-300"
    `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            TKB Group
          </Link>
          <div className="flex justify-end space-x-4 pb-2">
            {socialLinks.map((link) => {
              const Icon = icons[link.name];
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5 text-gray-700 hover:text-blue-500 transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>{isFullNavVisible && <FullNav onRequestClose={closeNav} />}</AnimatePresence>
    </header>
  );
}
