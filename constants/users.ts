import { User } from "../types";

export const users: User[] = [
  { id: 1, name: 'Admin User', email: 'admin@tripin.com', password: 'password123', role: 'admin' },
  { id: 2, name: 'Vendor User', email: 'vendor@tripin.com', password: 'password123', role: 'vendor' },
  { id: 3, name: 'Client User', email: 'client@tripin.com', password: 'password123', role: 'client' },
];