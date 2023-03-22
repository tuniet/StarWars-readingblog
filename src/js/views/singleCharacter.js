import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import image from "../../img/starwars.jpg";
import "../../styles/index.css";

export const SingleCharacter = () => {
	const [character, setCharacter] = useState(null)
	const { characterID } = useParams();

	useEffect(() => {

		const fetchCharacter = async () => {
		  try {
			const response = await fetch(`https://swapi.dev/api/people/${characterID}`);
			const data = await response.json();
			setCharacter(data);
		  } catch (error) {
			console.log(error);
		  }
		};
		fetchCharacter();
	  }, []);

	  return (
		<div>
		  {character ? (
			<div className='mx-3'>
			<div className='d-flex'>
				<img src={image} className="card-img-top" height={"400px"} alt=""></img>
				<div className='ms-5 text-center'>
				<h2>{character.name}</h2>
				<p>Lorem ipsum dolor sit amet. Vel odio harum et ipsam aliquam aut pariatur nulla et quas voluptate ut quia maxime et voluptate voluptatem hic recusandae iste! Eos aspernatur dicta et rerum velit est unde unde. Non debitis rerum est facilis sequi nam quis molestiae eos omnis doloribus.

Aut debitis aspernatur ad voluptas quis et sunt libero et ullam sint At tempora adipisci. Ea libero voluptas a illo quia sit porro omnis ex corrupti perspiciatis ea omnis nulla ea officiis consectetur ab harum iusto. Et iste dolorum qui aliquam explicabo sit dignissimos deleniti qui magnam corporis. Sit maiores voluptatem qui tenetur distinctio et vero sint 33 omnis labore eum facilis quidem et provident dolores qui aliquam voluptas</p>
				</div>	
			</div>
			<hr className='text-danger'></hr>
			  <div className='d-flex justify-content-between'>
				<p className='mx-3'>Birth Year: {character.birth_year}</p>
				<p className='mx-3'>Eye Color: {character.eye_color}</p>
				<p className='mx-3'>Hair Color: {character.hair_color}</p>
				<p className='mx-3'>Height: {character.height}</p>
				<p className='mx-3'>Mass: {character.mass}</p>
			  </div>
			</div>
		  ) : (
			<p>Loading character information...</p>
		  )}
		</div>
	  );
};