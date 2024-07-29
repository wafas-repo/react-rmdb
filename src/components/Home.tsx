import React from 'react'

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

// Components
import HeroImage from './HeroImage/HeroImage'
import Grid from './Grid/Grid'
import Thumb from './Thumb/Thumb'
import { Spinner } from './Spinner/Spinner.styles'
import SearchBar from './SearchBar/SearchBar'
import Button from './Button/Button'
// Hook
import { useHomeFetch } from '../Hooks/useHomeFetch'

// Image
import noImage from '../images/no_image.jpg'

export const Home: React.FC = () => {
  
  const { state, loading, setSearchTerm, searchTerm, setIsLoadingMore } = useHomeFetch()
  
  console.log('Home',state);

  return (
    <>
        {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm}/>
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
            {state.results.map(movie => (
                <Thumb 
                    key={movie.id}
                    clickable
                    image={
                        movie.poster_path
                          ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                          : noImage
                    }
                    movieId={movie.id}
                />
            ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)} />
      )}  
    </>
    
  )
}
