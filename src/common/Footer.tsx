import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#002629]">
      <div className="container mx-auto px-4 p-10 rounded-2xl flex items-center justify-between sm:px-6 lg:px-8">
        <p className="text-white font-normal md:text-[16px] text-[12px] ">
          Copyright © <strong>Wendy Brandeberry</strong>. All Rights Reserved.
        </p>
        <p className="text-white font-normal md:text-[16px] text-[12px] ">
          Privacy & Cookies | Terms of services
        </p>
      </div>
    </footer>
  );
}
