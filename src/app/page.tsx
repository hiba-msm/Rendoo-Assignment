"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Menu } from "lucide-react";
import { ActivityModal } from "../components/ActivityModal";
import { activitiesList } from "../data/activity";
import { Activity } from "../types/activity";

export default function Home() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Fake Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo Rendoo.ai */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg shadow-sm" style={{ backgroundColor: '#1b2063' }}>
              <span className="text-white text-[24px]" style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive', lineHeight: 1, paddingTop: '2px', paddingRight: '2px' }}>
                R
              </span>
            </div>
            <span className="font-extrabold text-[22px] tracking-tight" style={{ color: '#1b2063' }}>
              Rendoo.ai
            </span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <Link href="/coming-soon" className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <div className="w-full bg-slate-100 rounded-full py-2.5 pl-10 pr-4 text-sm text-slate-400">
                Rechercher une activité...
              </div>
            </Link>
          </div>
          <Link href="/coming-soon" className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
            <Menu size={24} />
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pt-6">
        {/* Fake Categories */}
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {["Tout", "Sea", "Sport", "Nature", "Art", "Food"].map((cat, i) => (
            <Link
              key={cat}
              href="/coming-soon"
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${i === 1 ? "bg-[#1b2063] text-white" : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        <h1 className="text-2xl font-bold mt-6 mb-6">Activités recommandées</h1>

        {/* Dynamic Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activitiesList.map((activity) => (
            <div
              key={activity.id}
              onClick={() => setSelectedActivity(activity)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${activity.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold uppercase">
                  {activity.category}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-bold text-lg leading-tight mb-1">{activity.title}</h3>
                  <div className="flex items-center text-xs text-white/90 gap-1">
                    <MapPin size={12} />
                    <span>{activity.location}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="font-semibold text-slate-900">{activity.date}</span>
                  <span className="text-slate-500">{activity.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">{activity.price}</span>
                  <div className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-lg font-bold flex items-center gap-1">
                    Match {activity.matchInsight.matchPercentage}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Activity Detail Modal */}
      {selectedActivity && (
        <ActivityModal
          isOpen={!!selectedActivity}
          onClose={() => setSelectedActivity(null)}
          activity={selectedActivity}
        />
      )}
    </div>
  );
}
