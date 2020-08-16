import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Image from '../images/the-wizarding-world-of-harry-potter.png';
import HogwartsImage from '../images/hogwarts.jpg';
import hogwartsimage from '../images/hp.jpg';
import harryImage from '../images/harry.jpg';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import useMediaQuery from '@material-ui/core/useMediaQuery';

/*const BackgroundImage = {
  width: "100%",
  height: "900px",
  backgroundImage: `url(${HogwartsImage})`,
  backgroundSize: 'cover',
  margin: "0",
};*/

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300, 
  },
  image: {
  width: "100%",
  height: "900px",
  [theme.breakpoints.up('lg')]:{backgroundImage: `url(${HogwartsImage})`},
  [theme.breakpoints.down('md')]:{
    backgroundImage: `url(${harryImage})`,
    width: "100%",
  },
  backgroundSize: 'cover',
  margin: "0",    
  }
}));

const Home = () => {

	const [show, setShow] = useState(false);
	const [msg, setMsg] = useState("Show");
	const click_ref = useRef(null);
	const classes = useStyles();

	useEffect(()=>{
		function handleClick(){
		console.log({show});
		if(show === false){
			setShow(true);
			setMsg("Hide");
		}
		else{
			setShow(false);
			setMsg("Show");
		}
	}
	click_ref.current = handleClick;
	});


  return (
    <div>
    	<h1>
    		<img className="home-header-image" src={Image} />
    	</h1>
    	<div className="home-background-image" className={classes.image}>{/*style= {{backgroundImage: `url(${HogwartsImage})`}} style= {BackgroundImage}*/}
    	<LightSpeed left opposite when={show}>
    		<Card className={classes.root} className="home-intro" >
    		<p>Welcome to my tiny little piece of Wizarding World of Harry Potter!</p>
    		<p>In short, Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.
    	   	   The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley,
    	   	   all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle
    	       against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as
    	       the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).</p>
    	    <p>So feel free to explore the other pages over here!</p>
    		</Card>
        </LightSpeed>
        <button
          className="btn btn-success my-5"
          type="button"
          onClick={() => click_ref.current()}
        >
          { msg } Message
        </button>
    	</div>
    </div>
  )
}

export default Home;


