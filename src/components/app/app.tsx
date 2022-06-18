import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import PrivateRoute from "../privat-route/privat-route";
import MainScreen from "../main-screen/main-screen";
import OfferPage from "../offer-page/offer-page";
import FavoritesPage from "../favorites-page/favorites-page";
import FavoritesPageEmpty from "../favorites-page-empty/favorites-page-empty";
import LoginPage from "../login-page/login-page";
import MainScreenEmpty from "../main-screen-empty/main-screen-empty";
import OfferPageNotLogged from "../offer-page-not-logged/offer-page-not-logged";
import Page404 from "../page-404/page-404";
import { Offers } from "../../types/offers";
import { Reviews } from "../../types/reviews";

type AppScreenProps = {
  cardsCount: number;
  offers: Offers;
  reviews: Reviews;
};

function App({ cardsCount, offers, reviews }: AppScreenProps): JSX.Element {
  const { Main, Favorites, Room, SignIn } = AppRoute;
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={Main}>
            <MainScreen offers={offers} cardsCount={cardsCount} />
          </Route>

          <Route exact path={Room}>
            <OfferPage offers={offers} reviews={reviews} />
          </Route>

          <PrivateRoute
            exact
            path={Favorites}
            render={() => <FavoritesPage offers={offers} />}
            authorizationStatus={AuthorizationStatus.Auth}
          ></PrivateRoute>
          <Route exact path={SignIn}>
            <LoginPage />
          </Route>

          <Route>
            <Page404 />
          </Route>
          <FavoritesPageEmpty />
          <MainScreenEmpty />
          <OfferPageNotLogged />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
