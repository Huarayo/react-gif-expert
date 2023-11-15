

/* 
  Custom Hook: un hook que yo voy a crear desde cero
  Ventajas de Custom Hooks:

    -Reutilización de Lógica: Permite encapsular y reutilizar lógica de componentes en múltiples lugares.
    -Mantenimiento Simplificado: Facilita el mantenimiento al centralizar la lógica en un solo lugar.
    -DRY (Don't Repeat Yourself): Evita la repetición de código al compartir funcionalidades comunes.
  Desventajas de Custom Hooks:
    -Complejidad Potencial: Puede aumentar la complejidad si no se utiliza de manera adecuada.
    -Posible Abstracción Excesiva: En algunos casos, la creación de muchos hooks personalizados puede llevar a una abstracción excesiva.
    -Curva de Aprendizaje: Puede haber una curva de aprendizaje al entender y gestionar hooks personalizados correctamente.

*/

export const getGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=bhItS5xrL4KgtAADk5Hx6ypuh6uBvdD0&q=${ category }&limit=10`;
  const resp = await fetch(url);
  const { data }  = await resp.json();//extraigo la data del json porque sino pondria "data.data.map"
  
  const gifs = await data.map( img => {
    return {
      id: img.id,
      title: img.title,
      //acceder a propiedades de objetos de manera segura para evitar errores(Si una propiedad es nula o indefinida) y lanzar un undefined
      url: img.images?.downsized_medium.url//si tiene la images (operador de encadenamiento opcional)
    }
  })

  return gifs

}

