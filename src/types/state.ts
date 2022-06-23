import { Offer } from "../types/offers";

export type State = {
  selectedCity: string;
  offers: Offer[];
  highlightedOffer?: Offer | undefined;
};
