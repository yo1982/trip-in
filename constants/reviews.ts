import { Review } from "../types";

export const reviews: Review[] = [
  {
    id: 1,
    reviewerName: 'Client User',
    packageName: 'Parisian Dream',
    rating: 5,
    comment: 'Absolutely amazing experience! The tour was well-organized and our guide was fantastic. Highly recommended!',
    date: '2024-08-25',
    status: 'Approved',
  },
  {
    id: 2,
    reviewerName: 'Admin User',
    packageName: 'Tokyo Adventure',
    rating: 4,
    comment: 'A great trip overall. The rail pass was very convenient. Some of the hotel rooms were a bit small, but that is expected in Tokyo.',
    date: '2024-09-12',
    status: 'Approved',
  },
  {
    id: 3,
    reviewerName: 'Client User',
    packageName: 'Santorini Sunset',
    rating: 5,
    comment: 'The views were breathtaking. The catamaran cruise was the highlight of our trip. Worth every penny.',
    date: '2024-09-15',
    status: 'Pending',
  },
  {
    id: 4,
    reviewerName: 'Vendor User',
    packageName: 'Dubai Luxury Escape',
    rating: 3,
    comment: 'It was okay. The desert safari was fun, but I felt the package was a bit overpriced for what was offered.',
    date: '2024-07-28',
    status: 'Rejected',
  },
   {
    id: 5,
    reviewerName: 'Client User',
    packageName: 'Roman Holiday',
    rating: 4,
    comment: 'Loved the cooking class and skipping the long lines at the Colosseum. The hotel was charming and in a great location.',
    date: '2024-06-20',
    status: 'Approved',
  },
];
