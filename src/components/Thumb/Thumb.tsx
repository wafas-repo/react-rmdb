import React from 'react'
//styles
import { Image } from './Thumb.styles'
import { Link } from 'react-router-dom'

type Props = {
  image: string;
  movieId?: number;
  clickable: boolean;
}

const Thumb: React.FC<Props> = ({ image, movieId, clickable }) => {
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

export default Thumb