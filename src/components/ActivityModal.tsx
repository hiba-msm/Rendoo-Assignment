"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from '../types/activity';
import { ActivityHero } from './ActivityHero';
import { SmartMatchInsight } from './SmartMatchInsight';
import { GroupPreview } from './GroupPreview';
import { ActivityDetails } from './ActivityDetails';
import { StickyBookingBar } from './StickyBookingBar';
import { LoginRequiredModal } from './LoginRequiredModal';

interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: Activity;
}

export function ActivityModal({ isOpen, onClose, activity }: ActivityModalProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 overflow-hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl bg-white md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
          >
            {/* Left side / Top side: Hero Image */}
            <div className="w-full md:w-[45%] lg:w-1/2 flex-shrink-0 h-[350px] md:h-auto relative">
              <ActivityHero activity={activity} onClose={onClose} />
            </div>

            {/* Right side / Bottom side: Content */}
            <div className="w-full md:w-[55%] lg:w-1/2 flex-1 overflow-y-auto pb-24 md:pb-0 bg-white">
              <div className="p-6 md:p-8 space-y-8 max-w-2xl mx-auto">
                {/* Header for Right Panel - Closer to Rendoo structure */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 uppercase tracking-wider">
                      {activity.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight">
                    {activity.title}
                  </h2>
                  <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>{activity.location}</span>
                  </div>
                </div>

                {/* Smart Match Insight - The Primary Improvement */}
                <SmartMatchInsight insight={activity.matchInsight} />
                
                <hr className="border-slate-100" />
                
                {/* Group Preview */}
                <GroupPreview preview={activity.groupPreview} />

                <hr className="border-slate-100" />
                
                {/* Activity Details */}
                <ActivityDetails activity={activity} />
                
                {/* Desktop CTA */}
                <div className="hidden md:block pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-slate-900">{activity.price}</span>
                      <p className="text-sm text-slate-500 font-medium">{activity.date} • {activity.time}</p>
                    </div>
                    <button 
                      onClick={() => setIsLoginModalOpen(true)}
                      className="bg-[#1b2063] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#14194d] active:scale-95 transition-all"
                    >
                      Créer un groupe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Sticky CTA */}
            <StickyBookingBar activity={activity} onCreateGroup={() => setIsLoginModalOpen(true)} />
          </motion.div>

          <LoginRequiredModal 
            isOpen={isLoginModalOpen} 
            onClose={() => setIsLoginModalOpen(false)} 
          />
        </div>
      )}
    </AnimatePresence>
  );
}
