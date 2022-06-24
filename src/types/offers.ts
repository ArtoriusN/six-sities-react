import { User } from "./user";

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  location: Location;
  name: string;
};

type Offer = {
  id: number;
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: User;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type { Offer, City, Location };

export type Offers = Offer[];
