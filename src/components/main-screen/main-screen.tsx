import OfferList from "../offer-list/offer-list";
import { Offers } from "../../types/offers";
import Map from "../map/map";
import LocationList from "../location-list/location-list";
import { CITIES } from "../../const";
import { State } from "../../types/state";
import { connect, ConnectedProps } from "react-redux";
import MainScreenEmpty from "../main-screen-empty/main-screen-empty";
import Header from "../header/header";
import SortOptions from "../sort-options/sort-options";
import { Sort } from "../../utils";
import useHighlightedOffer from "../../hooks/useHightailedOffer";

type MainScreenProps = {
  offers: Offers;
};

const mapStateToProps = ({ selectedCity, currentSort }: State) => ({
  selectedCity,
  currentSort,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = MainScreenProps & PropsFromRedux;

const getOffersInCity = (offers: Offers, cityName: string) =>
  offers.filter((offer) => offer.city.name === cityName);

function MainScreen({
  offers,
  selectedCity,
  currentSort,
}: ConnectedComponentProps): JSX.Element {
  const sortedOffers = Sort[currentSort](offers);
  const offersInCity = getOffersInCity(sortedOffers, selectedCity);
  const [highlightedOffer, onChangeHighlightedOffer] =
    useHighlightedOffer(offersInCity);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList cityNames={CITIES} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {offersInCity.length ? (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offersInCity.length} places to stay in {selectedCity}
                </b>
                <SortOptions />
                <div className="cities__places-list places__list tabs__content">
                  <OfferList
                    offers={offersInCity}
                    className="cities__place-card"
                    imageClassName="cities__image-wrapper"
                    imageWidth={260}
                    imageHeight={200}
                    onChangeHighlightedOffer={onChangeHighlightedOffer}
                  />
                </div>
              </section>
            ) : (
              <MainScreenEmpty />
            )}
            <div className="cities__right-section">
              {offersInCity.length ? (
                <section className="cities__map map">
                  <Map
                    offers={offersInCity}
                    highlightedOffer={highlightedOffer}
                  />
                </section>
              ) : null}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default connector(MainScreen);
