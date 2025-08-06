"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // For Next.js
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route path

  const navItems = [
    { name: "Home", path: "/" },
    { name: "My Services", path: "/#service" },
    { name: "Why Choose Me?", path: "/#why" },
    { name: "FAQ", path: "/#faq" },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  // Check if item is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm w-full  py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Left side */}
          <div className="flex-shrink-0 flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-gray-800">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={60}
                height={60}
                className=""
              />
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <a
                  href={item.path}
                  className={`px-3 py-2 text-[16px] font-inter text-[#00262994] font-normal ${
                    isActive(item.path)
                      ? "text-primary font-bold text-[16px] font-inter"
                      : "hover:text-primary "
                  }`}>
                  {item.name}
                </a>
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-[-4] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.25 }}
                  />
                )}
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#0BAB7D" }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-primary text-white px-8 py-3 rounded-md text-[16px] font-inter font-medium">
              Book Consultation
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary focus:outline-none">
              <motion.svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 90 },
                  closed: { rotate: 0 },
                }}>
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <motion.div
                  key={`mobile-${item.name}`}
                  className="relative"
                  variants={mobileItemVariants}>
                  <a
                    href={item.path}
                    className={`block px-3 py-2 text-[16px] font-medium ${
                      isActive(item.path)
                        ? "text-primary font-semibold bg-blue-50"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    }`}>
                    {item.name}
                  </a>
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute bottom-[-4] left-3 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                    />
                  )}
                </motion.div>
              ))}
              <motion.button
                variants={mobileItemVariants}
                className="w-full mt-2 bg-primary text-white px-4 py-2 rounded-md text-base font-medium">
                Book Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
