"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-brand-deep/80 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-wider text-white hover:opacity-90 transition">
              <Sparkles className="w-6 h-6 text-brand-ice" />
              <span>RAAKH</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 text-sm font-medium">
              <Link href="/" className="text-slate-300 hover:text-brand-ice transition">Home</Link>
              <Link href="/about" className="text-slate-300 hover:text-brand-ice transition">About</Link>
              <Link href="/archive" className="text-slate-300 hover:text-brand-ice transition">Archive</Link>
            </div>
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/archive"
              className="px-4 py-2 text-sm font-semibold text-slate-900 bg-brand-ice hover:bg-sky-400 rounded-lg shadow-md transition"
            >
              Explore Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-brand-card focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-brand-border bg-brand-deep/95 px-4 pt-2 pb-4 space-y-2">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-brand-card">Home</Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-brand-card">About</Link>
          <Link href="/archive" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-brand-card">Archive</Link>
          <Link href="/archive" className="block w-full text-center mt-2 px-4 py-2 text-sm font-semibold text-slate-900 bg-brand-ice rounded-lg">Explore Now</Link>
        </div>
      )}
    </nav>
  );
}
