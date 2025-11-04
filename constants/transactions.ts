import { Transaction } from "../types";

export const transactions: Transaction[] = [
  { id: 'TRN001', date: '2024-07-20', description: 'Payout to Vendor User for BK001', amount: 1080, type: 'Payout', status: 'Completed' },
  { id: 'TRN002', date: '2024-07-21', description: 'Booking Fee for BK001 (Parisian Dream)', amount: 120, type: 'Booking Fee', status: 'Completed' },
  { id: 'TRN003', date: '2024-07-22', description: 'Payout to Vendor User for BK002', amount: 1620, type: 'Payout', status: 'Pending' },
  { id: 'TRN004', date: '2024-07-23', description: 'Booking Fee for BK002 (Tokyo Adventure)', amount: 180, type: 'Booking Fee', status: 'Completed' },
  { id: 'TRN005', date: '2024-07-24', description: 'Refund to Client User for BK004', amount: 1350, type: 'Refund', status: 'Completed' },
  { id: 'TRN006', date: '2024-07-25', description: 'Payout for BK003', amount: 2250, type: 'Payout', status: 'Failed' },
];
