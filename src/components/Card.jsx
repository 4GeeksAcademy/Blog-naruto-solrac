import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = ({ character }) => {

    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate()

    if (!character || !character.images) return null;

    const addFavorites = (name, id, imagen) => {
        dispatch({ type: 'set_favorites', payload: { "name": name, "id": id, "images": imagen} })
        navigate("/favorites")
    }

    return (
        <div className="col-md-4">
            <div className="card my-3">
                <img
                    src={character.images[0]}
                    className="card-img-top"
                    alt={character.name}
                />

                <div className="card-body">
                    <h5 className="card-title text-center bg-primary bg-opacity-25 py-2"> {character.name} </h5>
                </div>
                <div className="d-flex justify-content-around my-2">
                    <Link
                        to={`/details/character/${character.id}`}
                        className="btn btn-success"
                    >
                        Ver mas detalles
                    </Link>
                    <button className="btn btn-danger" onClick={() => addFavorites(character.name, character.id, character.images)}>
                        Add Fav <i className="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </div >
    );
};