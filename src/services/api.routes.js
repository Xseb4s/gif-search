import axios from "axios";
import { gifUrl } from "./apiUrl.routes";

const key = '3775D0KFmC2UUwMiQxmak9HvDEgPAuqP';

export const fetchGifData = async () => {
    try {
      const response = await axios.get(gifUrl, {
        params: {
          api_key: key,
        },
      });
            
      return {
        error:false, 
        data:response.data
      }
    } catch (error) {
      console.error('Error al obtener datos de Giphy:', error);
      return {
        error:true,
        data:error.response
      }
    }
};

export const handleSearch = async ({query}) => {
    try {
      const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: key,
          q: query,
        },
      });

      return {
        error:false, 
        data:response.data
      }

    } catch (error) {
      console.error('Error al realizar la búsqueda en Giphy:', error);
      return {
        error:true,
        data:error.response
        }
    }
};