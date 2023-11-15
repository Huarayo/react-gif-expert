import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


// category: array con nombre de la serie de animes favoritos
export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category )

  console.log({images, isLoading})
  
  //RETORNAR los valores obtenidos y filtrados 
  return (
    <>
      <h3>{ category }</h3>
      {

        isLoading && ( <h2>Cargando...</h2> )

        // isLoading
        // ? (<h2>Cargando...</h2>)
        // : null
      }
      <section className="card-grid">
        {
          images.map( img => (
            <GifGridItem 
              key={ img.id }
              { ...img } //pasando las propiedades necesarias
            /> 
          ))
        }
      </section>


      
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
