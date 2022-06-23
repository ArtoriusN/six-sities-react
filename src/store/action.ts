import {
  ActionType,
  ChangeCityAction,
  ChangeItemsListAction,
  ChangeHighlightedOfferAction,
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
