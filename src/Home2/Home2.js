import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


//material-ui-start
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
  }));
//material-ui-end







const Home2 = (props) => {
    // console.log(props);
    const classes = useStyles();











    return (
        // <div>
        //     <h1>{props.post.title}</h1>
        //     <Link to={"/post/"+ props.post.id}><Button variant="contained" color="primary">
        //     See full post
        //     </Button></Link>
        // </div>


<div className={classes.root}>
<Paper className={classes.paper}>
  <Grid container spacing={2}>
    <Grid item>
      {/* <ButtonBase className={classes.image}>
        <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
      </ButtonBase> */}
    </Grid>
    <Grid item xs={12} sm container>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography gutterBottom variant="subtitle1">
          <h3>{props.post.title}</h3>
          </Typography>
          {/* <Typography variant="body2" gutterBottom>
            Full resolution 1920x1080 • JPEG
          </Typography> */}
          {/* <Typography variant="body2" color="textSecondary">
            ID: 1030114
          </Typography> */}
        </Grid>
        <Grid item>
          <Typography variant="body2">
          <Link to={"/post/"+ props.post.id} className='buttonDeco'><Button variant="contained" color="primary">
          See full post
          </Button></Link>
          </Typography>
        </Grid>
      </Grid>
      {/* <Grid item>
        <Typography variant="subtitle1">$19.00</Typography>
      </Grid> */}
    </Grid>
  </Grid>
</Paper>
</div>
// );
// }



























    );
};

export default Home2;