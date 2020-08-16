import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Forms from './FormsSpell';
import Image from '../images/hp6.jpg';
import hpBackground from '../images/hp-background1.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const api_key = '$2a$10$UHNOpXzWjg7g2VTELvBbU.LrImDHAKrF18HqgVM.BYY64TTdQx3nW';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300, 
  },
  image: { 
  width: "100%",
  height: "720px",
  padding: "5%",
  [theme.breakpoints.up('lg')]:{backgroundImage: `url(${Image})`},
  [theme.breakpoints.down('md')]:{
    backgroundImage: `url(${hpBackground})`,
    width: "100%",
  },
  backgroundSize: 'cover',  
  }
}));


const Spells = () => {

	const click_ref = useRef(null);
	const [spellName, setSpellName] = useState('');
	const [spellType, setSpellType] = useState('');
	const [spellEffect, setSpellEffect] = useState('');
	const [spellCard, setSpellCard] = useState(false);
	const classes = useStyles();

	async function getSpells(e){
		e.preventDefault();
		e.persist();
		const api_url = `https://www.potterapi.com/v1/spells?key=${api_key}`;
		const data = await fetch(api_url).then(api_call => api_call.json()).catch((error) => {console.log(error);});
		console.log(data[0]);
		var arr = [];
		for (var i = 0; i < data.length; i++) {
			var temp = data[i].spell;
			arr.push(temp);
		}
		console.log(arr);
		//console.log(arr.indexOf('Avada Kedavra'));
		//const index = arr.indexOf('Avada Kedavra');
		const spellName = e.target.elements.spell.value;
		const index = arr.indexOf(spellName);
		console.log(data[index].spell);
		console.log(data[index].type);
		console.log(data[index].effect);
		setSpellName(data[index].spell);
		setSpellType(data[index].type);
		setSpellEffect(data[index].effect)
	}

	click_ref.current = getSpells;

  return (
    <div>
    	<h1>Spells</h1>
    	<div className="spells" className={classes.image}>{/*style={BackgroundImage}*/}
    	<Fade right>
    	<Forms getSpells={getSpells} className="spell-search" ></Forms>
    	</Fade>
    	<Fade left >
    	<Card className={classes.root} className="Spells_card">
    	<p>Spell: {spellName}</p>
    	<p>Type: {spellType}</p>
    	<p>Effect: {spellEffect}</p>
    	</Card>
    	</Fade>
    	</div>
    </div>
  )
}

export default Spells;

/*
   	<button onClick={getSpells}>click</button>
*/


/*const BackgroundImage = {
  width: "100%",
  height: "720px",
  backgroundImage: `url(${Image})`,
  backgroundSize: 'cover',
};*/