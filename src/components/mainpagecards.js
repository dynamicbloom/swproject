import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

const useStyles = makeStyles((theme) => ({

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
  }
}));

function MainPageCards() {

  const classes = useStyles();

  // const url = 'https://swapi.dev/api/';
  //
  // const [vehicleName, setVehicleName] = useState([]);
  //
  // useEffect(() => {
  //
  //   axios.get(url + 'vehicles/4')
  //     .then((response) => {
  //         setVehicleName(response.data.name);
  //       }
  //     )
  // }, []);

  return (
    <div>
      <Container className={classes.cardGrid} maxWidth= '1'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{backgroundColor: "#4F4F4F"}}>
              <CardMedia
                className={classes.cardMedia}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant='h5' style={{color: '#FFFFFF'}}>
                  <Box fontFamily='Montserrat' fontSize={14} letterSpacing={0.5} fontWeight={700}>
                    Vehicle
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{backgroundColor: "#4F4F4F"}}>
              <CardMedia
                className={classes.cardMedia}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant='h5' style={{color: '#FFFFFF'}}>
                  <Box fontFamily='Montserrat' fontSize={14} letterSpacing={0.5} fontWeight={700}>
                    Planets
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{backgroundColor: "#4F4F4F"}}>
              <CardMedia
                className={classes.cardMedia}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant='h5' style={{color: '#FFFFFF'}}>
                  <Box fontFamily='Montserrat' fontSize={14} letterSpacing={0.5} fontWeight={700}>
                    Starships
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{backgroundColor: "#4F4F4F"}}>
              <CardMedia
                className={classes.cardMedia}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant='h5' style={{color: '#FFFFFF'}}>
                  <Box fontFamily='Montserrat' fontSize={14} letterSpacing={0.5} fontWeight={700}>
                    People
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MainPageCards;