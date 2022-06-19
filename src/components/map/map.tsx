import { useRef, useEffect } from "react";
import { Icon, Marker } from "leaflet";
import useMap from "../../hooks/useMap";
import { Offers } from "../../types/offers";
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from "../../const";
import "leaflet/dist/leaflet.css";

type MapProps = {
  offers: Offers;
  selectedPoint: undefined;
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

function Map({ offers, selectedPoint }: MapProps): JSX.Element {
  const { city } = offers[0];
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);

  return <div style={{ minHeight: "100%" }} ref={mapRef}></div>;
}

export default Map;
