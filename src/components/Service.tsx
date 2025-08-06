"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Service() {
  return (
    <section className="lg:py-20 md:py-16 py-10 bg-white">
      <div
        id="service"
        className="container mx-auto px-4 p-16 rounded-2xl sm:px-6 lg:px-8 bg-[#0BAB7D1F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:gap-10 md:gap-8 sm:gap-5 gap-5">
            <div>
              <Image
                src="/images/services.png"
                alt="service"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
            <div>
              <div className="max-w-2xl">
                <h1 className="lg:text-[48px] md:text-[40px] text-[32px] font-inter font-bold text-[#002629] mb-6">
                  My Services
                </h1>
                <p className="text-[16px] font-inter font-normal text-[#1E1E1ED9] mb-6">
                  My approach is collaborative, solution-focused, and rooted in
                  empathy. I believe in working as a team to understand your
                  needs and create a treatment plan that fits your life.
                </p>
                <p className="text-[16px] font-inter font-normal text-[#1E1E1ED9] mb-6">
                  Whether you&apos;re new to psychiatric care or returning after
                  time away, I aim to provide support that’s nonjudgmental,
                  clear, and actionable. I provide medication management and
                  therapy via Telehealth
                </p>
                <motion.a
                  target="_blank"
                  href="https://www.zocdoc.com/practice/a-quiet-mind-llc-141302?lock=true&isNewPatient=false&referrerType=widget"
                  whileHover={{ scale: 1.05, backgroundColor: "#0BAB7D" }}
                  whileTap={{ scale: 0.95 }}
                  className=" bg-primary text-white px-8 py-3 rounded-md text-[16px] font-inter font-medium">
                  Book Consultation
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
