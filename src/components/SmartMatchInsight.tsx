"use client";

import React, { useState } from 'react';

import { Sparkles, MapPin, Award, Users, Clock, Compass, Check } from 'lucide-react';
import { MatchInsight } from '../types/activity';
import { cn } from '../utils/cn';

interface SmartMatchInsightProps {
  insight: MatchInsight;
}

export function SmartMatchInsight({ insight }: SmartMatchInsightProps) {
  const [activePreferences, setActivePreferences] = useState<string[]>(insight.preferences);

  const togglePreference = (pref: string) => {
    setActivePreferences((prev) =>
      prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
    );
  };


  return (
    <div className="bg-[#f8f9fc] rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="bg-[#1b2063] text-white p-1.5 rounded-lg">
              <Sparkles size={16} />
            </div>
            <h3 className="font-bold text-[#1b2063]">Pourquoi cette activité ?</h3>
          </div>
          <div className="bg-white px-2.5 py-1 rounded-full shadow-sm border border-slate-200 flex items-center gap-1.5">
            <span className="text-[#1b2063] font-bold text-sm">{insight.matchPercentage}%</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Match</span>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          {insight.behavioralInsight}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
          <div className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm">
            <div className="bg-slate-50 text-[#1b2063] p-1.5 rounded-lg border border-slate-100">
              <MapPin size={14} />
            </div>
            <span className="text-[13px] font-medium text-slate-800">{insight.distance}</span>
          </div>
          <div className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm">
            <div className="bg-slate-50 text-[#1b2063] p-1.5 rounded-lg border border-slate-100">
              <Award size={14} />
            </div>
            <span className="text-[13px] font-medium text-slate-800">{insight.skillLevel}</span>
          </div>
          <div className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm">
            <div className="bg-slate-50 text-[#1b2063] p-1.5 rounded-lg border border-slate-100">
              <Users size={14} />
            </div>
            <span className="text-[13px] font-medium text-slate-800">{insight.socialProof}</span>
          </div>
          <div className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm">
            <div className="bg-slate-50 text-[#1b2063] p-1.5 rounded-lg border border-slate-100">
              <Clock size={14} />
            </div>
            <span className="text-[13px] font-medium text-slate-800">{insight.timeFit}</span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <Compass size={14} className="text-[#1b2063]/60" />
            <span className="text-[11px] font-bold text-[#1b2063] uppercase tracking-wider">Critères remplis</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {insight.preferences.map((pref) => {
              const isActive = activePreferences.includes(pref);
              return (
                <button
                  key={pref}
                  type="button"
                  onClick={() => togglePreference(pref)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all duration-200 border",
                    isActive 
                      ? "bg-[#1b2063] text-white border-[#1b2063] shadow-sm shadow-[#1b2063]/20" 
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  )}
                >
                  {isActive && <Check size={10} strokeWidth={3} />}
                  {pref}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
