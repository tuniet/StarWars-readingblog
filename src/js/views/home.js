import React, {useState} from "react";
import "../../styles/index.css";
import { PlanetCard } from "../component/planetCard.jsx";
import { CharCard } from "../component/characterCard.jsx";

export const Home = () => {
	const [planets, setPlanets] = useState([]);
	const [characters, setCharacters] = useState([]);
	
	const fetchPlanets = async (url) => {
		fetch(url)
		.then(response => response.json())
		.then(data => setPlanets(data.results))
		.catch(error => console.error(error));
	}

	const fetchCharacters = (url) => {
		fetch(url)
		.then(response => response.json())
		.then(data => setCharacters(data.results))
		.catch(error => console.error(error));
	}

	React.useEffect(() => {
		fetchPlanets("https://swapi.dev/api/planets/");
		fetchCharacters("https://swapi.dev/api/people/");
	}, []);

	
	return(
	<div className="mt-5">
		<div className="ms-3">
			<h2>Characters</h2>
			<div className="scrolling-wrapper">
				{characters.map((character, index) => (
                	<CharCard key={character.name} character={character} i={index + 1}/>
            	))}
			</div>
		</div>
		<div className="ms-3 my-5"> 
			<h2>Planets</h2>
			<div className="scrolling-wrapper">
				{planets.map((planet, index) => (
                	<PlanetCard key={planet.name} planet={planet} i={index + 1}/>
            	))}
			</div>
		</div>
	</div>
	)
};
