'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  File, 
  FileCheck, 
  ChevronDown, 
  User, 
  Users,
  X,
  BookOpen,
  Target,
  Lightbulb,
  ScanLine
} from 'lucide-react';

// --- KOMPONEN HEADER ---
const Header = () => {
  return (
    <header className="pt-32 pb-8 px-4 text-center relative z-10">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 leading-tight mb-4">
        Materi Pembelajaran
      </h1>
      <p className="text-lg text-indigo-200/80 max-w-2xl mx-auto font-light">
        Eksplorasi berbagai teks bahasa dan sastra Indonesia dengan bahan ajar interaktif.
      </p>
    </header>
  );
};

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
          <a href="/" className="hover:text-amber-400 transition-colors text-slate-300">
            Beranda
          </a>
          <a href="/profil" className="hover:text-amber-400 transition-colors text-slate-300">
            Profil Saya
          </a>
        </div>
      </div>
    </nav>
  );
};

// --- KOMPONEN MATERIAL CARD ---
interface MaterialCardProps {
  title: string;
  subtitle: string;
  youtubeId?: string;
  btnText: string;
  materiLink?: string;
  contohKaryaLink?: string;  
  lkpdLink?: string;
  isDropdown?: boolean;      
  lkpdIndividu?: string;    
  lkpdKelompok?: string;
  lkpdPopupMessage?: string;
  tujuanPembelajaran?: string;
  pertanyaanPemantik?: string | string[];
  qrAsesmenAwal?: string;
  qrAsesmenSumatif?: string;
}

