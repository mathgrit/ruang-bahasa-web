export function Header() {
  return (
    <header className="w-full pt-28 pb-16 sm:pb-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-slate-100 mb-4 leading-tight gold-glow">
            Belajar, Berkarya, dan Berkreasi
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-indigo-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Jelajahi dunia sastra Indonesia melalui puisi, hikayat, dan cerpen yang menginspirasi
          </p>
        </div>
      </div>
    </header>
  );
}
