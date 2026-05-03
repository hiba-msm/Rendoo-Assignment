"use client";

import React from 'react';
import { Activity } from '../types/activity';

interface StickyBookingBarProps {
  activity: Activity;
  onCreateGroup: () => void;
}

export function StickyBookingBar({ activity, onCreateGroup }: StickyBookingBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 px-6 z-40 safe-area-bottom shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between max-w-lg mx-auto">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-slate-900">{activity.price}</span>
          <span className="text-xs text-slate-500 font-medium">{activity.date} • {activity.time}</span>
        </div>
        <button 
          onClick={onCreateGroup}
          className="bg-[#1b2063] text-white px-6 py-3 rounded-full font-bold shadow-lg active:scale-95 transition-transform"
        >
          Créer un groupe
        </button>
      </div>
    </div>
  );
}
