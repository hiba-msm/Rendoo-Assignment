import React from 'react';
import { GroupPreview as GroupPreviewType } from '../types/activity';
import { Users } from 'lucide-react';

interface GroupPreviewProps {
  preview: GroupPreviewType;
}

export function GroupPreview({ preview }: GroupPreviewProps) {
  return (
    <div className="bg-slate-50 rounded-3xl p-5 border border-slate-100 flex items-center justify-between">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <Users size={18} className="text-slate-700" />
          <h3 className="font-bold text-slate-900">Participants</h3>
        </div>
        <p className="text-sm text-slate-500">
          <span className="font-semibold text-slate-900">{preview.interestedCount} intéressés</span> • {preview.spotsLeft} places
        </p>
        <div className="inline-block px-2 py-1 mt-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 w-max">
          {preview.vibe}
        </div>
      </div>
      
      <div className="flex -space-x-3">
        {preview.avatars.map((avatar, idx) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            key={idx}
            src={avatar} 
            alt="Participant avatar" 
            className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"
          />
        ))}
        <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
          +{preview.spotsLeft}
        </div>
      </div>
    </div>
  );
}
