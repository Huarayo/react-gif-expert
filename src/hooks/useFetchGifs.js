import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs.js'

export const useFetchGifs = ( category ) => { // functional component porque no esta retornado jsx
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // tambien puedo usar el then y catch 
  const getImages = async() => {
    try {
      const imgs = await getGifs( category )
      setImages( imgs)
      //cuando dejo de cargar imagenes
      setIsLoading(false)
    } catch(error) {
      console.log(error)
    }
  }

  // ejecutar solo la primera vez
  useEffect(()=> {
      getImages()
  }, [])

  // un hook no es nada mas que una FUNCIÓN que retorna algo
  return {
    images, // explicito shorthand
    isLoading
  }
}

