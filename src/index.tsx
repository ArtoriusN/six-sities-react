import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import { offers } from "./mocks/offers";
import { reviews } from "./mocks/reviews";

const Settings = {
  CARDS_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} reviews={reviews} cardsCount={Settings.CARDS_COUNT} />
  </React.StrictMode>,
  document.getElementById("root")
);
