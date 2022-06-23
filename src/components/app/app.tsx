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
import { Reviews } from "../../types/reviews";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../../types/state";

type AppScreenProps = {
  reviews: Reviews;
};

const mapStateToProps = ({ offers }: State) => ({
  offers,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = AppScreenProps & PropsFromRedux;

function App({ offers, reviews }: ConnectedComponentProps): JSX.Element {
  const { Main, Favorites, Room, SignIn } = AppRoute;
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={Main}>
            <MainScreen offers={offers} />
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

export default connector(App);
