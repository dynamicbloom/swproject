import React, {useState} from 'react';
import {AppBar, Box, Drawer, IconButton, List, ListItem,
  ListItemText, Toolbar, Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  customAppBar: {
    backgroundColor: '#000000',
    boxShadow: "none",
    alignItems: "left",
    justifyContent: "center"
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    color: '#FFE81F',
    fontFamily: 'Starjedi',
    lineHeight: "normal",
    // fontSize: '16px',
    // marginLeft: theme.spacing(1),
    cursor: 'pointer',
    marginBottom: '3.5px;'
  },
  // menuTitle: {
  //   position: 'absolute',
  //   marginTop: theme.spacing(1),
  //   marginLeft: theme.spacing(2),
  // },
  // listMenu: {
  //   position: 'absolute',
  //   marginTop: theme.spacing(6),
  //   marginLeft: theme.spacing(1),
  //   width : '242px',
  // }
}));

function Navbar() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(true)
  }

  return (
      <AppBar position="sticky" className={classes.customAppBar}>
        <Toolbar>
          <IconButton onClick={handleDrawer}
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
          >
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit'}}>
              STAR WARS
            </Link>
          </Typography>
        </Toolbar>

        <Drawer
          anchor='left'
          open={open}
          onClose={() => setOpen(false)}
        >
          <div style={{ height: '100%', width : '250px', backgroundColor : '#686C6E'}}>
            <Typography
              variant="h6"
              className={classes.menuTitle}
              style={{color: '#FFE81F'}}
            >
              <Box fontFamily='Starjedi' m={1} lineHeight="normal" fontSize={16}>
                Menu
              </Box>
            </Typography>
            <List
              className={classes.listMenu}
              style={{color: '#FFFFFF'}}
            >
              {[{ text: 'People', url: '/people'},{ text: 'Planets', url: '/planets'},
                { text: 'Starships', url: '/starships'},{ text: 'Vehicles', url: '/vehicles'}
              ].map((item, index) => (
                <Link to={item.url} style={{ textDecoration: 'none', color: 'inherit'}} >
                  <ListItem button key={item.text}>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        </Drawer>
      </AppBar>

  );
}

export default Navbar;