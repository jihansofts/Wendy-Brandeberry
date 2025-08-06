import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
          <div className="flex flex-col gap-y-4">
            <span className="text-[24px] w-full font-inter font-semibold text-white">
              Psychiatric Mental Health Nurse Practitioner
            </span>
            <span className="text-[22px] font-inter font-semibold text-white">
              MSN, APRN, PMHNP-BC
            </span>
            <h1 className="text-[40px] font-inter font-semibold text-white ">
              Wendy Brandeberry
            </h1>
            <div>
              <p className="text-[16px] font-inter font-normal text-white mb-6">
                Hi, I’m Wendy Brandeberry, a board-certified psychiatric mental
                health nurse practitioner providing virtual medication
                management and mental health support to adults across Ohio.
              </p>
              <p className="text-[16px] font-inter font-normal text-white mb-6">
                With over 20 years of experience, I specialize in treating ADHD,
                depression, anxiety, and bipolar disorder. Many of my clients
                come to me feeling overwhelmed, hopeless, or stuck in racing
                thoughts—and I’m here to help them find calm, clarity, and a
                path forward.
              </p>
            </div>
            <div className="flex gap-4  md:flex-row flex-col">
              <button className="bg-white text-primary py-3 px-10 text-[16px] font-inter font-semibold rounded-md">
                Contact Me
              </button>
              <button className="border border-white  text-white py-3 px-10 text-[16px] font-inter font-semibold rounded-md">
                Book Now
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/images/hero.png"
              alt="Hero"
              width={500}
              height={500}
              className="w-full  object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
