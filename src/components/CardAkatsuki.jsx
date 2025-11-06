import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardAkatsuki = ({ akat }) => {

    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate()

    if (!akat || !akat.images) return null;

    const addFavorites = (name, id, imagen) => {
        dispatch({ type: 'set_favorites', payload: { "name": name, "id": id, "images": imagen } })
        navigate("/favorites")
    }

    return (
        <div className="col-md-4">
            <Link
                to={`/details/character/${akat.id}`}
                style={{ color: "#ffffffff" }}
            />

            <div className="card my-3">
                <img
                    src={akat.images[0]}
                    className="card-img-top"
                    alt={akat.name}
                    style={{ objectFit: "cover", objectPosition: "top", height: "300px" }}
                />

                <div className="card-body">
                    <h5 className="card-title text-center bg-primary bg-opacity-25 py-2"> {akat.name} </h5>
                </div>
                <div className="d-flex justify-content-around my-2">
                    <Link
                        to={`/details/character/${akat.id}`}
                        className="btn btn-success"
                    >
                        Ver mas detalles
                    </Link>


                    <button className="btn btn-danger" onClick={() => addFavorites(akat.name, akat.id, akat.images)}>
                       Add Fav <i className="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>

        </div>
    );
};