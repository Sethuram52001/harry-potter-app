import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Forms from './FormsCharacter';

const api_key = '$2a$10$UHNOpXzWjg7g2VTELvBbU.LrImDHAKrF18HqgVM.BYY64TTdQx3nW'; 

const Characters = () => {

	const [charDetails, setCharDetails] = useState([]);
	const click_ref = useRef(null);
	useEffect(() =>{
		async function getCharacters(e){
			e.preventDefault();
			var arr = [];
			//arr.length = 0;
			//const api_url = `https://www.potterapi.com/v1/characters?key=${api_key}\&name=Albus Dumbledore`;
			const characters = e.target.elements.character.value;
			const api_url = `https://www.potterapi.com/v1/characters?key=${api_key}&name=${characters}`;
			//const data = await fetch(api_url).then(api_call => api_call.json());
			const api_call = await fetch(api_url);
			const data = await api_call.json();
			console.log(data);
			arr.push(data[0].name);
			arr.push(data[0].role);
			arr.push(data[0].bloodStatus);
			arr.push(data[0].ministryOfMagic);
			arr.push(data[0].orderOfThePhoenix);
			arr.push(data[0].dumbledoresArmy);
			arr.push(data[0].school);
			arr.push(data[0].wand);
			arr.push(data[0].house);
			console.log(arr);
			setCharDetails(arr);
		}
		click_ref.current = getCharacters;
	},[])

  return (
    <div>
    	<h1>Characters page</h1>
    	<Forms getCharacters={() => click_ref.current()} ></Forms>
    </div>
  )
}

export default Characters;


/*
bloodStatus: "half-blood"
boggart: "Ariana (sister)"
deathEater: false
dumbledoresArmy: false
house: "Gryffindor"
ministryOfMagic: true
name: "Albus Dumbledore"
orderOfThePhoenix: true
patronus: "phoenix"
role: "Headmaster, Hogwarts"
school: "Hogwarts School of Witchcraft and Wizardry"
species: "human"
wand: "Elder, 15", th
*/

/*
	console.log(data[0].name);
	console.log(data[0].role);
	console.log(data[0].bloodStatus);
	console.log(data[0].ministryOfMagic);
	console.log(data[0].orderOfThePhoenix);
	console.log(data[0].dumbledoresArmy);
	console.log(data[0].school);
	console.log(data[0].wand);
	console.log(data[0].house);
*/