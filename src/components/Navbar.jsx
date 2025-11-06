import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const {store, dispatch} = useGlobalReducer()
	
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src={store.logotipo} style={{height:"75px"}}/>
				</Link>
				<div className="ml-auto">
					<Link to="#">
						<button className="btn btn-danger rounded-5" style={{width: "190px"}}>Favoritos</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};