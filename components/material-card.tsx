'use client';

import React from 'react';
import { 
  FileText, 
  File, 
  FileCheck, 
  ChevronDown, 
  User, 
  Users 
} from 'lucide-react';

interface MaterialCardProps {
  title: string;
  subtitle: string;
  youtubeId?: string;
  btnText: string;
  materiLink?: string;
  contohKaryaLink?: string;  // <-- Menerima properti link contoh/karya
  lkpdLink?: string;
  isDropdown?: boolean;      
  lkpdIndividu?: string;    
  lkpdKelompok?: string;    
}

export function MaterialCard({ 
  title, 
  subtitle,
  youtubeId = 'dQw4w9WgXcQ',
  btnText,
  materiLink = '#',
  contohKaryaLink = '#', // <-- Default jika tidak ada link
  lkpdLink = '#',
  isDropdown = false,
  lkpdIndividu = '#',
  lkpdKelompok = '#'
}: MaterialCardProps) {
  return (
    <div className="group relative p-6 sm:p-8 flex flex-col gap-6 h-full rounded-2xl border-2 border-amber-400/60 bg-white/5 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-amber-400 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]">
      
      {/* Header Bagian Judul */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-amber-300 mb-2">
          {title}
        </h2>
        <p className="text-sm text-slate-400 font-medium">
          {subtitle}
        </p>
      </div>

      {/* Frame Video YouTube */}
      <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md border border-white/10 relative">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}?modestbranding=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>

      {/* Bagian Tombol Unduhan */}
      <div className="flex flex-col gap-3 mt-auto">
        
        {/* Tombol Materi (HTML) */}
        <a 
          href={materiLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full flex items-center gap-4 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/15 transition-all duration-200 border border-white/20 hover:border-amber-400/50 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-amber-400/20 flex items-center justify-center flex-shrink-0">
            <File className="w-5 h-5 text-amber-300" strokeWidth={2.5} />
          </div>
          <div className="flex-1 text-left">
            <div className="font-semibold text-sm text-slate-200">Materi</div>
            <div className="text-xs text-slate-400">File HTML</div>
          </div>
        </a>

        {/* Tombol Tengah (Contoh Teks / Hasil Karya) DIUBAH JADI LINK */}
        <a 
          href={contohKaryaLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full flex items-center gap-4 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/15 transition-all duration-200 border border-white/20 hover:border-indigo-400/50 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-indigo-400/20 flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-indigo-300" strokeWidth={2.5} />
          </div>
          <div className="flex-1 text-left">
            <div className="font-semibold text-sm text-slate-200">{btnText}</div>
            <div className="text-xs text-slate-400">File HTML</div>
          </div>
        </a>

        {/* Tombol LKPD dengan Logika Dropdown atau Tombol Tunggal */}
        {isDropdown ? (
          <div className="relative group/dropdown z-20">
            {/* Tombol Pemicu Dropdown */}
            <div className="w-full flex items-center gap-4 px-4 py-3 rounded-lg bg-white/10 border border-amber-400/40 transition-all cursor-default group-hover/dropdown:bg-white/15">
              <div className="w-10 h-10 rounded-lg bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-5 h-5 text-amber-300" strokeWidth={2.5} />
              </div>
              <div className="flex-1 text-left">
                <div className="font-semibold text-sm text-slate-200">Unduh LKPD</div>
                <div className="text-xs text-amber-400/70 italic font-medium">Pilih kategori...</div>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-500 group-hover/dropdown:rotate-180 transition-transform duration-300" />
            </div>

            {/* Menu Dropdown yang muncul saat hover */}
            <div className="absolute bottom-full left-0 w-full mb-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform translate-y-2 group-hover/dropdown:translate-y-0">
              <div className="bg-slate-900 border border-amber-400/50 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <a 
                  href={lkpdIndividu} 
                  download 
                  className="flex items-center gap-3 px-4 py-4 hover:bg-amber-400 hover:text-slate-900 text-slate-200 transition-colors border-b border-white/5"
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm font-bold">LKPD Individu (PDF)</span>
                </a>
                <a 
                  href={lkpdKelompok} 
                  download 
                  className="flex items-center gap-3 px-4 py-4 hover:bg-amber-400 hover:text-slate-900 text-slate-200 transition-colors"
                >
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-bold">LKPD Kelompok (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Tombol LKPD Standar (Tampilan jika bukan dropdown) */
          <a 
            href={lkpdLink} 
            download 
            className="w-full flex items-center gap-4 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/15 transition-all duration-200 border border-white/20 hover:border-amber-400/50 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-400/20 flex items-center justify-center flex-shrink-0">
              <FileCheck className="w-5 h-5 text-amber-300" strokeWidth={2.5} />
            </div>
            <div className="flex-1 text-left">
              <div className="font-semibold text-sm text-slate-200">Lembar Kerja (LKPD)</div>
              <div className="text-xs text-slate-400">File PDF</div>
            </div>
          </a>
        )}

      </div>
    </div>
  );
}