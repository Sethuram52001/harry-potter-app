import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import sorting_hat_img from '../images/sorting-hat-1.jpg';
import Sorting_hall from '../Sorting_hall.jpg';
import Image from '../images/original.jpg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

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
  height: "800px",
  backgroundImage: `url(${ Image })`,
  backgroundSize: 'cover',
};

const SortingHat = () => {

	const classes = useStyles();
	const click_ref = useRef(null);
	const [house, setHouse] = useState("");
  const [houseset, setHouseset] = useState(false);
	const arguement_description = 'Slytherin';

	useEffect(() =>{
		async function getHouse(){
			const data = await fetch(api_url).then(api_call => api_call.json());
			setHouse(data.toLocaleString());
      setHouseset(true);
		}
		click_ref.current = getHouse;
	},[])

  return (
    <div>
        <h1>Sorting Hat</h1>
        <div style={ BackgroundImage }>
        <Card className="sortingHat-intro">
        <p>Sorting Hat : Hmm, difficult. VERY difficult. Plenty of courage, I see. Not a bad mind, either. There's talent, oh yes. And a thirst to prove yourself. But where to put you?</p>
        <p>Harry : Not Slytherin. Not Slytherin.</p>
        <p>Sorting Hat : Not Slytherin, eh? Are you sure? You could be great, you know. It's all here in your head. And Slytherin will help you on the way to greatness, there's no doubt about that. No?</p>
        <p>Harry : Please, please. Anything but Slytherin, anything but Slytherin.</p>
        <p>Sorting Hat : Well if you're sure, better be... GRYFF! But a wait minute you are the chosen one to beat the Slytherin, and you carry a part of his soul. And if you're sorted into Slytherin, Severus may treat you a little better, so better be a SLYTHERIN!!</p>
        </Card>
        <Card className="sortingHat-intro">
        <p>Sortin Hat : So, what's up with you? You seem very excited to get started with your journey in Hogwarts!!</p>
        </Card>
    	  <Box>
    		<Button variant="contained" className="sortButton"  className={`${classes.buttonStyle}`} onClick={() => click_ref.current()}>
    			Sort
    		</Button>
    	  </Box>
        <Zoom right when={houseset}>
        <Card className="sortingHat-card">
    	   <p>Better be... {house} !!!</p>
        </Card>
        </Zoom>
        </div>
    </div>
  )
}

export default SortingHat;

