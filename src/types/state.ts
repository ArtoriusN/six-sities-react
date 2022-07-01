import { Offer } from "../types/offers";

export type State = {
  selectedCity: string;
  offers: Offer[];
  currentSort: string;
  highlightedOffer?: Offer | undefined;
};
