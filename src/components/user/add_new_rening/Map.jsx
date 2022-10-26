import { MapContainer, TileLayer } from "react-leaflet";
import React, { useEffect, useState } from "react";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import teslaData from "./data/tesla-sites.json";

function Map() {
  const filteredStations = teslaData.filter(
    (tsla) => tsla.address.country === "Sri Lanka"
  );

  return (
    <dev>
      <MapContainer center={ [6.9370782075830855, 79.98362297611264]} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filteredStations.map((tsla) => (
          <Marker
            key={tsla.id}
            position={[tsla.gps.latitude, tsla.gps.longitude]}
          >
            <Popup position={[tsla.gps.latitude, tsla.gps.longitude]}>
                <dev>{"Name: " + tsla.name}</dev>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </dev>
  );
}

export default Map;
