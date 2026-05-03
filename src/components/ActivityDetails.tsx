"use client";

import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, Users, CheckCircle2, Award, Phone } from 'lucide-react';
import { Activity } from '../types/activity';

interface ActivityDetailsProps {
  activity: Activity;
}

export function ActivityDetails({ activity }: ActivityDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Key Info Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="flex flex-col gap-1 p-3 bg-slate-50 rounded-2xl border border-slate-100">
          <Calendar size={18} className="text-slate-400 mb-1" />
          <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Date</span>
          <span className="text-sm font-semibold text-slate-900">{activity.date}</span>
        </div>
        <div className="flex flex-col gap-1 p-3 bg-slate-50 rounded-2xl border border-slate-100">
          <Clock size={18} className="text-slate-400 mb-1" />
          <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Heure</span>
          <span className="text-sm font-semibold text-slate-900">{activity.time} ({activity.duration})</span>
        </div>
        <div className="flex flex-col gap-1 p-3 bg-slate-50 rounded-2xl border border-slate-100">
          <Users size={18} className="text-slate-400 mb-1" />
          <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Groupe</span>
          <span className="text-sm font-semibold text-slate-900">{activity.groupSize}</span>
        </div>
        <div className="flex flex-col gap-1 p-3 bg-slate-50 rounded-2xl border border-slate-100">
          <User size={18} className="text-slate-400 mb-1" />
          <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Disponibilité</span>
          <span className="text-sm font-semibold text-slate-900">{activity.availableSpots} places restantes</span>
        </div>
        <div className="flex flex-col gap-1 p-3 bg-slate-50 rounded-2xl border border-slate-100">
          <Award size={18} className="text-slate-400 mb-1" />
          <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Niveau</span>
          <span className="text-sm font-semibold text-slate-900">{activity.skillLevel}</span>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900">À propos</h3>
        <p className="text-slate-600 leading-relaxed text-sm">
          {activity.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <p className="text-sm font-medium text-slate-900">
            Organisé par : <Link href="/coming-soon" className="text-blue-600 cursor-pointer hover:underline">{activity.provider}</Link>
          </p>
          <Link 
            href="/coming-soon" 
            className="flex items-center gap-2 text-xs font-bold text-[#1b2063] bg-[#f8f9fc] border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Phone size={14} />
            Appeler
          </Link>
        </div>
      </div>

      {/* Equipment */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-900">Équipements inclus</h3>
        <ul className="space-y-2">
          {activity.equipmentTags.map((tag, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
              <CheckCircle2 size={16} className="text-green-500" />
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Itinerary / Info Action */}
      <div className="pt-2">
        <Link href="/coming-soon" className="flex items-center justify-between w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-slate-100 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-xl shadow-sm">
              <Calendar size={18} className="text-[#1b2063]" />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-slate-900">Itinéraire & Informations</span>
              <span className="block text-xs text-slate-500">Consultez le programme détaillé</span>
            </div>
          </div>
          <div className="text-slate-400 group-hover:translate-x-1 transition-transform">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Link>
      </div>

      {/* Warning Text */}
      <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3">
        <div className="text-amber-600 shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <p className="text-xs text-amber-800 leading-relaxed">
          <strong>Note importante :</strong> La création d&apos;un groupe ne garantit pas la réservation finale de l&apos;activité. Vous devrez finaliser le paiement une fois le groupe constitué.
        </p>
      </div>
    </div>
  );
}
