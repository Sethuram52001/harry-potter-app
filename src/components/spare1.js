/*import React from 'react';
import { useState, useEffect } from 'react';
import Forms from './FormsCharacter';

const api_key = '$2a$10$UHNOpXzWjg7g2VTELvBbU.LrImDHAKrF18HqgVM.BYY64TTdQx3nW'; 

var arr = [];
var array = [];

async function getCharacters(e){
  e.preventDefault();
  arr.length = 0;
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
  array = [1,2,3,4,5];
}

const Characters = () => {

  const [charDetails, setCharDetails] = useState([0]);
  useEffect(() =>{
    //setCharDetails(arr);
    setCharDetails(...array, ...charDetails);

  },[]);

  return (
    <div>
      <h1>Characters page</h1>
      <Forms getCharacters={ getCharacters } ></Forms>
      <p>{charDetails}</p>
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
import React from 'react';

import Forms from './FormsCharacter';

const api_key = '$2a$10$UHNOpXzWjg7g2VTELvBbU.LrImDHAKrF18HqgVM.BYY64TTdQx3nW'; 

var arr = [];

class Characters extends React.Component {

  state = {
    array: [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]
  }

  getCharacters = async (e) => {
    e.preventDefault();
    arr.length = 0;
    //const api_url = `https://www.potterapi.com/v1/characters?key=${api_key}\&name=Albus Dumbledore`;
    const characters = e.target.elements.character.value;
    const api_url = `https://www.potterapi.com/v1/characters?key=${api_key}&name=${characters}`;
    //const data = await fetch(api_url).then(api_call => api_call.json());
    const api_call = await fetch(api_url);
    const data = await api_call.json();
    console.log(data);
    arr.push(data[0].name);
    arr.push(data[0].role);
    arr.push(data[0].alias);
    arr.push(data[0].bloodStatus);
    arr.push(data[0].ministryOfMagic);
    arr.push(data[0].orderOfThePhoenix);
    arr.push(data[0].dumbledoresArmy);
    arr.push(data[0].school);
    arr.push(data[0].wand);
    arr.push(data[0].house);
    arr.push(data[0].patronus);
    arr.push(data[0].boggart);
    arr.push(data[0].deathEater);
    console.log(arr);
    this.setState({
      array: arr 
    });
  };

  render() {
    return (
      <div>
        <h1>Characters page</h1>
          <Forms getCharacters={ this.getCharacters } ></Forms>
          <p>Name: {this.state.array[0]}</p>
          <p>Role: {this.state.array[1]}</p>
          <p>Alias: {this.state.array[2]}</p>
          <p>Blood status: {this.state.array[3]}</p>
          <p>Ministry of Magic: {this.state.array[4]}</p>
          <p>Order of Phoenix: {this.state.array[5]}</p>
          <p>Dumbledore's army: {this.state.array[6]}</p>
          <p>School: {this.state.array[7]}</p>
          <p>Wand: {this.state.array[8]}</p>
          <p>House: {this.state.array[9]}</p>
          <p>Patronus: {this.state.array[10]}</p>
          <p>Boggart: {this.state.array[11]}</p>
          <p>Death eater: {this.state.array[12]}</p>
      </div>
    );
  }
}

export default Characters;

/*const Characters = () => {

  const [charDetails, setCharDetails] = useState([0]);
  useEffect(() =>{
    //setCharDetails(arr);
    setCharDetails(...array, ...charDetails);

  },[]);

  return (
    <div>
      <h1>Characters page</h1>
      <Forms getCharacters={ getCharacters } ></Forms>
      <p>{charDetails}</p>
    </div>
  )
}*/

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