import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

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

    const data =
        type === "character"
            ? store.characterDetail
            : type === "akatsuki"
                ? store.akatsukiDetail
                : type === "tailedbeast"
                    ? store.tailedbeastDetail
                    : null;

    if (!data) return <p className="text-center mt-5">Upload characters...</p>;

    return (

        <div className="container my-5 pt-5 d-flex justify-content-center">
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
                    <div
                        className="w-100 text-white text-center py-2 rounded"
                    >
                        Clan
                    </div>
                    <div className="ps-3 pt-2" style={{ color: "#222" }}>
                        {data.personal?.clan || "Unknown"}
                    </div>
                </div>

                <div className="mb-3">
                    <div
                        className="w-100 text-white text-center py-2 rounded"
                    >
                        Family
                    </div>
                    <ul className="list-unstyled ps-3 pt-2">
                        {data.family && typeof data.family === "object" ? (
                            Object.entries(data.family).map(([key, value], i) => (
                                <li key={i}>
                                    <strong style={{ color: "#ff6600" }}>{key}:</strong>{" "}
                                    <span style={{ color: "#333" }}>{value}</span>
                                </li>
                            ))
                        ) : (
                            <li>Orphan</li>
                        )}
                    </ul>
                </div>

                <div className="mb-3">
                    <div
                        className="w-100 text-white text-center py-2 rounded"
                    >
                        Jutsus
                    </div>
                    <div className="ps-3 pt-2">
                        {Array.isArray(data.jutsu) && data.jutsu.length > 0
                            ? data.jutsu.slice(0, 10).map((jutsus, i) => (
                                <div key={i} style={{ color: "#cc3300" }}>
                                    - {jutsus}
                                </div>
                            ))
                            : "Don't have"}
                    </div>
                </div>
            </div>
        </div>
    );

};