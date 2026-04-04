'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { MaterialCard } from '@/components/material-card';

// --- KOMPONEN NAVBAR (DENGAN EFEK SCROLL) ---
const ScrollNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed w-full z-50 top-0 bg-slate-900/80 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 lg:px-8 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
        <div className="font-serif font-bold text-xl text-white tracking-widest">
          Ruang Bahasa<span className="text-amber-400">.</span>
        </div>
        <div className="flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-amber-400 transition-colors text-slate-300">
            Beranda
          </Link>
          <Link href="/profil" className="hover:text-amber-400 transition-colors text-slate-300">
            Profil Saya
          </Link>
        </div>
      </div>
    </nav>
  );
};

// --- DATA MATERI ---
const materials = [
  {
    title: 'Puisi',
    subtitle: 'Sub-capaian 1: Menganalisis & Membaca',
    youtubeId: 'GOPUs6KdFfM', 
    btnText: 'Contoh Teks',
    materiLink: '/materi-puisi1.html',
    contohKaryaLink: '/contoh-puisi.html', // <-- Link file HTML untuk Contoh Teks
    lkpdLink: '/lkpd-puisi.pdf',
    isDropdown: false,
  },
  {
    title: 'Puisi',
    subtitle: 'Sub-capaian 2: Mencipta',
    youtubeId: 'N0YSlUeMOtI', 
    btnText: 'Hasil Karya',
    materiLink: '/materi-puisi2.html',
    contohKaryaLink: '/karya-puisi.html', // <-- Link file HTML untuk Hasil Karya
    lkpdLink: '#',
    isDropdown: false,
  },
  {
    title: 'Hikayat & Cerpen',
    subtitle: 'Sub-capaian 1: Menganalisis',
    youtubeId: 'b5Kn9MVxRDQ', 
    btnText: 'Contoh Teks',
    materiLink: '/materi-hikayat1.html',
    contohKaryaLink: '/contoh-hikayat.html', // <-- Link file HTML untuk Contoh Teks
    isDropdown: true, 
    lkpdIndividu: '/lkpd-individu-hikayat.pdf',
    lkpdKelompok: '/lkpd-kelompok-hikayat.pdf',
  },
  {
    title: 'Hikayat & Cerpen',
    subtitle: 'Sub-capaian 2: Mencipta',
    youtubeId: 'dQw4w9WgXcQ', 
    btnText: 'Hasil Karya',
    materiLink: '#',
    contohKaryaLink: '/karya-hikayat.html', // <-- Link file HTML untuk Hasil Karya
    lkpdLink: '#',
    isDropdown: false,
  },
];

export default function Home() {
  return (
    <div className="dark-mesh-background min-h-screen">
      {/* Glow Orbs Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="mesh-glow-amber -top-32 -left-32"></div>
        <div className="mesh-glow-indigo -bottom-32 -right-32"></div>
        <div className="mesh-glow-indigo top-1/2 right-1/4 w-80 h-80 opacity-5"></div>
        <div className="absolute inset-0 dot-pattern"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        <ScrollNavbar />
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {materials.map((material, index) => (
              <MaterialCard
                key={index}
                {...material} 
              />
            ))}
          </div>
        </main>

        <footer className="border-t border-white/10 mt-16 sm:mt-20 lg:mt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-sm text-slate-400">
            <p className="font-medium">© 2026 Ruang Bahasa. Semua hak cipta dilindungi.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}