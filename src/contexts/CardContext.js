import {createContext} from 'react';

export const CardContext = createContext();

export const CardProvider = ({children, info}) => {
  const value = {info};
  return(
    <CardContext.Provider value={value}>{children}</CardContext.Provider>
  );
}
