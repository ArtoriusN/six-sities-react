import { Offers } from "../types/offers";

export enum ActionType {
  ChangeCity = "app/ChangeCity",
  ChangeItemsList = "app/ChangeItemsList",
  ChangeHighlightedOffer = "app/ChangeHighlightedOffer",
  ChangeSort = "app/ChangeSort",
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity;
  payload: string;
};

export type ChangeItemsListAction = {
  type: ActionType.ChangeItemsList;
  payload: Offers;
};

export type ChangeHighlightedOfferAction = {
  type: ActionType.ChangeHighlightedOffer;
  payload: number | null;
};

export type ChangeSortAction = {
  type: ActionType.ChangeSort;
  payload: string;
};

export type Actions =
  | ChangeCityAction
  | ChangeItemsListAction
  | ChangeHighlightedOfferAction
  | ChangeSortAction;
