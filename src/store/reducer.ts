import { Actions, ActionType } from "../types/action";
import { State } from "../types/state";
import { INITIAL_CITY_NAME, SortType } from "../const";
import { offers } from "../mocks/offers";

const initialState = {
  selectedCity: INITIAL_CITY_NAME,
  offers: offers,
  currentSort: SortType.POPULAR,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, selectedCity: action.payload };
    case ActionType.ChangeItemsList:
      return { ...state, offers: action.payload };
    case ActionType.ChangeHighlightedOffer:
      return {
        ...state,
        highlightedOffer: state.offers.find(
          (offer) => offer.id === action.payload
        ),
      };
    case ActionType.ChangeSort:
      return { ...state, currentSort: action.payload };

    default:
      return state;
  }
};

export { reducer };
