import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'

export const ItemFavorite = ({item}) => {

    const {store, dispatch} = useGlobalReducer()

    return (
    
        <div className='row'>
            {/* <div className='imagen col-md-4'>
                <img
                    style={{ width: "100px", height: "100px" }}
                    src={item.images[0]}
                    alt={item.name}
                />
            </div> */}

            <div className='col-md-6 text-center'>
                <h1>{item.name}</h1>
                <small>ID: {item.id}</small>
            </div>

            <div className='col-md-2 d-flex align-items-center'>
                <button className='border bg-light'><i className="fa-solid fa-trash" style={{ color: "#f70202;" }}></i></button>
            </div>
        </div>
    )
}

