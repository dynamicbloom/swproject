import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    marginBottom: theme.spacing(0),
    marginLeft: theme.spacing(1),
  },
  gridBug: {
    maxWidth: '98.5%',
  }
}));

function MainPageCards() {

  const classes = useStyles();

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
        {[{ text: 'People', url: '/people'},{ text: 'Planets', url: '/planets'},
          { text: 'Starships', url: '/starships'},{ text: 'Vehicles', url: '/vehicles'}
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card style={{backgroundColor: "#4F4F4F"}}>
              <CardActionArea>
                <Link to={item.url} style={{ textDecoration: 'none', color: 'inherit'}}>
                  <CardMedia
                    className={classes.cardMedia}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5' style={{color: '#FFFFFF'}}>
                      {item.text}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MainPageCards;