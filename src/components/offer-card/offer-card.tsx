import { Offer } from "../../types/offers";
import { generatePath, Link } from "react-router-dom";
import { AppRoute, OfferType } from "../../const";
import { getWidthByRating } from "../../utils";

type OfferCardProps = {
  offer: Offer;
  className: string;
  imageClassName: string;
  infoClassName?: string;
  imageWidth: number;
  imageHeight: number;
  onChangeHighlightedOffer?: (id: number | null) => void;
};

function OfferCard(props: OfferCardProps): JSX.Element {
  const {
    id,
    previewImage,
    isFavorite,
    isPremium,
    price,
    title,
    type,
    rating,
  } = props.offer;
  const {
    className,
    imageClassName,
    infoClassName,
    imageWidth,
    imageHeight,
    onChangeHighlightedOffer,
  } = props;

  return (
    <article
      className={`${className} place-card`}
      onMouseEnter={() =>
        onChangeHighlightedOffer && onChangeHighlightedOffer(id)
      }
      onMouseLeave={() =>
        onChangeHighlightedOffer && onChangeHighlightedOffer(null)
      }
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${generatePath(AppRoute.Room, { id })}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imageWidth}
            height={imageHeight}
            alt="Place"
          />
        </Link>
      </div>
      <div className={`${infoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite ? `place-card__bookmark-button--active` : ""
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {isFavorite ? "In bookmarks" : "To bookmarks"}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getWidthByRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${generatePath(AppRoute.Room, { id })}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
export default OfferCard;
