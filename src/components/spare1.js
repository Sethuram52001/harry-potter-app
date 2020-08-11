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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    margin: 10,
  },
  media: {
    height: 0,
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




export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    < >      
    <Card className={classes.root} className="Card_css">
      <CardHeader title="Gryffindor" />
      <CardMedia className={classes.media} image="https://p1.hiclipart.com/preview/542/343/666/harry-potter-gryffindor-logo-thumbnail.jpg" title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          "You might belong in Gryffindor,
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Where dwell the brave at heart,
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Their daring, nerve, and chivalry
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Set Gryffindors apart"
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
   
    <Card className={classes.root} className="Card_css" >
      <CardHeader title="Ravenclaw" />
      <CardMedia className={classes.media} image="https://p7.hiclipart.com/preview/563/589/122/ravenclaw-house-fictional-universe-of-harry-potter-common-room-hogwarts-gryffindor-harry-potter-ravenclaw-thumbnail.jpg" title="Paella dish" />
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
 
    <Card className={classes.root} className="Card_css" >
      <CardHeader title="Hufflepuff" />
      <CardMedia className={classes.media} image="https://i.etsystatic.com/14544289/r/il/45d0d7/1151116662/il_570xN.1151116662_mj8q.jpg" title="Paella dish" />
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
   
      <Card className={classes.root} className="Card_css" >
      <CardHeader title="Slytherin" />
      <CardMedia className={classes.media} image="https://www.dictionary.com/e/wp-content/uploads/2018/03/Slytherin-300x300.jpg" title="Paella dish" />
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </ >
  );
}
