import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet"
import osm from "./osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";

const BasicMap = () => {
    const position = [51.505, -0.09]

    return(
      <dev className="map">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
      </dev>
    )
};

export default BasicMap;