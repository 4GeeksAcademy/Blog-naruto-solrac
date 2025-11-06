import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src={store.logotipo} style={{ height: "75px" }} />
				</Link>
				<div className="ml-auto">

					<button className="btn btn-danger rounded-5" onClick={()=> navigate("/favorites")} style={{ width: "190px" }}>Favoritos</button>

				</div>
			</div>
		</nav>
	);
};