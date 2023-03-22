import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { DropdownFav } from "./dropdownFavourites.jsx";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="ms-5" src={logo} width="100px"></img>
			</Link>
			<div className="ml-auto">
				<DropdownFav />
			</div>
		</nav>
	);
};
