"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[linear-gradient(135deg,#111827,#1f2937,#374151)] text-white px-6 py-4 sticky top-0 z-[1000] shadow-[0_6px_20px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl sm:text-[1.8rem] font-extrabold tracking-wide font-['Poppins','Segoe_UI',sans-serif] hover:text-yellow-400 transition-transform hover:scale-105"
        >
          Artistly
        </Link>
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <nav className="hidden sm:flex gap-8 items-center">
          {["artists", "onboard", "dashboard"].map((path) => (
            <Link
              key={path}
              href={`/${path}`}
              className="relative text-white font-medium text-base py-1 hover:text-yellow-400 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <nav className="sm:hidden mt-4 flex flex-col gap-4 px-2">
          {["artists", "onboard", "dashboard"].map((path) => (
            <Link
              key={path}
              href={`/${path}`}
              onClick={() => setMenuOpen(false)}
              className="text-white font-medium text-base border-b border-gray-600 pb-2 hover:text-yellow-400 transition"
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
