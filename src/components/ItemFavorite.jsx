import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'

export const ItemFavorite = ({ item }) => {

    const { store, dispatch } = useGlobalReducer()

    const removeFav = (id) => {
        dispatch({ type: 'remove_favorites', payload: id })
    }

    return (

        <div className='row my-3 border  bg-secondary bg-opacity-25 py-4'>
            <div className='imagen col-md-2'>
                <img
                    style={{ objectFit:"cover" , objectPosition:"top", width:"160px", height:"160px" }}
                    src={item.images[0]}
                    alt={item.name}
                />
            </div>

            <div className='col-md-8'>
                <h1 className='bg-warning'>{item.name}</h1>
                <small className='bg-light'>ID: {item.id}</small>
            </div>

            <div className='col-md-2 d-flex justify-content-end align-items-center'>
                <button className="bg-secondary bg-opacity-25 border" onClick={()=> removeFav(item.id)}>
                    <i className="fa-solid fa-trash" style={{color:"rgba(253, 10, 10, 1)"}}></i>
                </button>
            </div>
        </div>
    )
}

