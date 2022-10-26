// import React, { useRef, useMemo, useCallback} from "react";
// import { Col, Container, Row, Form, Button } from "react-bootstrap";
// import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
// import { MapContainer, TileLayer } from "react-leaflet";
// import { Marker, DraggableMarker} from "react-leaflet";
// import { Popup } from "react-leaflet";
// import teslaData from "./data/tesla-sites.json";

// const center = {
//   lat: 51.505,
//   lng: -0.09,
// }

// function GoogleMap() {
//   const [draggable, setDraggable] = useState(false)
//   const [position, setPosition] = useState(center)
//   const markerRef = useRef(null)
//   const eventHandlers = useMemo(
//     () => ({
//       dragend() {
//         const marker = markerRef.current
//         if (marker != null) {
//           setPosition(marker.getLatLng())
//         }
//       },
//     }),
//     [],
//   )
//   const toggleDraggable = useCallback(() => {
//     setDraggable((d) => !d)
//   }, [])

//   return (
//     <Marker
//       draggable={draggable}
//       eventHandlers={eventHandlers}
//       position={position}
//       ref={markerRef}>
//       <Popup minWidth={90}>
//         <span onClick={toggleDraggable}>
//           {draggable
//             ? 'Marker is draggable'
//             : 'Click here to make marker draggable'}
//         </span>
//       </Popup>
//     </Marker>
//   );

// }

// render(
//   <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
//     <TileLayer
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     <DraggableMarker />
//   </MapContainer>
// )

// export default GoogleMap;