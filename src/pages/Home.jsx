import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card"
import { useEffect } from "react";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {

		const getCharacters = async (dispatch) => {
			const res = await fetch("https://dattebayo-api.onrender.com/characters")

			const data = await res.json();

			dispatch({ type: "get_characters", payload: data.characters })
		};

		getCharacters(dispatch);

	}, []);

	return (
		<>
			<h1 className="text-center"> Characters</h1>
			<div className="container d-flex gap-3">
				{store.characters.slice(0, 8).map((character) => (
					<Card key={character.id} character={character} />
				))}
			</div>
		</>
	);
};