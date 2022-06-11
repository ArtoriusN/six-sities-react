import { Offers } from "../../types/offers";
import OfferCard from "../offer-card/offer-card";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

type OfferListProps = {
  offers: Offers;
};

function OfferList({ offers }: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard offer={offer} />
      ))}
    </div>
  );
}
export default OfferList;
