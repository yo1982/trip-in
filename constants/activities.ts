import { Activity } from "../types";

export const activities: Activity[] = [
  {
    id: 1,
    type: 'booking',
    description: 'New booking for "Parisian Dream" by Client User.',
    timestamp: '1 hour ago',
    vendorId: 2,
  },
  {
    id: 2,
    type: 'review',
    description: 'Client User left a 5-star review for "Parisian Dream".',
    timestamp: '3 hours ago',
    vendorId: 2,
  },
  {
    id: 3,
    type: 'payout',
    description: 'Payout of $1,080 to Vendor User has been completed.',
    timestamp: '1 day ago',
    vendorId: 2,
  },
  {
    id: 4,
    type: 'user_registered',
    description: 'A new client, Client User, has registered.',
    timestamp: '2 days ago',
  },
  {
    id: 5,
    type: 'booking',
    description: 'New booking for "Tokyo Adventure" by Admin User.',
    timestamp: '3 days ago',
    vendorId: 2,
  }
];
