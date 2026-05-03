"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#1b2063] flex flex-col items-center justify-center p-6 text-white text-center">
      <div className="max-w-2xl w-full space-y-8">
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Coming Soon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-white drop-shadow-2xl">
              Coming Soon
            </h1>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Cette fonctionnalité arrive bientôt !</h2>
          <p className="text-blue-100/70 max-w-md mx-auto">
            Nous travaillons dur pour vous offrir la meilleure expérience Rendoo. Revenez nous voir très prochainement.
          </p>
        </div>

        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-white text-[#1b2063] px-8 py-4 rounded-full font-black hover:bg-blue-50 transition-colors shadow-lg"
        >
          <ArrowLeft size={20} />
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
