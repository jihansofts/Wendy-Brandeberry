"use client";
import React from "react";
import InfoSection from "@/common/InfoSection";
import { motion } from "framer-motion";
export default function WhyChooseMe() {
  return (
    <section className="py-20 bg-white">
      <div
        id="why"
        className="container mx-auto px-4 p-16 rounded-2xl sm:px-6 lg:px-8">
        <h1 className="text-[#002629] text-[50px] font-bold font-inter text-center">
          Why Choose Me?
        </h1>
        <InfoSection
          title="Why me?"
          subtitle="Personalized, Compassionate Care"
          description="Unlike rushed appointments at busy clinics, she takes the time to truly listen, understand your unique challenges, and tailor treatments that fit you—not just your diagnosis."
          imageSrc="/images/personalized.png"
          imageAlt="service"
          imageLeft={false} // or true to flip image to left
        />
        <InfoSection
          title="Why me?"
          subtitle="Holistic & Evidence-Based Approach"
          description="She combines modern psychiatric treatments with a holistic understanding of mental, emotional, and physical well-being—ensuring care that heals from the inside out."
          imageSrc="/images/holistic.png"
          imageAlt="service"
          imageLeft={true} // or true to flip image to left
        />
        <InfoSection
          title="Why me?"
          subtitle="Expert in Medication Management & Therapy"
          description="As a certified PMHNP, she is licensed to both prescribe medications and provide therapy—giving you a one-stop solution for comprehensive mental health care."
          imageSrc="/images/expert .png"
          imageAlt="service"
          imageLeft={false} // or true to flip image to left
        />
        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#0BAB7D" }}
            whileTap={{ scale: 0.95 }}
            className=" bg-primary text-white px-8 py-3 rounded-md text-[16px] font-inter font-medium">
            Book Consultation
          </motion.button>
        </div>
      </div>
    </section>
  );
}
