import { Offers } from "../../types/offers";
import OfferCard from "../offer-card/offer-card";
import { useState } from "react";

type OfferListProps = {
  offers: Offers;
};

function OfferList({ offers }: OfferListProps): JSX.Element {
  const [onSelect, setOnSelect] = useState(0);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        return (
          <OfferCard
            offer={offer}
            key={offer.id}
            onSelect={() => setOnSelect(offer.id)}
          />
        );
      })}
    </div>
  );
}

export default OfferList;
