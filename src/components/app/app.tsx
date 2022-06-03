import MainScreen from "../main-screen/main-screen";
import OfferPage from "../offer-page/offer-page";
import FavoritesPage from "../favorites-page/favorites-page";
import FavoritesPageEmpty from "../favorites-page-empty/favorites-page-empty";
import LoginPage from "../login-page/login-page";
import MainScreenEmpty from "../main-screen-empty/main-screen-empty";
import OfferPageNotLogged from "../offer-page-not-logged/offer-page-not-logged";

type AppScreenProps = {
  cardsCount: number;
};

function App({ cardsCount }: AppScreenProps): JSX.Element {
  return (
    <>
      <MainScreen cardsCount={cardsCount} />
      <OfferPage />
      <FavoritesPage />
      <LoginPage />
      <FavoritesPageEmpty />
      <MainScreenEmpty />
      <OfferPageNotLogged />
    </>
  );
}

export default App;
