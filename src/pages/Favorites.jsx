import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer';
import { ItemFavorite } from '../components/ItemFavorite';

export const Favorites = () => {

  const { store, dispatch } = useGlobalReducer();

  console.log(store.favorites);

  return (
    <div>
      <div className='text-center mt-4'>
        <h1>Tus Favoritos</h1>
      </div>
      <div className=' container my-5 py-1'>
        {store.favorites && store.favorites.length > 0 ? (
          store.favorites.map((item) => (
            <ItemFavorite key={item.id} item={item} />
          ))
        ) : (
          <h1 className='text-center'>No tienes aún favoritos.</h1>
        )}
      </div>
    </div>
  )
}
