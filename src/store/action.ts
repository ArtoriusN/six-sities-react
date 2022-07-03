import {
  ActionType,
  ChangeCityAction,
  ChangeItemsListAction,
  ChangeHighlightedOfferAction,
  ChangeSortAction,
} from "../types/action";
import { Offer } from "../types/offers";

export const changeCityAction = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const changeItemsListAction = (
  offers: Offer[]
): ChangeItemsListAction => ({
  type: ActionType.ChangeItemsList,
  payload: offers,
});

export const changeHighlightedOfferAction = (
  id: number
): ChangeHighlightedOfferAction => ({
  type: ActionType.ChangeHighlightedOffer,
  payload: id,
});

export const changeSortAction = (sort: string): ChangeSortAction => ({
  type: ActionType.ChangeSort,
  payload: sort,
});

export const getOffersAction = (offers: Offer[]) => ({
  type: ActionType.GetAllOffers,
  payload: offers,
});

export type Actions =
  | ReturnType<typeof changeCityAction>
  | ReturnType<typeof getOffersAction>
  | ReturnType<typeof changeSortAction>;
