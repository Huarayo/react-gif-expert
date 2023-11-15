import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {
  
  // console.log({ id, title, url});

  return (
      <figure className="card">
        <img src={ url } alt={ title } />
        <figcaption>{ title }</figcaption>
      </figure>
  )
}

GifGridItem.propTypes = {
  id: PropTypes.string,
  title:PropTypes.string,
  url:PropTypes.string
}
