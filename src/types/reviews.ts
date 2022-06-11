export type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type Review = {
  review: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

export type Reviews = Review[];
