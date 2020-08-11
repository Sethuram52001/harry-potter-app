import React from 'react';
import Forms from './FormsCharacter';

const api_key = '$2a$10$UHNOpXzWjg7g2VTELvBbU.LrImDHAKrF18HqgVM.BYY64TTdQx3nW'; 

async function getCharacters(e){
	e.preventDefault();
	//const api_url = `https://www.potterapi.com/v1/characters?key=${api_key}\&name=Albus Dumbledore`;
	const characters = e.target.elements.character.value;
	const api_url = `https://www.potterapi.com/v1/characters?key=${api_key}&name=${characters}`;
	//const data = await fetch(api_url).then(api_call => api_call.json());
	const api_call = await fetch(api_url);
	const data = await api_call.json();
	console.log(data);
	console.log(data[0].name);
	console.log(data[0].role);
	console.log(data[0].bloodStatus);
	console.log(data[0].ministryOfMagic);
	console.log(data[0].orderOfThePhoenix);
	console.log(data[0].dumbledoresArmy);
	console.log(data[0].school);
	console.log(data[0].wand);
	console.log(data[0].house);
}

const Characters = () => {
  return (
    <div>
    	<h1>Characters page</h1>
    	<Forms getCharacters={getCharacters} ></Forms>
    </div>
  )
}

export default Characters;

// const city = e.target.elements.city.value;
/*
    	<button onClick={getCharacters}>click</button>
    	<form onSubmit={getCharacters}>
    		<input type="text" name="nameEnterd" placeholder="Enter the character's name"></input>
    	</form>
*/
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