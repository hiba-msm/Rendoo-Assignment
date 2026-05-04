"use client";

import React, { useState } from 'react';

import { MapPin, Star, Heart, Share, ArrowLeft } from 'lucide-react';
import { Activity } from '../types/activity';
import { cn } from '../utils/cn';

interface ActivityHeroProps {
  activity: Activity;
  onClose?: () => void;
}

export function ActivityHero({ activity, onClose }: ActivityHeroProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="relative w-full h-[350px] md:absolute md:inset-0 md:h-auto">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${activity.imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Top Controls */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
        <button 
          onClick={onClose}
          className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
          aria-label="Retour"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex gap-2">
          <button 
            type="button"
            className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors" 
            aria-label="Partager"
          >
            <Share size={20} />
          </button>
          <button 
            type="button"
            onClick={() => setIsFavorite((prev) => !prev)}
            className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
            aria-label="Ajouter aux favoris"
          >
            <Heart size={20} className={cn(isFavorite && "fill-red-500 text-red-500")} />
          </button>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md border border-white/30 uppercase tracking-wider">
          {activity.category}
        </div>
        <h1 className="text-3xl font-bold mb-2 leading-tight">
          {activity.title}
        </h1>
        <div className="flex items-center text-sm text-white/90 gap-4">
          <a 
            href={`https://maps.google.com/?q=${encodeURIComponent(activity.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white hover:underline transition-all"
          >
            <MapPin size={16} />
            <span>{activity.location}</span>
          </a>
          <div className="flex items-center gap-1.5">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span>{activity.rating} ({activity.reviewsCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
