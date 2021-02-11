import React, {useEffect, useState} from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Container,
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    marginBottom: theme.spacing(0),
  },
  gridBug: {
    maxWidth: '98.5%',
  }
}));

function MainPageCards() {

  const classes = useStyles();
  //
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
    <Container className={classes.gridBug}
               disableGutters>
      <Grid container
            spacing={3}
            style={{
              margin: 0,
              width: '100%',
            }}
      >
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Card style={{backgroundColor: "#4F4F4F"}}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                // component="img"
                // alt="Sand Crawler"
                // image='/src/img/sandcrawler.jpg'
                // title='Sand Crawler'
              />
              <CardContent className={classes.cardContent}>
                <Typography variant='h5' style={{color: '#FFFFFF'}}>
                  <Box fontFamily='Montserrat' fontSize={14} letterSpacing={0.5} fontWeight={700}>
                    People
                  </Box>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Card style={{backgroundColor: "#4F4F4F"}}>
            <CardActionArea>
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
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Card style={{backgroundColor: "#4F4F4F"}}>
            <CardActionArea>
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
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Card style={{backgroundColor: "#4F4F4F"}}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant='h5' style={{color: '#FFFFFF'}}>
                  <Box fontFamily='Montserrat' fontSize={14} letterSpacing={0.5} fontWeight={700}>
                    Vehicles
                  </Box>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainPageCards;