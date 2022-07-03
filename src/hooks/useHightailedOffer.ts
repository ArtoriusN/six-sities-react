import { useState } from "react";
import { Offer } from "../types/offers";

const useHightailedOffer = (
  offers: Offer[]
): [Offer | undefined, (id: number | null) => void] => {
  const [highlightedOffer, setHightailedOffer] = useState<Offer | undefined>(
    undefined
  );

  const onChangeHightailedOffer = (id: number | null): void => {
    const currentPoint = offers.find((offer) => offer.id === id);
    setHightailedOffer(currentPoint);
  };
  return [highlightedOffer, onChangeHightailedOffer];
};

export default useHightailedOffer;
