import React  from "react";
import image from "../../img/starwars.jpg";
import { useNavigate } from "react-router-dom";

export const CharCard = (props) => {
    const character = props.character

    const navigate = useNavigate();

    const handleclick = (i) => {
        navigate(`/characters/${i}`)

    };
	return(
		<div className="card" style={{width: 18 + "rem"}}>
            <img src={image} className="card-img-top" alt=""></img>
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p>Gender: {character.gender}</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Eye Color: {character.eye_color}</p>
                <div className="d-flex">
                    <button className="btn btn-primary" onClick={(e) => handleclick(props.i)}>Go to page!</button>
                    <button className="btn btn-warning">Add to Favourites</button>
                </div>
            </div>
        </div>
	);
};