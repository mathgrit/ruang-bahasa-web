'use client';

import { Navbar } from '@/components/navbar';

export default function ProfilPage() {
  return (
    <div className="dark-mesh-background">
      {/* Glow Orbs Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Top-left amber glow */}
        <div className="mesh-glow-amber -top-32 -left-32"></div>
        
        {/* Bottom-right indigo glow */}
        <div className="mesh-glow-indigo -bottom-32 -right-32"></div>
        
        {/* Center subtle indigo glow */}
        <div className="mesh-glow-indigo top-1/2 right-1/4 w-80 h-80 opacity-5"></div>
        
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        <Navbar />

        <main className="pt-28 pb-20">
        {/* Profile Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="glassmorphism p-10 sm:p-12 text-center">
            {/* Profile Picture */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full border-4 border-amber-400 shadow-2xl shadow-amber-400/30 bg-gradient-to-br from-amber-400/20 to-indigo-400/20 flex items-center justify-center">
                <span className="text-6xl">👩‍🏫</span>
              </div>
            </div>

            {/* Name and Title */}
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-amber-300 mb-2">
              Putri Schatzi Abdillah
            </h1>
            <p className="text-xl text-indigo-300 mb-6 font-semibold">
              Guru Bahasa Indonesia
            </p>

            {/* Bio */}
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-light">
              Saya mahasiswa semester 6 Pendidikan Bahasa Indonesia percaya bahwa bahasa bukan sekadar kumpulan kata, tetapi jembatan untuk menyampaikan pikiran, perasaan, dan cerita. Ketertarikan saya pada Bahasa Indonesia mengantar saya pada dunia mengajar, tempat saya bisa berbagi pengetahuan sekaligus belajar dari beragam sudut pandang siswa. Bagi saya, pembelajaran Bahasa Indonesia tidak harus terasa kaku tetapi bisa menjadi ruang yang seru untuk mengeksplorasi ide, memahami makna, dan menumbuhkan kreativitas melalui kata. Melalui proses mengajar, saya ingin menghadirkan pengalaman belajar yang hangat, menyenangkan, dan membuat siswa lebih dekat dengan bahasa serta sastra Indonesia.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-lg bg-amber-400/20 border border-amber-400/50 text-amber-300 hover:bg-amber-400/30 hover:border-amber-400 transition-all duration-200 font-semibold">
                Hubungi Saya
              </button>
              <button className="px-8 py-3 rounded-lg bg-indigo-400/20 border border-indigo-400/50 text-indigo-300 hover:bg-indigo-400/30 hover:border-indigo-400 transition-all duration-200 font-semibold">
                Lihat Portofolio
              </button>
            </div>
          </div>
        </div>

        {/* Keahlian Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-serif font-bold text-amber-300 mb-8">Keahlian</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Analisis Sastra', desc: 'Pemahaman mendalam tentang puisi, prosa, dan drama' },
              { title: 'Pengembangan Kurikulum', desc: 'Merancang dan mengimplementasikan pembelajaran efektif' },
              { title: 'Komunikasi Efektif', desc: 'Menyampaikan ide dengan jelas dan menarik' },
              { title: 'Bimbingan Kreatif', desc: 'Membimbing siswa dalam ekspresi dan kreativitas' },
            ].map((skill, idx) => (
              <div key={idx} className="glassmorphism p-6 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-lg font-serif font-semibold text-amber-300 mb-2">{skill.title}</h3>
                <p className="text-slate-400 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pendidikan Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-serif font-bold text-amber-300 mb-8">Pendidikan</h2>
          <div className="space-y-6">
            {[
              { year: '2023-Sekarang', title: 'Universitas Siliwangi', place: 'Program Pendidikan Bahasa Indonesia' },
              { year: '2020-2023', title: 'SMAN 1 Kawali', place: 'Program MIPA' },
              { year: '2017-2020', title: 'SMPN 1 Kawali', place: 'Siswa' },
            ].map((edu, idx) => (
              <div key={idx} className="glassmorphism p-6 border-l-4 border-amber-400">
                <p className="text-amber-300 text-sm font-semibold mb-1">{edu.year}</p>
                <h3 className="text-lg font-serif font-bold text-slate-100 mb-2">{edu.title}</h3>
                <p className="text-slate-400 text-sm">{edu.place}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Koleksi Karya Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-amber-300 mb-8">Koleksi Karya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
             /* { 
                title: 'Panduan Menulis Puisi Modern',
                type: 'E-book',
                link: 'https://example.com/panduan-puisi',
                icon: '📚'
              },
              { 
                title: 'Workshop Sastra Indonesia',
                type: 'Video Tutorial',
                link: 'https://example.com/workshop-sastra',
                icon: '🎬'
              },*/
              { 
                title: 'Efikasi Diri Sebagai Faktor Keberhasilan dalam Linguistik',
                type: 'Artikel',
                link: 'https://scholar.google.com/citations?view_op=view_citation&hl=id&user=j3_6qxYAAAAJ&citation_for_view=j3_6qxYAAAAJ:d1gkVwhDpl0C',
                icon: '📝'
              },
              { 
                title: 'Analiss Farasa Endosentris dan Eksosentris pada lagi Lesung Pipi Ciptaan Raim Laode',
                type: 'Artikel',
                link: 'https://scholar.google.com/citations?view_op=view_citation&hl=id&user=j3_6qxYAAAAJ&citation_for_view=j3_6qxYAAAAJ:u5HHmVD_uO8C',
                icon: '📝'
              },
              { 
                title: 'Analisis Sosilogi Sastra pada Tokoh Jose Karosta dalam Naskah Mostodon dan Burung Kondor Karya WS. Rendra',
                type: 'Artikel',
                link: 'https://scholar.google.com/citations?view_op=view_citation&hl=id&user=j3_6qxYAAAAJ&citation_for_view=j3_6qxYAAAAJ:u-x6o8ySG0sC',
                icon: '📝'
              },/*
              { 
                title: 'Kumpulan Puisi Terbaik',
                type: 'Publikasi',
                link: 'https://example.com/kumpulan-puisi',
                icon: '✨'
              },
              { 
                title: 'Metode Pengajaran Sastra Inovatif',
                type: 'Penelitian',
                link: 'https://example.com/metode-pengajaran',
                icon: '🔬'
              },
              { 
                title: 'Podcast: Diskusi Sastra Indonesia',
                type: 'Podcast',
                link: 'https://example.com/podcast-sastra',
                icon: '🎙️'
              },*/
            ].map((work, idx) => (
              <a
                key={idx}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group glassmorphism p-6 border-2 border-amber-400/30 hover:border-amber-400 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{work.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-semibold text-slate-100 mb-2 group-hover:text-amber-300 transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-sm text-indigo-300 font-medium">{work.type}</p>
                    <p className="text-xs text-slate-400 mt-3 group-hover:text-slate-300 transition-colors">
                      Klik untuk mengakses →
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

        <footer className="border-t border-white/10 mt-16 sm:mt-20 lg:mt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-sm text-slate-400">
            <p className="font-medium">© 2026 Ruang Bahasa. Semua hak cipta dilindungi.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
