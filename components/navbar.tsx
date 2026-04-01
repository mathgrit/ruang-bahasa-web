'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0 group">
          <span className="font-serif text-2xl font-bold tracking-wide">
            <span className="text-slate-300 group-hover:text-slate-100 transition-colors">
              Ruang Bahasa
            </span>
            <span className="text-amber-400 ml-1 inline-block group-hover:scale-110 transition-transform">
              .
            </span>
          </span>
        </Link>

        {/* Navigation Menu */}
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className="text-slate-300 hover:text-amber-300 transition-colors font-medium text-sm"
          >
            Beranda
          </Link>
          <Link 
            href="/profil" 
            className="text-slate-300 hover:text-amber-300 transition-colors font-medium text-sm"
          >
            Profil Saya
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
