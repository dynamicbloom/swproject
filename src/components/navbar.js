import React, {useState} from 'react';
import {AppBar, Box, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  menuTitle: {
    position: 'absolute',
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  listMenu: {
    position: 'absolute',
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(1),
    width : 300,
  }
}));

function NavBar() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(true)
  }

  return (
    <div>
      <AppBar position="fixed" style={{
        backgroundColor: '#000000',
        boxShadow: '0px 0px 0px 0px'
      }}>
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
            style={{color: '#FFE81F'}}
          >
            <Box fontFamily='Starjedi' m={1} lineHeight="normal" fontSize={16}>
              STAR WARS
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className={classes.sidedrawer}
             style={{ height: '100%', width : '300px', backgroundColor : '#686C6E'}}
        >
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
            {['Транспорт', 'Корабли'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default NavBar;