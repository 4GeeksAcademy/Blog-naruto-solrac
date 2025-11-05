import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardKara = ({ kara }) => {

    const { store, dispatch } = useGlobalReducer();

    if (!kara || !kara.images) return null;

    return (
        <div className="col-md-4">
            <Link
                to={`/details/character/${kara.id}`}
                style={{ color: "#ffffffff" }}

            >

                <div className="card my-3">
                    <img
                        src={kara.images[0]}
                        className="card-img-top"
                        alt={kara.name}
                        style={{ objectFit: "cover", objectPosition: "top", height: "300px" }}

                    />

                    <div className="card-body">
                        <h5 className="card-title text-center bg-primary bg-opacity-25 py-2"> {kara.name} </h5>
                    </div>
                    <div className="d-flex justify-content-around my-2">
                        <Link
                            to={`/details/character/${kara.id}`}
                            className="btn btn-success"
                        >
                            Ver mas detalles
                        </Link>


                        <button className="btn btn-ligth">
                            <i className="fa-solid fa-heart" style={{ color: "#fc0303"}}></i>
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};