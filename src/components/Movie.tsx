import React from 'react'
import { useParams } from 'react-router-dom'

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'

import BreadCrumb from './BreadCrumb/BreadCrumb'
import Grid from './Grid/Grid'
import { Spinner } from './Spinner/Spinner.styles'
import MovieInfo from './MovieInfo/MovieInfo'
import MovieInfoBar from './MovieInfoBar/MovieInfoBar'
import Actor from './Actor/Actor'

import { useMovieFetch } from '../Hooks/useMovieFetch'

import NoImage from '../images/no_image.jpg'

const Movie: React.FC = () => {
  
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(Number(movieId))

if (loading) return <Spinner />
if (error) return <div>Something went wrong...</div>
  return (
    <>
        <div>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar 
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header='Actors'>
                {movie.actors.map(actor => (
                    <Actor 
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage
                        }
                    />
                ))}
            </Grid>

        </div>
    </>
  )
}

export default Movie