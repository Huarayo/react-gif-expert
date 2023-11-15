import { useState } from 'react';
import { AddCategory, GifGrid} from './component'; //importando gracias al archivo barril que tiene todo

export const GifExpertApp = () => {

  const [categorias, setCategories] = useState(['Dragon Ball']);

  //hacer una COPIA de Array y agregarle un string
  const onAddCategory = (newCategory) => {
    
    if( categorias.includes(newCategory) ) return; //si ya existe esa categoria que no haga nada
    setCategories([newCategory, ...categorias ])
  }

  return(
    <>
      {/* titulo */}
      <h2>GifExpertApp</h2>
      <hr />

      {/* input */}
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={ (value) => onAddCategory(value) }
      />


      {/* listado de Gif */}

      {
        categorias.map( (category) => (
          
          <GifGrid 
            category={ category }
            key={ category }
          />
            
        ))
      }

      {
        categorias.map( category => {
          return <li key={ category }>{ category }</li>
        })
      }

    </>
  )
}