import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit*5,
    marginRight: theme.spacing.unit*5,
    background: 'red',
    color: 'white',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});



class SignUp extends Component {
    render() {

        const { classes } = this.props;

        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        required
                        id="filled-email-input"
                        label="Email"
                        className={classes.textField}
                        color="white"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="filled-email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="filled"
                    />
                </form>
            </div>
        );
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,

};

export default withStyles(styles) (SignUp);



******MATERIAL UI ORIGINAL************

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './styles/Plans.css';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function Plans(props) {
  const { classes } = props;
  return (
      <div className='prueba'>
        <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                Plans
            </Typography>
            <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
      </div>
  );
}

Plans.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Plans);



******MATERIAL UI WITH REACT************

import React , {Component}from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    maxWidth: 545,
  },
  media: {
    height: 440,
  },

};

 class Contact extends Component{
    
  render(){const{ classes } = this.props;
    return ( 
      <div>
        <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                Contact
            </Typography>
            <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
      </div>
  );
}}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);



const styles = {
    card: {
      minWidth: 275,
    },
  };
  
    return (
      <div>
        <div className='nutritionPlans__container'>
        <div className='nutritionPlans__text__container'>
          <h1>Nutrition Plans</h1>
        </div>
        <div className='nutritionPlans__cards__container'>
          <Card className={classes.card}>
            <div>
              <img src= { plan1 }></img>
            </div>
            <CardContent>
              <Typography variant="headline" component="h2">
                Monthly
              </Typography>
              <Typography component="p">
                well meaning and kindly.
              </Typography>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>