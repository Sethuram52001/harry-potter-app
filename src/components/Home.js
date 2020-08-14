import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Image from '../images/the-wizarding-world-of-harry-potter.png';
import HogwartsImage from '../images/hogwarts.jpg';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';

const BackgroundImage = {
  width: "100%",
  height: "900px",
  backgroundImage: `url(${HogwartsImage})`,
  backgroundSize: 'cover',
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300, 
  }
}));

const Home = () => {

	const classes = useStyles();
	const [ click, setClick ] = useState(true);

	function handleClick() {
    	//({click}) ? setClick(false) :setClick(true);
    	if({click} === true)
    		setClick(false);
    	else if({click} === false)
    		setClick(true);
    	console.log({click});
  	}

  return (
    <div>
    	<h1>
    		<img className="home-header" src={Image} />
    	</h1>
    	<div style={BackgroundImage} className="home-background-image">
    	<Fade left >
    	<Card className={classes.root} className="home-intro" >
    	<p>Welcome to my tiny little piece of Wizarding World of Harry Potter!</p>
    	<p>In short, Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.
    	   The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley,
    	   all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle
    	   against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as
    	   the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).</p>
    	<p>So feel free to explore the other pages over here!</p>
    	</Card>
    	</Fade>
    	</div>
    	<LightSpeed left opposite when={click}>
        	<h1>React Reveal</h1>
        </LightSpeed>
        <button
          className="btn btn-success my-5"
          type="button"
          onClick={handleClick}
        >
          { {click} ? 'Hide' : 'Show' } Message
        </button>
    </div>
  )
}

export default Home;

/*
import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';

class LightSpeedExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <LightSpeed left opposite when={this.state.show}>
          <h1>React Reveal</h1>
        </LightSpeed>
        <button
          className="btn btn-success my-5"
          type="button"
          onClick={this.handleClick}
        >
          { this.state.show ? 'Hide' : 'Show' } Message
        </button>
      </div>
    );
  }
}

export default LightSpeedExample;
*/