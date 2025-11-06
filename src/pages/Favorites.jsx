import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer';

export const Favorites = () => {

    const { store, dispatch } = useGlobalReducer();
    console.log(store.favorites);
    
  return (
    <div>
      <p>soy Favoritos</p>
      {/* mapear favoritos */}
    </div>
  )
}
