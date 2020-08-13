import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';
import GryffindorImg from '../images/gryffindor_img.jpg';
import RavenclawImg from '../images/ravenclaw_img.jpg';
import HufflepuffImg from '../images/hufflepuff_img.jpg';
import SlytherinImg from '../images/slytherin_img.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300, 
  },
  media: {
    height: 200,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const Houses = () => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
    	<h1 className="Houses_title">Hogwarts Houses</h1>
    	<h2 className="Houses_subtitle">House systems</h2>
      <Card className="Houses_intro">
    	<p>Houses at Hogwarts were both the living and learning communities for its students. 
    	  Each year's group of students in the same House shares the same dormitory and many classes. 
    	  The houses compete throughout the school year, by earning and losing points for behaviour.
    	  The House with the most points wins the House Cup. Each House also has its own Quidditch team 
    	  that competes for the Inter-House Quidditch Cup. These two competitions breed rivalries between the Houses,
    	  the greatest of which is that between Gryffindor and Slytherin.</p>
    	</Card>

      <Card className={classes.root} className="Card_css">
          <CardHeader title="Gryffindor" />
          <CardMedia className={classes.media} image={GryffindorImg} title="GryffindorImg" />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              "You might belong in Gryffindor,
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Where dwell the brave at heart,
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Their daring, nerve, and chivalry,
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Set Gryffindors apart."
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Details</Typography>
            <Typography paragraph>
            Founder: Goderic Gryffindor
            </Typography>
            <Typography paragraph>
            Head of House: Minerva McGonagall
            </Typography>
            <Typography paragraph>
            Values: Courage, Bravery, Nerve, Chivalry  
            </Typography>
            <Typography paragraph>
            Animal: Lion
            </Typography>
            <Typography paragraph>
            Colors: Scarlet and Gold
            </Typography>
            <Typography paragraph>
            House Ghost: Nearly Headless Nick
            </Typography>    
            <Typography paragraph>
            Common room: Gryffindor Tower
            </Typography>         
          </CardContent>
          </Collapse>
      </Card>

    	<Card className={classes.root} className="Card_css">
      		<CardHeader title="Ravenclaw" />
      		<CardMedia className={classes.media} image={RavenclawImg} title="RavenclawImg" />
      		<CardContent>
        		<Typography variant="body2" color="textSecondary" component="p">
          		"Or yet in wise old Ravenclaw,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		If you've a ready mind,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		Where those of wit and learning,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		Will always find their kind."
        		</Typography>
      		</CardContent>
      		<CardActions disableSpacing>
        		<IconButton
          		className={clsx(classes.expand, {
            	[classes.expandOpen]: expanded,
          		})}
          		onClick={handleExpandClick}
          		aria-expanded={expanded}
          		aria-label="show more"
        		>
          		<ExpandMoreIcon />
        		</IconButton>
      		</CardActions>
      		<Collapse in={expanded} timeout="auto" unmountOnExit>
        	<CardContent>
          	<Typography paragraph>Details</Typography>
          	<Typography paragraph>
            Founder: Rowena Ravenclaw
          	</Typography>
          	<Typography paragraph>
            Head of House: Fillius Flitwick
          	</Typography>
          	<Typography paragraph>
          	Values: Intelligence, Creativity, Learning, wit 
          	</Typography>
          	<Typography paragraph>
          	Animal: Eagle
          	</Typography>
          	<Typography paragraph>
          	Colors: Blue and Bronze
          	</Typography>
          	<Typography paragraph>
          	House Ghost: The Grey Lady
          	</Typography>    
          	<Typography paragraph>
          	Common room: Ravenclaw Tower
          	</Typography>       	
        	</CardContent>
      		</Collapse>
    	</Card>

    	<Card className={classes.root} className="Card_css">
      		<CardHeader title="Hufflepuff" />
      		<CardMedia className={classes.media} image={HufflepuffImg} title="HufflepuffImg" />
      		<CardContent>
        		<Typography variant="body2" color="textSecondary" component="p">
          		"You might belong in Hufflepuff,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		Where they are just and loyal,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		Those patient Hufflepuffs are true,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		And unafraid of toil."
        		</Typography>
      		</CardContent>
      		<CardActions disableSpacing>
        		<IconButton
          		className={clsx(classes.expand, {
            	[classes.expandOpen]: expanded,
          		})}
          		onClick={handleExpandClick}
          		aria-expanded={expanded}
          		aria-label="show more"
        		>
          		<ExpandMoreIcon />
        		</IconButton>
      		</CardActions>
      		<Collapse in={expanded} timeout="auto" unmountOnExit>
        	<CardContent>
          	<Typography paragraph>Details</Typography>
          	<Typography paragraph>
            Founder: Helga Hufflepuff
          	</Typography>
          	<Typography paragraph>
            Head of House: Pomona Sprout
          	</Typography>
          	<Typography paragraph>
          	Values: Hard work, Patience, Justice, Loyalty 
          	</Typography>
          	<Typography paragraph>
          	Animal: Badger
          	</Typography>
          	<Typography paragraph>
          	Colors: Yellow and black
          	</Typography>
          	<Typography paragraph>
          	House Ghost: The Fat Friar
          	</Typography>    
          	<Typography paragraph>
          	Common room: Hufflepuff Basement
          	</Typography>       	
        	</CardContent>
      		</Collapse>
    	</Card>

    	<Card className={classes.root} className="Card_css">
      		<CardHeader title="Slytherin" />
      		<CardMedia className={classes.media} image={SlytherinImg} title="SlytherinImg" />
      		<CardContent>
        		<Typography variant="body2" color="textSecondary" component="p">
          		"Or perhaps in Slytherin,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		You'll make your real friends,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		Those cunning folk use any means,
        		</Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
          		To achieve their ends."
        		</Typography>
      		</CardContent>
      		<CardActions disableSpacing>
        		<IconButton
          		className={clsx(classes.expand, {
            	[classes.expandOpen]: expanded,
          		})}
          		onClick={handleExpandClick}
          		aria-expanded={expanded}
          		aria-label="show more"
        		>
          		<ExpandMoreIcon />
        		</IconButton>
      		</CardActions>
      		<Collapse in={expanded} timeout="auto" unmountOnExit>
        	<CardContent>
          	<Typography paragraph>Details</Typography>
          	<Typography paragraph>
            Founder: Salazar Slytherin
          	</Typography>
          	<Typography paragraph>
            Head of House: Horace Slughorn, Severus Snape
          	</Typography>
          	<Typography paragraph>
          	Values: Ambition, Cunning, Leadership, Resourcefulness  
          	</Typography>
          	<Typography paragraph>
          	Animal: Snake
          	</Typography>
          	<Typography paragraph>
          	Colors: Green and Silver
          	</Typography>
          	<Typography paragraph>
          	House Ghost: Bloody Baron
          	</Typography>    
          	<Typography paragraph>
          	Common room: Slytherin Dungeon
          	</Typography>       	
        	</CardContent>
      		</Collapse>
    	</Card>
    </div>
  )
}

export default Houses;