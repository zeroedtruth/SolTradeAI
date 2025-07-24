"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-10 lg:top-8">
      <div className="container">
        <div className="flex items-center justify-between gap-4 bg-[#3BE8B0]/30 backdrop-blur-md sm:px-6 lg:bg-[#3BE8B0]/10 border border-[#3BE8B0]/30 rounded-2xl py-2 shadow-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-[1_0_auto]">
            <Image src="/images/logo.webp" width={32} height={32} alt="Logo" />
            <strong className="text-base text-gray-800 font-semibold">Sol Splitter</strong>
          </Link>

          {/* Button */}
          <Link
            className="bg-secondary text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-lg shadow-sm hover:shadow-lg"
            href="https://app.solsplitter.com/"
          >
            Launch
          </Link>
        </div>
      </div>
    </header>
  );
}
