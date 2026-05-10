import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gamepad2, 
  BookOpen, 
  Sparkles,
  ArrowRight,
  Clock,
  Menu as MenuIcon,
  X
} from 'lucide-react';
import { AppScreen } from './types';

// Components
import TheoryView from './TheoryView';
import QuizView from './QuizView';

function NavButton({ active, icon, label, onClick }: { active: boolean, icon: React.ReactNode, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs transition-all ${
        active 
          ? 'bg-rose-600 text-white shadow-lg shadow-rose-200' 
          : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
      }`}
    >
      {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-4 h-4' })}
      <span className={active ? 'block' : 'hidden sm:block'}>{label}</span>
    </button>
  );
}

function MainMenu({ setScreen }: { setScreen: (s: AppScreen) => void }) {
  return (
    <div className="flex flex-col items-center gap-10 sm:gap-20 py-12 sm:py-20 text-center">
      <div className="text-center space-y-4 max-w-3xl px-4">
        <h1 className="text-4xl sm:text-7xl md:text-8xl font-black text-slate-950 tracking-tighter uppercase italic leading-none drop-shadow-sm">
          Pretérito <span className="text-rose-600">Perfecto</span>
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl font-bold text-rose-600 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
          ՍՈՎՈՐԵԼԸ ԽԱՂ Է
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-12 w-full max-w-4xl px-4">
        <MenuCard 
          icon={<BookOpen />}
          title="Կանոններ"
          description="Իսպաներենի քերականության հիմունքները և բառապաշարը:"
          color="bg-rose-600"
          onClick={() => setScreen('theory')}
        />
        <MenuCard 
          icon={<Gamepad2 />}
          title="Խաղ"
          description="Ինտերակտիվ խաղ անցյալ ժամանակի վերաբերյալ:"
          color="bg-slate-900"
          onClick={() => setScreen('quiz')}
        />
      </div>

      <div className="flex gap-4">
        <div className="w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center -rotate-6 border border-slate-100">
           <span className="text-2xl">🇪🇸</span>
        </div>
        <div className="w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center rotate-12 border border-slate-100">
           <span className="text-2xl">🎓</span>
        </div>
        <div className="w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center -rotate-12 border border-slate-100">
           <span className="text-2xl">⚡</span>
        </div>
      </div>
    </div>
  );
}

function MenuCard({ icon, title, description, color, onClick }: any) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group relative overflow-hidden ${color} p-8 sm:p-12 rounded-[48px] sm:rounded-[64px] shadow-2xl text-left border-b-[12px] border-black/20`}
    >
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-8">
        <div className="p-6 bg-white/20 rounded-[32px] backdrop-blur-md shadow-inner w-fit">
          {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-10 h-10 text-white' })}
        </div>
        <div className="space-y-2 flex-1">
          <h3 className="text-3xl sm:text-5xl font-black text-white italic uppercase tracking-tighter leading-none">{title}</h3>
          <p className="text-white/80 text-lg font-medium">{description}</p>
        </div>
        <div className="hidden sm:block p-4">
           <ArrowRight className="w-10 h-10 text-white opacity-40 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      
      {/* Abstract Design Elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-2xl" />
    </motion.button>
  );
}

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('menu');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-rose-100 selection:text-rose-600 overflow-x-hidden">
      {/* Aesthetic Background Blocks */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-rose-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-40" />
      </div>

      <header className="sticky top-0 z-50 px-4 sm:px-8 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-xl border-2 border-white p-3 rounded-[32px] shadow-2xl shadow-slate-200/50">
          <button 
            onClick={() => setScreen('menu')}
            className="flex items-center gap-4 px-4 h-full"
          >
            <div className="w-10 h-10 bg-rose-600 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-200 rotate-3">
              <span className="text-white font-black text-xl italic">P</span>
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter uppercase italic hidden lg:block">Pretérito Perfecto</span>
          </button>
          
          <div className="flex items-center gap-2">
            <NavButton 
              active={screen === 'theory'} 
              icon={<BookOpen />} 
              label="Կանոններ" 
              onClick={() => setScreen('theory')} 
            />
            <NavButton 
              active={screen === 'quiz'} 
              icon={<Gamepad2 />} 
              label="Խաղ" 
              onClick={() => setScreen('quiz')} 
            />
          </div>
        </nav>
      </header>

      <main className="px-4 py-12 max-w-7xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
          >
            {screen === 'menu' && <MainMenu setScreen={setScreen} />}
            {screen === 'theory' && <TheoryView />}
            {screen === 'quiz' && <QuizView onComplete={() => setScreen('menu')} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="px-4 py-20 text-center space-y-6">
            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">
               &copy; 2026 ԻՍՊԱՆԵՐԵՆ: Pretérito Perfecto
            </p>
            <div className="flex justify-center gap-4 text-slate-100">
              <Clock className="w-4 h-4" />
              <Sparkles className="w-4 h-4" />
            </div>
      </footer>
    </div>
  );
}
