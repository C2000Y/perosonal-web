import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentIcon from '@mui/icons-material/Assignment';

import Content from '../Content/Content'
import { Router, Route, Link } from 'react-router'

import './Drawer.css'
// import App from "../App";
// import Education from "../SideBar/Education.js"

const drawerWidth = 240;

// const routes = (
//   <Route component={App}>
//     <Route path="edu" components={{main: Education}}/>
//   </Route>
// )

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


class PersistentDrawerLeft extends Component {
  state = {open: false, contentType: 'Home'};

  handleDrawer = (bool) => {
    return () => {
      this.setState({open: !bool})
    }
  };

  handleContent = (category) => {
    return () =>{
      this.setState({contentType: category});
    }
  }

  render() {
    const icons = [<SchoolIcon/>,<WorkIcon/>,<AssignmentIcon/>];
    const {open, contentType} = this.state;
    return (
      <div>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar className="tool-bar">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawer(open)}
              edge="start"
              // sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ display: 'flex'}}>
          <Drawer
            style={{zIndex: 1, position: 'relative'}}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <Divider />
            <List >
              {['Home'].map((text, index) => (
                <ListItem button key={text} onClick={this.handleContent(text)}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['Education', 'Work Experience', 'Project'].map((text, index) => (
                <ListItem button key={text} onClick={this.handleContent(text)}>
                  <ListItemIcon>
                    {icons[index]}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            <Content contentType={contentType}/>
          </Main>
        </Box>
      </div>
    )
  }
}
export default PersistentDrawerLeft;