"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What conditions do you treat?",
    answer:
      "We treat a variety of mental health conditions including anxiety, depression, PTSD, and more.",
  },
  {
    question: "Do you offer virtual appointments?",
    answer:
      "Yes, we offer secure virtual appointments through our HIPAA-compliant platform.",
  },
  {
    question: "Can you prescribe medication?",
    answer:
      "Yes, our licensed providers can evaluate your condition and prescribe medication if necessary.",
  },
  {
    question: "Do you offer mobile services, or is everything in-studio?",
    answer: "At this time I only do telehealth appointments",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We work with many insurance providers. Please contact us to check your eligibility.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#C3FFEE] lg:py-12 md:py-10 py-10">
      <div
        id="faq"
        className="container mx-auto px-4 lg:p-16 md:p-10 p-5 rounded-2xl sm:px-6 lg:px-8">
        <h2 className="lg:text-[56px] md:text-[40px] text-[32px] font-inter font-semibold text-center text-[#002629] lg:mb-14 md:mb-10 mb-6">
          FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl py-2 shadow-sm transition-all">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left">
                <span className="text-[#002629] font-semibold font-inter text-[24px]">
                  {index + 1}. {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  <FaChevronDown className="text-primary" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: "auto", opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden px-6">
                    <motion.p className="text-[#002629] pb-4 text-[16px]">
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
