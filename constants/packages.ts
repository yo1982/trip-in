import { Package } from "../types";

export const packages: Package[] = [
  {
    id: 1,
    name: 'Parisian Dream',
    destination: 'Paris',
    description: 'Experience the romance and charm of Paris. Visit iconic landmarks, indulge in exquisite cuisine, and create unforgettable memories in the City of Love.',
    price: 1200,
    duration: 7,
    imageUrl: 'https://picsum.photos/400/600?random=2',
    details: [
      'Round-trip airfare from major hubs',
      '7 nights in a 4-star hotel in the city center',
      'Daily breakfast included',
      'Guided tours of the Louvre Museum and Eiffel Tower',
      'Seine River cruise dinner'
    ],
    whatsIncluded: ['Accommodation', 'Guided Tours', 'Some Meals', 'River Cruise'],
    whatsNotIncluded: ['Visa Fees', 'Personal Expenses', 'Travel Insurance']
  },
  {
    id: 2,
    name: 'Tokyo Adventure',
    destination: 'Tokyo',
    description: 'Dive into the vibrant culture of Tokyo, where ancient traditions meet futuristic technology. Explore bustling markets, serene temples, and dazzling cityscapes.',
    price: 1800,
    duration: 10,
    imageUrl: 'https://picsum.photos/400/600?random=3',
    details: [
      'Round-trip airfare',
      '10 nights in a centrally located hotel',
      'Japan Rail Pass for unlimited travel',
      'Guided tour of Shibuya Crossing and Meiji Shrine',
      'Day trip to Mount Fuji'
    ],
    whatsIncluded: ['Accommodation', 'Rail Pass', 'Guided Tours', 'Day Trip'],
    whatsNotIncluded: ['Most Meals', 'Entrance Fees to some temples', 'Personal Souvenirs']
  },
  {
    id: 3,
    name: 'Dubai Luxury Escape',
    destination: 'Dubai',
    description: 'Indulge in the opulence of Dubai. From towering skyscrapers to vast deserts, experience world-class shopping, dining, and entertainment.',
    price: 2500,
    duration: 5,
    imageUrl: 'https://picsum.photos/400/600?random=4',
    details: [
      'Business class round-trip airfare',
      '5 nights in a 5-star luxury hotel',
      'Private airport transfers',
      'Desert safari with BBQ dinner',
      'Tickets to the top of Burj Khalifa'
    ],
    whatsIncluded: ['Luxury Accommodation', 'Desert Safari', 'Burj Khalifa Tickets', 'Transfers'],
    whatsNotIncluded: ['Shopping Expenses', 'Optional Tours', 'Lunches']
  },
  {
    id: 4,
    name: 'New York Big Apple Tour',
    destination: 'New York',
    description: 'Feel the energy of the city that never sleeps. Explore iconic landmarks, catch a Broadway show, and discover the diverse neighborhoods of NYC.',
    price: 1500,
    duration: 6,
    imageUrl: 'https://picsum.photos/400/600?random=5',
    details: [
      'Round-trip airfare',
      '6 nights in a hotel near Times Square',
      '7-day unlimited MetroCard',
      'Ferry trip to the Statue of Liberty and Ellis Island',
      'Entrance to the Empire State Building'
    ],
    whatsIncluded: ['Accommodation', 'MetroCard', 'Key Landmark Tickets'],
    whatsNotIncluded: ['Broadway Show Tickets', 'Meals', 'Shopping']
  },
   {
    id: 5,
    name: 'Roman Holiday',
    destination: 'Rome',
    description: 'Walk through history in the eternal city of Rome. Discover ancient ruins, magnificent art, and enjoy authentic Italian pasta and gelato.',
    price: 1350,
    duration: 8,
    imageUrl: 'https://picsum.photos/400/600?random=15',
    details: [
      'Round-trip airfare',
      '8 nights in a charming boutique hotel',
      'Skip-the-line tickets to the Colosseum and Vatican Museums',
      'Italian cooking class',
      'Daily breakfast'
    ],
    whatsIncluded: ['Accommodation', 'Museum Tickets', 'Cooking Class', 'Breakfast'],
    whatsNotIncluded: ['City Tax', 'Lunches and Dinners', 'Personal Expenses']
  },
  {
    id: 6,
    name: 'Santorini Sunset',
    destination: 'Santorini',
    description: 'Witness the world-famous sunsets of Santorini. Relax on volcanic beaches, explore picturesque white-washed villages, and savor fresh seafood.',
    price: 2100,
    duration: 7,
    imageUrl: 'https://picsum.photos/400/600?random=16',
    details: [
      'Round-trip airfare and ferry transfers',
      '7 nights in a cliffside hotel with a caldera view',
      'Catamaran cruise with snorkeling and dinner',
      'Wine tasting tour of local vineyards',
      'Daily breakfast'
    ],
    whatsIncluded: ['Unique Accommodation', 'Catamaran Cruise', 'Wine Tasting', 'Transfers'],
    whatsNotIncluded: ['Most meals', 'Optional activities', 'Gratuities']
  },
];
