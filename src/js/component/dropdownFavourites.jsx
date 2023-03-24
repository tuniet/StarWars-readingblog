import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DropdownFav = () => {
	const { store, actions } = useContext(Context);
	
	return(
		<div className="dropdown me-5">
			<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
				Favourites
				<span className="badge badge-light m-2">{store.favorites.length}</span>
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{store.favorites.map((item, index) => {
					return (
						<div key={index} className="dropdown-item">
							<div className="row">
								<Link to={item.url}><div className="col-9">{item.name}</div></Link>
								<div className="col-2">
									<a
										className="badge badge-danger text-white"
										onClick={() => actions.deleteFavorite(index)}>
										<i className="bi bi-trash" />
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</ul>
		</div>
	);
};