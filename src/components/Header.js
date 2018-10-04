import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import { Link } from 'react-router-dom';

// import Logo from '../images/logo.png';
import './styles/Header.css';

import { withRouter } from 'react-router-dom';
import AuthService from '../Utils/AuthService';

// const theme = createMuiTheme({
//     palette: {
//         primary: {
//             main: '#48B2AB',
//         }
//     },
// })

const AuthButton = withRouter(({ history }) => (
    // AuthService.isAuthenticated === true
    localStorage.getItem('jwt') !== null
      ? <Button color='inherit' onClick={() => {
        AuthService.signout(() => {
          history.push('/')
        });
      }}>Logout</Button>
      : <Button component={ Link } to='/login' color='inherit'>Login</Button>
  ))
  


class Header extends Component {

    constructor() {
        super();
    
        this.state = {
          open: false
        };
      }
    
      toggleDrawer = () => {
        this.setState({
          open: !this.state.open
        });
      }
    

    render() {

        const AppBarStyles = {
            flex: 1,
            fontFamily: 'Patrick Hand SC', 
            fontSize: 40,
        };
      
        const ListItemTextStyle = {
            width: 200,
            fontFamily: 'Patrick Hand SC', 
            fontSize: 30,
        };
      
        const linkStyles = {
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontSize: 20,
            fontFamily: 'Patrick Hand SC', 
            // fontStyle: 'oblique',
            fontWeight: 500,
            color: 'black',
        };

        const ToolbarStyles = {
            background: '#AFB42B',
        };

        const ButtonStyles = {
            background: '#AFB42B',
            // background: '#FFA000',
            fontFamily: 'Patrick Hand SC',
            fontSize: 20, 
        }

        // const prueba = {
        //     background: 'red',
        // }


        return (
            <div>
                {/* <MuiThemeProvider theme={ theme }> */}
                <AppBar position="static" >
                    <Toolbar style={ ToolbarStyles }>
                        <IconButton onClick={ this.toggleDrawer } color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography style={ AppBarStyles } variant="title" color="inherit">Eat Healthy</Typography>
                        {/* <ListItem button> */}
                            <Link style={ AppBarStyles } to='/'>LOGO
                                {/* <img id='logo__header' src={ Logo } alt=''></img> */}
                            </Link>
                        {/* </ListItem> */}
                        <AuthButton/>
                        <Button component={ Link } to='/signup' style={ ButtonStyles } color="inherit">Sign up</Button>
                    </Toolbar>

                    
                    <Drawer open={ this.state.open } onClose={ this.toggleDrawer }>
                        <div 
                        tabIndex={0}
                        role="button"
                        onClick={ this.toggleDrawer }
                        onKeyDown={ this.toggleDrawer }
                        >
                        {/* <List color='primary'> */}
                        <List>
                            <ListItem>
                                <ListItemText style={ ListItemTextStyle } primary="" />
                            </ListItem>
                            <ListItem button>
                                <Link style={ linkStyles } to='/patient'>Patient</Link>
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <Link style={ linkStyles } to='/nutritionist'>Nutritionist</Link>
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <Link style={ linkStyles } to='/plans'>Nutrition plans</Link>
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <Link style={ linkStyles } to='/contact'>Contact</Link>
                            </ListItem>
                        </List>
                        </div>
                    </Drawer>
                </AppBar>
                {/* </MuiThemeProvider> */}
            </div>
        );
    }
}

export default Header;