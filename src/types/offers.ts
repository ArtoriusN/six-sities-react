export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type Offer = {
  city: {
    location: Location;
    name: string;
  };
  location: Location;
  host: Host;
  id: number;
  bedrooms: number;
  description: string;
  goods: string[];
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type Offers = Offer[];
