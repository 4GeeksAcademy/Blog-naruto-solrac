import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = ({character}) => {

    const { store, dispatch } = useGlobalReducer();

    if (!character || !character.images) return null;

    return (
        <div>
            <Link
                to={`/details/character/${character.id}`}
            >

                <div className="card">
                    <img 
                        src={character.images[0]} 
                        className="card-img-top"
                        alt={character.name} 
                    />

                    <div className="card-body">
                        <h5 className="card-title"> {character.name} </h5>

                        <Link
                            to={`/details/character/${character.id}`}
                            className="btn btn-success"
                        >
                            View Details
                        </Link>
                    </div>

                    <button>
                        Fav
                    </button>
                </div>
            </Link>
        </div>
    );
};