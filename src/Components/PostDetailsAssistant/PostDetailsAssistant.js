import React from 'react';
import Comments from '../Comments/Comments';
import './PostDetailsAssistant.css';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';




const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
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
    avatar: {
      backgroundColor: red[500],
    },
  }));










const PostDetailsAssistant = (props) => {
    // console.log(props.filteredPost)
    // console.log(props.id);

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    }





    return (
        // <div>
        //     <h3>Post Title:{props.filteredPost.title}</h3>
        //     <p>Post Body: {props.filteredPost.body}</p>
        //     <h3>Comments</h3>
        //     <Comments id={props.id}></Comments>
        // </div>

<Card className={classes.root} className = "App">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= {props.filteredPost.title}
        subheader="September 14, 2016"
      />
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {props.filteredPost.body}
        </Typography>
      </CardContent>
      
     
      
      


      {/* newly-added */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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
      <Typography variant="body2" color="textSecondary" component="p">
      <h3>Comments</h3>
      <Comments id={props.id}></Comments>
      </Typography>
      </CardContent>
    </Collapse>
    </Card>

    );
};

export default PostDetailsAssistant;