function MaterialCard({ 
  title, 
  subtitle,
  youtubeId = 'dQw4w9WgXcQ',
  btnText,
  materiLink = '#',
  contohKaryaLink = '#', 
  lkpdLink = '#',
  isDropdown = false,
  lkpdIndividu = '#',
  lkpdKelompok = '#',
  lkpdPopupMessage,
  tujuanPembelajaran,
  pertanyaanPemantik,
  qrAsesmenAwal,
  qrAsesmenSumatif
}: MaterialCardProps) {

  // State untuk mengontrol muncul/hilangnya pop-up LKPD
  const [showPopup, setShowPopup] = useState(false);
  // State untuk mengontrol jenis pop-up Informasi yang sedang terbuka (null = tertutup)
  const [activeInfoPopup, setActiveInfoPopup] = useState<'tujuan' | 'pemantik' | 'asesmen' | null>(null);

  const hasInfo = tujuanPembelajaran || pertanyaanPemantik || qrAsesmenAwal || qrAsesmenSumatif;

  return (
    <>
      <div className="group relative p-6 sm:p-8 flex flex-col gap-6 h-full rounded-2xl border-2 border-amber-400/60 bg-white/5 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-amber-400 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] z-10 hover:z-20">
        
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

        {/* Bagian Tombol Unduhan & Informasi */}
        <div className="flex flex-col gap-3 mt-auto">
          
          {/* --- TOMBOL DROPDOWN: INFORMASI PEMBELAJARAN --- */}
          {hasInfo && (
            <div className="relative group/info z-30">
              <div className="w-full flex items-center gap-4 px-4 py-3 rounded-lg bg-indigo-500/10 border border-indigo-500/30 transition-all cursor-default group-hover/info:bg-indigo-500/20 group-hover/info:border-indigo-400/60">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-indigo-300" strokeWidth={2.5} />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-sm text-indigo-200">Informasi Pembelajaran</div>
                  <div className="text-xs text-indigo-400/80 font-medium italic">Pilih info yang ingin dilihat...</div>
                </div>
                <ChevronDown className="w-4 h-4 text-indigo-400 group-hover/info:rotate-180 transition-transform duration-300" />
              </div>
              
              {/* Menu Dropdown Info */}
              <div className="absolute bottom-full left-0 w-full mb-2 opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all duration-300 transform translate-y-2 group-hover/info:translate-y-0">
                <div className="bg-slate-900 border border-indigo-400/50 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  {tujuanPembelajaran && (
                    <button onClick={() => setActiveInfoPopup('tujuan')} className="w-full flex items-center gap-3 px-4 py-4 hover:bg-indigo-500/20 text-slate-200 transition-colors border-b border-white/5 text-left">
                      <Target className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-bold group-hover/btn:text-emerald-300 transition-colors">Tujuan Pembelajaran</span>
                    </button>
                  )}
                  {pertanyaanPemantik && (
                    <button onClick={() => setActiveInfoPopup('pemantik')} className="w-full flex items-center gap-3 px-4 py-4 hover:bg-indigo-500/20 text-slate-200 transition-colors border-b border-white/5 text-left">
                      <Lightbulb className="w-4 h-4 text-amber-400" />
                      <span className="text-sm font-bold group-hover/btn:text-amber-300 transition-colors">Pertanyaan Pemantik</span>
                    </button>
                  )}
                  {(qrAsesmenAwal || qrAsesmenSumatif) && (
                    <button onClick={() => setActiveInfoPopup('asesmen')} className="w-full flex items-center gap-3 px-4 py-4 hover:bg-indigo-500/20 text-slate-200 transition-colors text-left">
                      <ScanLine className="w-4 h-4 text-rose-400" />
                      <span className="text-sm font-bold group-hover/btn:text-rose-300 transition-colors">Pemindai Asesmen</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

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

          {/* Tombol Tengah (Contoh Teks / Hasil Karya) */}
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

          {/* LOGIKA TOMBOL LKPD */}
          {isDropdown ? (
            <div className="relative group/dropdown z-20">
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
              <div className="absolute bottom-full left-0 w-full mb-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform translate-y-2 group-hover/dropdown:translate-y-0">
                <div className="bg-slate-900 border border-amber-400/50 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <a href={lkpdIndividu} download className="flex items-center gap-3 px-4 py-4 hover:bg-amber-400 hover:text-slate-900 text-slate-200 transition-colors border-b border-white/5">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-bold">LKPD Individu (PDF)</span>
                  </a>
                  <a href={lkpdKelompok} download className="flex items-center gap-3 px-4 py-4 hover:bg-amber-400 hover:text-slate-900 text-slate-200 transition-colors">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-bold">LKPD Kelompok (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          ) : lkpdPopupMessage ? (
            <button 
              onClick={() => setShowPopup(true)}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-lg bg-white/10 hover:bg-white/15 transition-all duration-200 border border-white/20 hover:border-amber-400/50 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-5 h-5 text-amber-300" strokeWidth={2.5} />
              </div>
              <div className="flex-1 text-left">
                <div className="font-semibold text-sm text-slate-200">Lembar Kerja (LKPD)</div>
                <div className="text-xs text-amber-400 font-medium">Klik untuk melihat tugas</div>
              </div>
            </button>
          ) : (
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

      {/* --- UI MODAL POP-UP INFO PEMBELAJARAN (TERPISAH) --- */}
      {activeInfoPopup !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={() => setActiveInfoPopup(null)}></div>
          
          <div className="relative bg-slate-900 border border-indigo-400/50 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl shadow-indigo-400/20 transform animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setActiveInfoPopup(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* KONTEN: TUJUAN PEMBELAJARAN */}
            {activeInfoPopup === 'tujuan' && tujuanPembelajaran && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-emerald-300">Tujuan Pembelajaran</h3>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/10 mb-8">
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    {tujuanPembelajaran}
                  </p>
                </div>
              </>
            )}

            {/* KONTEN: PERTANYAAN PEMANTIK */}
            {activeInfoPopup === 'pemantik' && pertanyaanPemantik && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-amber-300">Pertanyaan Pemantik</h3>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/10 mb-8">
                  {Array.isArray(pertanyaanPemantik) ? (
                    <ol className="list-decimal list-outside pl-4 text-sm text-slate-300 font-light leading-relaxed space-y-4">
                      {pertanyaanPemantik.map((tanya, idx) => (
                        <li key={idx} className="pl-1">{tanya}</li>
                      ))}
                    </ol>
                  ) : (
                    <p className="text-sm text-slate-300 font-light leading-relaxed">{pertanyaanPemantik}</p>
                  )}
                </div>
              </>
            )}

            {/* KONTEN: ASESMEN */}
            {activeInfoPopup === 'asesmen' && (qrAsesmenAwal || qrAsesmenSumatif) && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-rose-400/20 flex items-center justify-center text-rose-400 shrink-0">
                    <ScanLine className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-rose-300">Pemindai Asesmen</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {qrAsesmenAwal && (
                    <div className="text-center bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center">
                      <h4 className="text-indigo-300 font-bold mb-3 text-sm">Asesmen Awal</h4>
                      <div className="bg-white p-2 rounded-xl inline-block shadow-md">
                        <img src={qrAsesmenAwal} alt="QR Asesmen Awal" className="w-32 h-32 object-cover" />
                      </div>
                    </div>
                  )}
                  {qrAsesmenSumatif && (
                    <div className="text-center bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col items-center">
                      <h4 className="text-rose-300 font-bold mb-3 text-sm">Asesmen Sumatif</h4>
                      <div className="bg-white p-2 rounded-xl inline-block shadow-md">
                        <img src={qrAsesmenSumatif} alt="QR Asesmen Sumatif" className="w-32 h-32 object-cover" />
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
            
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveInfoPopup(null)}
                className="px-6 py-2.5 rounded-lg bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 font-bold hover:bg-indigo-500 hover:text-white transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- UI MODAL POP-UP LKPD --- */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={() => setShowPopup(false)}></div>
          
          <div className="relative bg-slate-900 border border-amber-400/50 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl shadow-amber-400/20 transform animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-amber-300">Penugasan LKPD</h3>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              {lkpdPopupMessage}
            </p>
            
            <div className="flex justify-end">
              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-2.5 rounded-lg bg-amber-400 text-slate-900 font-bold hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
              >
                Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// --- DATA MATERI ---
const materials = [
  {
    title: 'Puisi',
    subtitle: 'Sub-capaian 1: Menganalisis & Membaca',
    youtubeId: 'L9RDPbAfc_8', 
    btnText: 'Contoh Teks',
    materiLink: '/materi-puisi1.html',
    contohKaryaLink: '/contoh-puisi.html', 
    lkpdLink: '/lkpd-puisi.pdf',
    isDropdown: false,
    tujuanPembelajaran: 'Peserta didik diharapkan dapat memahami, mengidentifikasi, dan menganalisis struktur, makna, ciri kebahasaan dari teks puisi serta mengembangkan kemampuan membaca puisi dengan baik dan benar.',
    pertanyaanPemantik: [
      'Pernahkah kalian membaca atau mendengar sebuah puisi? Di mana kalian menemukannya?',
      'Mengapa sebuah puisi menggunakan kata-kata yang singkat tetapi memiliki makna yang mendalam?',
      'Coba kalian perhatikan salah satu lagu, menurut kalian, apakah lirik lagu memiliki kesamaan dengan puisi? Mengapa?'
    ],
    qrAsesmenAwal: '/KODE BATANG ASESMEN AWAL PUISI.png',
    qrAsesmenSumatif: '/KODE BATANG ASESMEN FORMATIF.png'
  },
  {
    title: 'Puisi',
    subtitle: 'Sub-capaian 2: Mencipta',
    youtubeId: 'N0YSlUeMOtI', 
    btnText: 'Hasil Karya',
    materiLink: '/materi-puisi2.html',
    contohKaryaLink: '/karya-puisi.html', 
    lkpdLink: '#',
    isDropdown: false,
    lkpdPopupMessage: 'Penugasan Puisi subcapain 2 : Silakan kalian buat satu buah puisi dengan tema pendidikan atau kasih sayang, buat dalam file pdf dan kumpulkan pada pranala yang disediakan.',
  },
  {
    title: 'Hikayat & Cerpen',
    subtitle: 'Sub-capaian 1: Menganalisis',
    youtubeId: 'b5Kn9MVxRDQ', 
    btnText: 'Contoh Teks',
    materiLink: '/materi-hikayat1.html',
    contohKaryaLink: '/contoh-hikayat.html', 
    isDropdown: true, 
    lkpdIndividu: '/lkpd-individu-hikayat.pdf',
    lkpdKelompok: '/lkpd-kelompok-hikayat.pdf',
  },
  {
    title: 'Hikayat & Cerpen',
    subtitle: 'Sub-capaian 2: Mencipta',
    youtubeId: 't_qFNjsCc4g', 
    btnText: 'Hasil Karya',
    materiLink: 'materi-cerpen.html',
    contohKaryaLink: '/karya-hikayat.html', 
    lkpdLink: '#',
    isDropdown: false,
  },
];

// --- KOMPONEN UTAMA (HALAMAN) ---
export default function Home() {
  return (
    <div className="dark-mesh-background min-h-screen bg-slate-950 text-slate-200">
      <style dangerouslySetInnerHTML={{__html: `
        .mesh-glow-amber {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0) 70%);
          border-radius: 50%;
          filter: blur(60px);
        }
        .mesh-glow-indigo {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%);
          border-radius: 50%;
          filter: blur(80px);
        }
        .dot-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}} />
      
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