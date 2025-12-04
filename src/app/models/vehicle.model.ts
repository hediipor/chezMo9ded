export interface Vehicle {
  id: number;
  name: string;
  brand: string;
  pricePerDay: number;
  seats: number;
  transmission: string;
  luggage: number;
  fuel: string;
  imageUrl: string;
  tag: 'hot' | 'promo' | 'new';
}
