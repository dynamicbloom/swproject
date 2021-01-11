import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Paper,
  Grid,
  CardContent,
  Card,
  CardMedia,
  CardActions,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemText,
  ButtonBase
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

document.body.style.backgroundColor = "#1A1A1A";

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
  mainPageName: {
    marginTop: theme.spacing(12),
  },
  cardGrid: {
    position: 'absolute',
    display: 'block',
    width: '50vw',
    transitionDuration: '0.3s',
    height: '60vw'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    marginBottom: theme.spacing(0),
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

function App() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(true)
  }

  return (
    <>
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

      <main>
        <Container maxWidth='1'>
          <div className={classes.mainPageName}>
            <Typography
              variant="h1"
              style={{color: '#E0E0E0'}}
              gutterBottom
            >
              <Box fontSize={14} letterSpacing={1} >
                Главная страница
              </Box>
            </Typography>
          </div>
        </Container>
        <Container className={classes.cardGrid} maxWidth= '1'>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card classname={classes.card} style={{backgroundColor: "#4F4F4F"}}>
                <CardMedia
                  className={classes.cardMedia}
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant='h5' style={{color: '#FFFFFF'}}>
                    <Box fontSize={14} letterSpacing={0.5} >
                      Транспорт
                    </Box>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card classname={classes.card} style={{backgroundColor: "#4F4F4F"}}>
                <CardMedia
                  className={classes.cardMedia}
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant='h5' style={{color: '#FFFFFF'}}>
                    <Box fontSize={14} letterSpacing={0.5} >
                      Корабли
                    </Box>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;