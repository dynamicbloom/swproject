import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import axios from "axios";
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  peoplePageName: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1.5),
    marginLeft: theme.spacing(1),
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    marginBottom: theme.spacing(0),
    marginLeft: theme.spacing(1),
  },
  gridBug: {
    maxWidth: '98.5%',
  },
  paginationStyle: {
    color: '#151515',

  }
}));

function Characters(props) {
  const { history } = props;
  const classes = useStyles();
  const [peopleData, setPeopleData] = useState([]);

  const getPersonCard = (peopleId) => {
    console.log(peopleData[`${peopleId}`])
    const { name } = peopleData[`${peopleId}`];

    return (
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={peopleId}>
        <Card style={{backgroundColor: "#4F4F4F"}}>
          <CardActionArea onClick={() => history.push(`/people/${peopleId}`)}>
            <CardMedia
              className={classes.cardMedia}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant='h5' style={{color: '#151515'}}>
                {`${name}`}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  };

  // const apiKey = 'ecfe579608abf08017d4d1b47844f986';
  // const url = 'https://gateway.marvel.com/v1/public/characters';

  useEffect(() => {

    axios
      .get('https://gateway.marvel.com:443/v1/public/characters?limit=8&apikey=ecfe579608abf08017d4d1b47844f986')
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPeopleData = {};
        results.forEach((people, index) => {
          newPeopleData[index + 1] = {
            id: index + 1,
            name: people.name,
          };
        });
        setPeopleData(newPeopleData);
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <>
      <Container maxWidth='false'>
        <div className={classes.peoplePageName}>
          <Typography
            variant="h5"
            style={{color: '#151515'}}
          >
            Characters
          </Typography>
        </div>
      </Container>
      <Container className={classes.gridBug}
                 disableGutters>
        <Grid container
              spacing={3}
              style={{
                margin: 0,
                width: '100%',
              }}
        >
          {Object.keys(peopleData).map(peopleId =>
            getPersonCard(peopleId))}
        </Grid>
      </Container>
      <div className={classes.paginationStyle}>
        <Pagination count={10} showFirstButton showLastButton />
      </div>
    </>
  );
}

export default Characters;