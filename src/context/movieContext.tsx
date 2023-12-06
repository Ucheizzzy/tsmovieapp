import React, { ReactNode, createContext, useReducer, useContext } from 'react'
import { MovieDataType, moviesData } from '../assets/data'

interface MovieContextProps {
  children: ReactNode
}

interface MovieState {
  Movies: MovieDataType[]
}

interface MovieAction {
  type: string
  id: string
}

const reducer = (state: MovieState, action: MovieAction): MovieState => {
  switch (action.type) {
    case 'TOGGLE BOOKMARK':
      return {
        ...state,
        Movies: state.Movies.map((movie) => {
          console.log(movie)

          if (movie.id === action.id)
            return { ...movie, isBookmarked: !movie.isBookmarked }
          return movie
        }),
      }

    default:
      return state
  }
}

const MoviesList: MovieDataType[] = moviesData
const initialMovieState = {
  Movies: MoviesList,
}

export const MovieContext = createContext<{
  state: MovieState
  dispatch: React.Dispatch<MovieAction>
}>({ state: initialMovieState, dispatch: () => {} })

export const MovieProvider = ({ children }: MovieContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialMovieState)
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  )
}

//create custom hook
export const useMovieContext = () => useContext(MovieContext)
