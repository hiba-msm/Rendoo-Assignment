import { Activity } from '../types/activity';

export const mockActivity: Activity = {
  id: 'activity-1',
  title: 'Marina Yachting Gammarth',
  category: 'Sea',
  location: 'Gammarth, Tunis',
  date: 'Sam. 15 Oct',
  time: '18:00',
  duration: '2h',
  price: '85 DT',
  availableSpots: 2,
  groupSize: 'Max 5 personnes',
  skillLevel: 'Niveau débutant',
  provider: 'Yacht Club de Gammarth',
  description: 'Profitez d\'une sortie en mer inoubliable au coucher du soleil. Idéal pour se détendre, rencontrer du monde et admirer la côte de Gammarth depuis un voilier tout confort.',
  equipmentTags: ['Gilet de sauvetage fourni', 'Boissons incluses', 'Tenue décontractée'],
  imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  rating: 4.8,
  reviewsCount: 124,
  matchInsight: {
    matchPercentage: 92,
    distance: '2,3 km de votre position',
    skillLevel: 'Niveau débutant',
    socialProof: '3 personnes intéressées',
    timeFit: 'Correspond à votre préférence du soir',
    behavioralInsight: 'Des utilisateurs similaires ont réservé des activités Sea cette semaine',
    preferences: ['Proche de moi', 'Débutant', 'Soir', 'Groupe social', 'Sea'],
  },
  groupPreview: {
    interestedCount: 3,
    spotsLeft: 2,
    vibe: 'ambiance sociale / débutant',
    avatars: ['https://i.pravatar.cc/100?img=1', 'https://i.pravatar.cc/100?img=32', 'https://i.pravatar.cc/100?img=12'],
  }
};

export const secondaryActivity1: Activity = {
  id: 'activity-2',
  title: 'Randonnée Cap Bon',
  category: 'Nature',
  location: 'Cap Bon, Nabeul',
  date: 'Dim. 16 Oct',
  time: '08:00',
  duration: '5h',
  price: '45 DT',
  availableSpots: 5,
  groupSize: 'Max 12 personnes',
  skillLevel: 'Niveau intermédiaire',
  provider: 'Explore Tunisia',
  description: 'Découvrez les paysages sauvages du Cap Bon avec une vue imprenable sur la mer Méditerranée. Pique-nique inclus.',
  equipmentTags: ['Chaussures de marche', 'Eau fournie', 'Pique-nique inclus'],
  imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  rating: 4.6,
  reviewsCount: 89,
  matchInsight: {
    matchPercentage: 85,
    distance: '45 km de votre position',
    skillLevel: 'Niveau intermédiaire',
    socialProof: '4 personnes intéressées',
    timeFit: 'Correspond à vos week-ends',
    behavioralInsight: 'Vous aimez les activités de plein air le dimanche',
    preferences: ['Nature', 'Groupe social', 'Matin'],
  },
  groupPreview: {
    interestedCount: 4,
    spotsLeft: 5,
    vibe: 'sportif / aventure',
    avatars: ['https://i.pravatar.cc/100?img=4', 'https://i.pravatar.cc/100?img=5', 'https://i.pravatar.cc/100?img=6'],
  }
};

export const secondaryActivity2: Activity = {
  id: 'activity-3',
  title: 'Atelier Poterie Artisanale',
  category: 'Art',
  location: 'Sidi Bou Said',
  date: 'Sam. 15 Oct',
  time: '14:00',
  duration: '3h',
  price: '60 DT',
  availableSpots: 1,
  groupSize: 'Max 6 personnes',
  skillLevel: 'Niveau débutant',
  provider: 'Art & Clay Studio',
  description: 'Initiez-vous à la poterie traditionnelle dans un cadre inspirant au cœur de Sidi Bou Said. Repartez avec votre création.',
  equipmentTags: ['Argile et outils fournis', 'Tablier', 'Cuisson de la pièce'],
  imageUrl: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  rating: 4.9,
  reviewsCount: 210,
  matchInsight: {
    matchPercentage: 64,
    distance: '8 km de votre position',
    skillLevel: 'Niveau débutant',
    socialProof: '5 personnes intéressées',
    timeFit: 'Ne correspond pas à votre habitude du soir',
    behavioralInsight: 'Nouvelle catégorie à explorer pour vous',
    preferences: ['Débutant', 'Activité calme'],
  },
  groupPreview: {
    interestedCount: 5,
    spotsLeft: 1,
    vibe: 'créatif / relaxant',
    avatars: ['https://i.pravatar.cc/100?img=7', 'https://i.pravatar.cc/100?img=8', 'https://i.pravatar.cc/100?img=9'],
  }
};

export const activitiesList = [mockActivity, secondaryActivity1, secondaryActivity2];
