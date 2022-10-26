import React, { useContext } from 'react';
import { useState } from 'react';

const HomePagePlacesContext = React.createContext(null);

export function useHomePagePlaces() {
  return useContext(HomePagePlacesContext);
}

export function HomePagePlacesProvider({ children }) {
  const [homePagePlaces, setHomePagePlaces] = useState([]);
  const [homePagePlacesStatic, setHomePagePlacesStatic] = useState([]);

 
  const value = {
    homePagePlaces,setHomePagePlaces, homePagePlacesStatic, setHomePagePlacesStatic
  };
  return <HomePagePlacesContext.Provider value={value}>{children}</HomePagePlacesContext.Provider>;
}