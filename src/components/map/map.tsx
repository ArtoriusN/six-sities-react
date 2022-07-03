import { useRef, useEffect } from "react";
import { Icon, Marker } from "leaflet";
import useMap from "../../hooks/useMap";
import { Offers, Offer } from "../../types/offers";
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, AppRoute } from "../../const";
import "leaflet/dist/leaflet.css";
import { generatePath, useHistory } from "react-router-dom";

type MapProps = {
  offers: Offers;
  highlightedOffer?: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ offers, highlightedOffer }: MapProps): JSX.Element {
  const { city } = offers[0];
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const history = useHistory();

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      offers.forEach((offer) => {
        const { id, location } = offer;
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker.on("click", () =>
          history.push(generatePath(AppRoute.Room, { id }))
        );
        markers.push(marker);

        marker
          .setIcon(
            offer.id === highlightedOffer?.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
    return () => markers.forEach((marker) => marker.remove());
  }, [map, offers, highlightedOffer, history]);

  return <div style={{ minHeight: "100%" }} ref={mapRef}></div>;
}

export default Map;
