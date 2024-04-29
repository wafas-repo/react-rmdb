import React, {useState, useEffect} from 'react'

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

// Components
import HeroImage from './HeroImage/HeroImage'
import Grid from './Grid/Grid'
// Hook
import { useHomeFetch } from '../Hooks/useHomeFetch'

// Image
import noImage from '../images/no_image.jpg'

export const Home = () => {
  
  const { state, loading, error } = useHomeFetch()
  
  console.log('Home',state);

  return (
    <>
        {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <Grid header='Popular Movies'>
            {state.results.map(movie => (
                <div key={movie.id}>{movie.title}</div>
            ))}
      </Grid>
   
        
    </>
    
  )
}
