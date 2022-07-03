import { Offers } from "../../types/offers";
import OfferCard from "../offer-card/offer-card";

type OfferListProps = {
  offers: Offers;
  className: string;
  imageClassName: string;
  infoClassName?: string;
  imageWidth: number;
  imageHeight: number;
  onChangeHighlightedOffer?: (id: number | null) => void;
};

function OfferList(props: OfferListProps): JSX.Element {
  const {
    offers,
    className,
    imageClassName,
    infoClassName,
    imageWidth,
    imageHeight,
    onChangeHighlightedOffer,
  } = props;

  return (
    <>
      {offers.map((offer) => {
        return (
          <OfferCard
            key={offer.id}
            offer={offer}
            className={className}
            imageClassName={imageClassName}
            infoClassName={infoClassName}
            imageHeight={imageHeight}
            imageWidth={imageWidth}
            onChangeHighlightedOffer={onChangeHighlightedOffer}
          />
        );
      })}
    </>
  );
}

export default OfferList;
