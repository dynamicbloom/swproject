import React, {useState} from 'react';
import {AppBar, Box, Drawer, IconButton, List, ListItem,
  ListItemText, Toolbar, Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'MarvelRegular',
    fontSize: '36px',
    marginTop: theme.spacing(1),
    cursor: 'pointer',
  },
  menuTitle: {
    position: 'absolute',
    fontSize: '36px',
    fontFamily: 'MarvelRegular',
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  listMenu: {
    position: 'absolute',
    marginTop: theme.spacing(7),
    marginLeft: theme.spacing(1),
    width : '292px',
  }
}));

function NavBar() {

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawer = (open) => {
    setOpen(true)
  }

  return (
    <div>
      <AppBar position="sticky" style={{
        backgroundColor: '#DA3831',
        boxShadow: '0px 0px 0px 0px',
      }}>
        <Toolbar>
          <IconButton onClick={handleDrawer}
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.title}
            style={{color: '#FEFEFE'}}
          >
            <Box>
              <Link to='/' style={{ textDecoration: 'none', color: 'inherit'}}>
                MARVEL
              </Link>
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={{ height: '100%', width : '308px', backgroundColor : '#151515'}}>
          <Typography
            className={classes.menuTitle}
            style={{color: '#FEFEFE'}}
          >
            <Box>
              <Link to='/' style={{ textDecoration: 'none', color: 'inherit'}}>
                MENU
              </Link>
            </Box>
          </Typography>
          <List
            className={classes.listMenu}
            style={{color: '#FFFFFF'}}
          >
            {[{ text: 'Characters', url: '/characters'},{ text: 'Comics', url: '/comics'}
            ].map((item, index) => (
              <Link to={item.url} style={{ textDecoration: 'none', color: 'inherit'}} >
                <ListItem button key={item.text} onClick={() => setOpen(false)}>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default NavBar;
