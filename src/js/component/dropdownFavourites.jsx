import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DropdownFav = () => {
	const { store, actions } = useContext(Context);

    const favourites = store.favourites;
	const removefromFav = (e) =>{
		
	}
	return(
		<div className="dropdown me-5">
			<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
				Favourites
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {favourites.map((favourite, index) => {
                return (
                    <li><Link to="/">Hola</Link><i class="bi bi-trash" onClick={(e) => removefromFav(e)}></i></li>
                )
            })}
			</ul>
		</div>
	);
};