export interface MatchInsight {
  matchPercentage: number;
  distance: string;
  skillLevel: string;
  socialProof: string;
  timeFit: string;
  behavioralInsight: string;
  preferences: string[];
}

export interface GroupPreview {
  interestedCount: number;
  spotsLeft: number;
  vibe: string;
  avatars: string[];
}

export interface Activity {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  time: string;
  duration: string;
  price: string;
  availableSpots: number;
  groupSize: string;
  skillLevel: string;
  provider: string;
  description: string;
  equipmentTags: string[];
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  matchInsight: MatchInsight;
  groupPreview: GroupPreview;
}
