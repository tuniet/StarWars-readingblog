import React, { useContext} from "react";
import image from "../../img/starwars.jpg";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetCard = (props) => {
    const planet = props.planet
	const { store, actions } = useContext(Context);

    const navigate = useNavigate();
    const url = "/planets/" + props.i
    const handleclick = (i) => {
        navigate(url)
    };
      
	return(
		<div className="card" style={{width: 18 + "rem"}}>
            <img src={image} className="card-img-top" alt=""></img>
            <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p>Climate: {planet.climate}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Population: {planet.population}</p>
                <div className="d-flex">
                    <button className="btn btn-primary" onClick={(e) => handleclick(props.i)}>Go to page!</button>
                    <button className="btn btn-warning" onClick={(e) => actions.addFavorite(planet.name, url)}>Add to Favourites</button>
                </div> 
            </div>
        </div>
	);
};