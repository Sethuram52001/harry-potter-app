import React from 'react';
import Forms from './FormsSpell';

const api_key = '$2a$10$UHNOpXzWjg7g2VTELvBbU.LrImDHAKrF18HqgVM.BYY64TTdQx3nW';

async function getSpells(e){
	e.preventDefault();
	e.persist();
	const api_url = `https://www.potterapi.com/v1/spells?key=${api_key}`;
	const data = await fetch(api_url).then(api_call => api_call.json());
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

}

const Spells = () => {
  return (
    <div>
    	<Forms getSpells={getSpells} ></Forms>
    </div>
  )
}

export default Spells;

/*
   	<button onClick={getSpells}>click</button>
*/