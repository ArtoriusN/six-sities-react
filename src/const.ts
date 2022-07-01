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

export const SortType = {
  POPULAR: "POPULAR",
  PRICE_DESCENDING: "PRICE_DESCENDING",
  PRICE_ASCENDING: "PRICE_ASCENDING",
  TOP_RATED: "TOP_RATED",
};

export const URL_MARKER_DEFAULT =
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg";

export const URL_MARKER_CURRENT =
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg";
