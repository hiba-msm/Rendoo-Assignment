"use client";

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoginRequiredModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginRequiredModal({ isOpen, onClose }: LoginRequiredModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl z-[101] m-4"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X size={18} />
            </button>
            
            <div className="text-center mt-4 mb-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Connectez-vous pour continuer</h2>
              <p className="text-sm text-slate-600">
                Connectez-vous pour créer un groupe et continuer la réservation.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                <input 
                  type="email" 
                  placeholder="nom@exemple.com" 
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Mot de passe</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                />
              </div>
              
              <button 
                onClick={onClose}
                className="w-full bg-[#1b2063] text-white font-bold py-3.5 rounded-xl mt-2 hover:bg-[#14194d] active:scale-95 transition-all"
              >
                Se connecter
              </button>
              
              <p className="text-center text-xs text-slate-500 mt-4">
                Pas encore de compte ? <Link href="/coming-soon" className="text-black font-semibold cursor-pointer underline">S&apos;inscrire</Link>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
