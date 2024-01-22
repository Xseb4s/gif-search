/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import {fetchGifData} from '../services/api.routes';

export const GifContext = createContext()

export const GifProvider = ({children}) => {

    const [gifData, setGifData] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await fetchGifData();
          if (!result.error) {
            setGifData(result.data.data);
          } else {
            console.error('Error al obtener datos de Giphy:', result.error);
          }
        };
    
        fetchData();
      }, []);
      
  return(
    <>
        <GifContext.Provider value={{
            gifData
        }}>
            {children}
        </GifContext.Provider>
    </>
)
}