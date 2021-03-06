export enum AppRoute {
  Main = "/",
  SignIn = "/login",
  Favorites = "/favorites",
  Room = "/offer/:id",
}

export enum AuthorizationStatus {
  Auth = "AUTH",
  NoAuth = "NO_AUTH",
  Unknown = "UNKNOWN",
}

export const INITIAL_CITY_NAME = "Paris";

export const CITIES = [
  "Paris",
  "Amsterdam",
  "Cologne",
  "Hamburg",
  "Brussels",
  "Dusseldorf",
];

export const SortType: { [key: string]: string } = {
  POPULAR: "Popular",
  PRICE_DESCENDING: "Price: high to low",
  PRICE_ASCENDING: "Price: low to high",
  TOP_RATED: "Top rated first",
};

export const Rating = {
  MAX_RATING_PERCENT: 100,
  RATING_MULTIPLIER: 20,
};

export const OfferType: { [key: string]: string } = {
  room: "Private room",
  house: "House",
  apartment: "Apartment",
  hotel: "Hotel",
};

export const URL_MARKER_DEFAULT =
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg";

export const URL_MARKER_CURRENT =
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg";
