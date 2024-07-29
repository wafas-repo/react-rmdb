import React from 'react'

import Thumb from '../Thumb/Thumb'

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

import NoImage from '../../images/no_image.jpg';

import { Wrapper, Content, Text } from './MovieInfo.styles';

import { MovieState } from '../../Hooks/useMovieFetch';

type Props = {
  movie: MovieState;
}

const MovieInfo: React.FC<Props> = ({movie}) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : NoImage
                }
                clickable={false}
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>

                <div className='rating-directors'>
                    <div>
                        <h3>
                            RATING
                        </h3>
                        <div className='score'>{Math.round(movie.vote_average * 10) / 10}</div>
                    </div>
                    <div className='director'>
                        <h3>DIRECTOR(S)</h3>
                        {movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}

                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
);

export default MovieInfo