import React from 'react';
import { motion } from 'motion/react';
import { PRETERITO_THEORY } from './data';
import { BookOpen, AlertCircle, Check } from 'lucide-react';

export default function TheoryView() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <span className="px-4 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-black uppercase tracking-widest">Քերականություն</span>
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 italic tracking-tighter uppercase">Pretérito Perfecto</h2>
      </motion.div>

      <div className="grid gap-8">
        {PRETERITO_THEORY.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 sm:p-12 rounded-[48px] shadow-xl border-2 border-slate-100 space-y-6"
          >
            <div className="flex items-center gap-4">
               <div className="p-3 bg-rose-600 rounded-2xl shadow-lg shadow-rose-200">
                  <BookOpen className="w-6 h-6 text-white" />
               </div>
               <h3 className="text-2xl sm:text-3xl font-black text-slate-900 italic uppercase leading-none">{point.title}</h3>
            </div>
            
            {point.content && (
              <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed">{point.content}</p>
            )}

            {point.conjugationTables && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {point.conjugationTables.map((table, j) => (
                  <div key={j} className="bg-slate-50 p-6 rounded-[32px] border border-slate-100">
                    <h4 className="text-lg font-black text-rose-600 mb-4 uppercase italic">{table.title}</h4>
                    <div className="space-y-2">
                       {table.rows.map((row, k) => (
                         <div key={k} className="flex justify-between text-sm font-bold">
                            <span className="text-slate-400">{row.pronoun}</span>
                            <span className="text-slate-900">{row.haber} <span className="text-rose-600">{row.participio}</span></span>
                         </div>
                       ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {point.rules && (
              <div className="bg-emerald-50 p-6 rounded-[32px] border border-emerald-100 space-y-3">
                {point.rules.map((rule, j) => (
                  <p key={j} className="text-emerald-900 font-bold flex items-start gap-2">
                    <Check className="w-5 h-5 shrink-0 mt-1" />
                    {rule}
                  </p>
                ))}
              </div>
            )}

            {point.markers && (
              <div className="flex flex-wrap gap-3 pt-2">
                {point.markers.map((marker, j) => (
                  <span key={j} className="px-4 py-2 bg-slate-900 text-white rounded-2xl text-sm font-black uppercase tracking-wider italic">
                    {marker}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
