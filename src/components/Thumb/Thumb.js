import React from 'react'
//styles
import { Image } from './Thumb.styles'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <div>
        {clickable ? (
          <Link to={`/${movieId}`}><Image src={image} alt='movie-thumb' /></Link>
        ) : (
          <Image src={image} alt='movie-thumb' />
        )}    
    </div>
  )
}

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,

}

export default Thumb