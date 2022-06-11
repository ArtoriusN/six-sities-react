import { Offers } from "../../types/offers";
import FavoritesCard from "../favorites-card/favorites-card";

type OfferListProps = {
  offers: Offers;
};

function FavoritesList({ offers }: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        return offer.isFavorite ? (
          <FavoritesCard offer={offer} key={offer.id} />
        ) : (
          ""
        );
      })}
    </div>
  );
}

export default FavoritesList;
