import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRETERITO_QUIZ } from './data';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from 'lucide-react';

export default function QuizView({ onComplete }: { onComplete: () => void }) {
  const data = PRETERITO_QUIZ;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = data[currentIdx];

  const handleOptionClick = (option: string) => {
    if (showResult) return;
    setSelectedOption(option);
    setShowResult(true);
    
    if (option === question.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < data.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const reset = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto bg-white p-12 rounded-[64px] shadow-2xl text-center space-y-8 border-4 border-slate-900"
      >
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-20 rounded-full animate-pulse" />
          <Trophy className="w-32 h-32 text-yellow-500 mx-auto relative z-10" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-5xl font-black text-slate-900 italic tracking-tighter uppercase">Ավարտվեց:</h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Քո արդյունքը</p>
        </div>

        <div className="flex justify-center items-baseline gap-2">
          <span className="text-8xl font-black text-rose-600 italic leading-none">{score}</span>
          <span className="text-4xl font-black text-slate-300 italic leading-none">/ {data.length}</span>
        </div>

        <div className="grid gap-4 pt-4">
          <button 
            onClick={reset}
            className="flex items-center justify-center gap-3 bg-slate-900 text-white p-6 rounded-[32px] font-black uppercase tracking-widest hover:bg-rose-600 transition-colors shadow-xl"
          >
            <RotateCcw className="w-6 h-6" />
            Նորից փորձել
          </button>
          <button 
            onClick={onComplete}
            className="flex items-center justify-center gap-3 bg-slate-100 text-slate-600 p-6 rounded-[32px] font-black uppercase tracking-widest hover:bg-slate-200 transition-colors"
          >
            Վերադառնալ
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-12 pb-20">
      <div className="flex justify-between items-center px-2">
         <div className="space-y-1">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Հարց {currentIdx + 1}/{data.length}</span>
            <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
               <motion.div 
                 className="h-full bg-rose-600" 
                 initial={{ width: 0 }}
                 animate={{ width: `${((currentIdx + 1) / data.length) * 100}%` }}
               />
            </div>
         </div>
         <div className="text-right">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Միավոր</span>
            <p className="text-2xl font-black text-slate-900 italic">{score}</p>
         </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-8"
        >
          <div className="bg-slate-900 p-6 sm:p-10 rounded-[32px] sm:rounded-[48px] shadow-xl text-center space-y-4 sm:space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-500" />
            <p className="text-xl sm:text-4xl font-black text-white italic leading-tight break-words">
              {question.sentence}
            </p>
            <p className="text-rose-400/80 text-xs sm:text-sm font-bold uppercase tracking-widest">
              {question.translation}
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {question.options.map((option) => {
              const isCorrect = option === question.correctAnswer;
              const isSelected = selectedOption === option;
              
              let bgColor = "bg-white";
              let borderColor = "border-slate-100";
              let textColor = "text-slate-900";

              if (showResult) {
                if (isCorrect) {
                  bgColor = "bg-green-50";
                  borderColor = "border-green-500";
                  textColor = "text-green-700";
                } else if (isSelected) {
                  bgColor = "bg-rose-50";
                  borderColor = "border-rose-500";
                  textColor = "text-rose-700";
                } else {
                  bgColor = "bg-slate-50";
                  borderColor = "border-slate-100";
                  textColor = "text-slate-300";
                }
              }

              return (
                <button
                  key={option}
                  disabled={showResult}
                  onClick={() => handleOptionClick(option)}
                  className={`group relative p-4 sm:p-6 rounded-[24px] sm:rounded-[32px] border-2 ${borderColor} ${bgColor} ${textColor} text-lg sm:text-xl font-bold transition-all flex items-center justify-between ${!showResult && 'hover:border-rose-600 hover:shadow-xl'}`}
                >
                  <span className="flex-1 text-left break-words mr-2 uppercase tracking-wide">
                    {option}
                  </span>
                  {showResult && isCorrect && <CheckCircle2 className="text-green-500 w-6 h-6 sm:w-8 sm:h-8 shrink-0" />}
                  {showResult && isSelected && !isCorrect && <XCircle className="text-rose-500 w-6 h-6 sm:w-8 sm:h-8 shrink-0" />}
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showResult && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleNext}
            className="w-full flex items-center justify-center gap-3 bg-rose-600 text-white p-6 rounded-[32px] font-black uppercase tracking-widest hover:bg-slate-900 transition-colors shadow-2xl shadow-rose-200"
          >
            {currentIdx < data.length - 1 ? 'Հաջորդ հարցը' : 'Տեսնել արդյունքը'}
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
