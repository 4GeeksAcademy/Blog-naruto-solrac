import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card"
import { useEffect } from "react";
import { CardAkatsuki } from "../components/CardAkatsuki";
import { CardKara } from "../components/CardKara.jsx";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {

		const getCharacters = async (dispatch) => {
			const res = await fetch("https://dattebayo-api.onrender.com/characters")

			const data = await res.json();

			dispatch({ type: "get_characters", payload: data.characters })
		};

		getCharacters(dispatch);

		const getAkatsukis = async (dispatch) => {
			const response = await fetch("https://dattebayo-api.onrender.com/akatsuki")

			const data = await response.json();

			dispatch({ type: 'get_akatsukis', payload: data.akatsuki })
		};

		getAkatsukis(dispatch);

		const getKaras = async (dispatch) => {
			const response = await fetch("https://dattebayo-api.onrender.com/kara")

			const data = await response.json();

			dispatch({ type: 'get_karas', payload: data.kara })
		}

		getKaras(dispatch)

	}, []);

	return (
		<>
			<h1 className="container text-center bg-success bg-gradient bg-opacity-75 rounded-5 my-4 py-3"> Personajes</h1>
			<div className="container">
				<div className="row">
					{store.characters.slice(0, 8).map((character) => (
						<Card key={character.id} character={character} />
					))}
				</div>
			</div>

			<h1 className="container text-center bg-dark bg-gradient bg-opacity-75 rounded-5 my-4 py-3"> Personajes de Akatsukis</h1>
			<div className="container">
				<div className="row">
					{store.akatsukis.slice(0, 8).map((akat) => (
						<CardAkatsuki key={akat.id} akat={akat} />
					))}
				</div>
			</div>

			<h1 
			className="container text-center bg-secondary bg-gradient bg-opacity-50 rounded-5 my-4 py-3"> Organización Kara</h1>
			<div className="container">
				<div className="row">
					{store.karas.slice(0, 8).map((kara) => (
						<CardKara key={kara.id} kara={kara} />
					))}
				</div>
			</div>
		</>
	);
};