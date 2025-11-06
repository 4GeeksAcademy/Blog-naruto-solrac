import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { array } from "prop-types";

export const SingleView = () => {

    const { type, id } = useParams();
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        if (type === "character") {
            const getCharacterById = async (id) => {

                const res = await fetch(`https://dattebayo-api.onrender.com/characters/${id}`);

                const data = await res.json();

                dispatch({ type: "get_character_id", payload: data })
            }

            getCharacterById(id)
        }

    }, [type, id, dispatch])




    useEffect(() => {
        if (type === "akatsuki") {
            const getAkatsukiById = async (id) => {

                const response = await fetch(`https://dattebayo-api.onrender.com/akatsuki/${id}`)

                const data = await response.json();

                dispatch({ type: 'get_akatsuki_id', payload: data.akatsuki })
            }

            getAkatsukiById(id)
        }

                if (type === "kara") {
            const getKaraById = async (id) => {

                const response = await fetch(`https://dattebayo-api.onrender.com/kara/${id}`)

                const data = await response.json();

                dispatch({ type: 'get_kara_id', payload: data.kara })
            }

            getKaraById(id)
        }

    }, [type, id, dispatch])

    const data =
        type === "character"
            ? store.characterDetail
            : type === "akatsuki"
                ? store.akatsukiDetail
                : type === "tailedbeast"
                    ? store.tailedbeastDetail
                    : null;

    if (!data) return <p className="text-center mt-5">Subir información...</p>;

    return (

        <div className="container my-5 pt-5 d-flex justify-content-center bg-secondary bg-opacity-25">
            <div
                className="p-4 shadow-lg w-100"
            >
                <h2 className="text-center mb-4">
                    {data.name}
                </h2>

                <div className="text-center">
                    <img
                        src={data.images?.[0]}
                        alt={data.name}
                        className="img-fluid mb-4 rounded"
                    />
                </div>

                <div className="mb-3">
                    <div className=" ps-3 w-100 text-dark py-2 rounded">
                        <h4>Clan:</h4>
                    </div>
                    <div className="ps-3 pt-2 rounded-5 bg-light bg-opacity-75" style={{ color: "#222" }}>
                        <strong>{data.personal?.clan || data.personal?.species || "Unknown"}</strong>
                    </div>
                </div>

                <div className="mb-3">
                    <div className=" ps-3 w-100 text-dark py-2 rounded">
                        <h4>Familia:</h4>
                    </div>
                    <ul className="list-unstyled ps-3 pt-1 rounded-5 bg-light bg-opacity-75">
                        {data.family && typeof data.family === "object" ? (
                            Object.entries(data.family).map(([key, value], i) => (
                                <li key={i}>
                                    <strong style={{ color: "#ff6600" }}>{key}:</strong>{" "}
                                    <span style={{ color: "#333" }}>{value}</span>
                                </li>
                            ))
                        ) : (
                            <li><strong>HUÉRFANO</strong></li>
                        )}
                    </ul>
                </div>

                <div className="mb-3">
                    <div className="ps-3 w-100 text-dark py-2 rounded">
                        <h4>Jutsus:</h4>
                    </div>
                    <div className="ps-3 pt-1 rounded-5 bg-light bg-opacity-75">
                        {Array.isArray(data.jutsu) && data.jutsu.length > 0
                            ? data.jutsu.slice(0, 10).map((jutsus, i) => (
                                <div key={i} style={{ color: "#2485cbff" }}>
                                    {jutsus}
                                </div>
                            ))
                            : <strong>NO TIENE.</strong>}
                    </div>
                </div>

                <div className="mb-3">
                    <div className="ps-3 w-100 text-dark py-2 rounded">
                        <h4>Tipo de naturaleza:</h4>
                    </div>
                    <div className="ps-3 pt-1 rounded-5 bg-light bg-opacity-75">
                        {Array.isArray(data.natureType) && data.natureType.length > 0
                            ? data.natureType.slice(0, 10).map((type, i) => (
                                <div key={i} style={{ color: "#2485cbff" }}>
                                    {type}
                                </div>
                            ))
                            : <strong>NO TIENE.</strong>}
                    </div>
                </div>
            </div>
        </div>
    );

};