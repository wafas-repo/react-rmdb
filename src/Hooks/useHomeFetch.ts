import { useState, useEffect } from 'react'

// API
import API, { Movie } from '../API';

import { isPersistedState } from '../helpers';

const initialState = {
    page: 0,
    results: [] as Movie[],
    total_pages: 0,
    total_results: 0,
};

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    console.log(searchTerm)
    
    const fetchMovies = async (page: number, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);
      
            const movies = await API.fetchMovies(searchTerm, page);
      
            setState(prev => ({
              ...movies,
              results:
                page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
          } catch (error) {
            setError(true);
          }
          setLoading(false);
        };

        // initial and search
        useEffect(() => {

            if(!searchTerm) {
              const sessionState = isPersistedState('homeState');

              if (sessionState){
                setState(sessionState);
                return;
              }
            }
            setState(initialState)
            fetchMovies(1, searchTerm)
        }, [searchTerm])

        useEffect(() => {
          if(!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state))
        }, [searchTerm, state])

        // Load More

        useEffect(() => {
            if (!isLoadingMore) return;

            fetchMovies(state.page + 1, searchTerm);
            setIsLoadingMore(false)

        }, [isLoadingMore, searchTerm, state.page])
      
  
    

    return { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore  }
  
}