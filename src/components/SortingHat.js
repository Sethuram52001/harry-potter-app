import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import sorting_hat_img from '../images/sorting-hat-1.jpg';
import Sorting_hall from '../Sorting_hall.jpg';
import Image from '../images/hp4.png';

const api_url = `https://www.potterapi.com/v1/sortingHat`;

const useStyles = makeStyles((theme) => ({
	buttonStyle: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

const BackgroundImage = {
  width: "100%",
  height: "720px",
  backgroundImage: `url(${ sorting_hat_img })`,
  backgroundSize: 'cover',
};

const SortingHat = () => {

	const classes = useStyles();
	const click_ref = useRef(null);
	const [house, setHouse] = useState("");
	const arguement_description = 'Slytherin';

	useEffect(() =>{
		async function getHouse(){
			const data = await fetch(api_url).then(api_call => api_call.json());
			setHouse(data.toLocaleString());
		}
		click_ref.current = getHouse;
	},[])

  return (
    <div>
        <h1>Sorting Hat</h1>
        <div style={ BackgroundImage }>
    	{/*<img className="sorting_hat_img" src={sorting_hat_img} alt="sorting hat" />*/}
    	<Box>
    		<Button variant="contained" className="sortButton"  className={`${classes.buttonStyle}`} onClick={() => click_ref.current()}>
    			Sort
    		</Button>
    	</Box>
    	<p>{house}</p>
        </div>
    </div>
  )
}

export default SortingHat;

/*
        <AppBar>
            <Typography variant="h3" align="center" color="inherit">
                Scroll to Hide App Bar
            </Typography>
        </AppBar>
*/

/*
var a= ["Or perhaps in Slytherin", "You’ll make your real friends", "Those cunning folk use any means", "To achieve their ends."];

function description(arguement_description){
	if(arguement_description === "Slytherin")
	{
		return a;
	}
}
*/

/*
async function gethouse(){ 
	const data = await fetch(api_url).then(api_call => api_call.json());
	console.log(data.toLocaleString());
}

<button onClick={gethouse}>click</button>
*/