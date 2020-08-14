import React from 'react';
import {useState,useEffect,useRef} from 'react';
import Forms from './FormsCharacter';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import HarryPotterCharacters from '../images/harry-potter-characters.jpg';
import Image from '../images/hp3.jpg';
import Slide from 'react-reveal/Slide';

const api_key = '$2a$10$UHNOpXzWjg7g2VTELvBbU.LrImDHAKrF18HqgVM.BYY64TTdQx3nW'; 

var arr = [];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300, 
  }
}));

const BackgroundImage = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${Image})`,
  backgroundSize: 'cover',
};

const Characters = () => {

	const click_ref = useRef(null);
	const [array, setArray] = useState([]);
	const classes = useStyles();
	const [name, setName] = useState('');

 	async function getCharacters(e) {
		e.preventDefault();
		arr.length = 0;
		//const api_url = `https://www.potterapi.com/v1/characters?key=${api_key}\&name=Albus Dumbledore`;
		const characters = e.target.elements.character.value;
		const api_url = `https://www.potterapi.com/v1/characters?key=${api_key}&name=${characters}`;
		const data = await fetch(api_url).then(api_call => api_call.json()).catch((error)=>{console.log(error);});
		//const api_call = await fetch(api_url);
		//const data = await api_call.json();
		console.log(data);
		arr.push(data[0].name);
		data[0].role ? arr.push(data[0].role) : arr.push("Not available");
		arr.push(data[0].alias);
		arr.push(data[0].bloodStatus);
		data[0].ministryOfMagic ? arr.push("Member") : arr.push("Not a member");
		data[0].orderOfThePhoenix ? arr.push("Member") : arr.push("Not a member");
		data[0].dumbledoresArmy ? arr.push("Member") : arr.push("Not a member");
		data[0].school ? arr.push(data[0].school) : arr.push("Not available");
		data[0].wand ? arr.push(data[0].wand) : arr.push("Not available");
		data[0].house ? arr.push(data[0].house): arr.push("Not available");
		data[0].patronus ? arr.push(data[0].patronus) : arr.push("Not available");
		data[0].boggart ? arr.push(data[0].boggart) : arr.push("Not available");
		data[0].deathEater ? arr.push("Member") : arr.push("Not a member");
		console.log(arr);
		setArray(arr);
		setName(data[0].name);
 	}

 	click_ref.current = getCharacters; 

  return (
    <div>
    	<h1>Characters page</h1>
    	<div style={ BackgroundImage } className="characters">
    	{/*<div style={ BackgroundImage }>*/}
        {/*<img src={HarryPotterCharacters} />*/}
        <Slide left>
        <Forms getCharacters={ getCharacters } className="character_search" ></Forms>
        </Slide>
        <Slide right>
    	<Card className={classes.root} className="Characters_card">	
    	<p>Name: {name}</p>
    	<p>Role: {array[1]}</p>
    	<p>Alias: {array[2]}</p>
    	<p>Blood status: {array[3]}</p>
    	<p>Ministry of Magic: {array[4]}</p>
    	<p>Order of Phoenix: {array[5]}</p>
    	<p>Dumbledore's army: {array[6]}</p>
    	<p>School: {array[7]}</p>
    	<p>Wand: {array[8]}</p>
    	<p>House: {array[9]}</p>
    	<p>Patronus: {array[10]}</p>
    	<p>Boggart: {array[11]}</p>
    	<p>Death eater: {array[12]}</p>
    	</Card>
    	</Slide>
    	</div>
    </div>
  )
}

export default Characters;



/*
	const [charDetails, setCharDetails] = useState([0]);
	useEffect(() =>{
		//setCharDetails(arr);
		setCharDetails(...array, ...charDetails);
		
	},[]);
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