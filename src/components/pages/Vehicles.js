import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Card, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  vehiclePageName: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1.5),
    marginLeft: theme.spacing(1),
  }
}));

function Vehicles() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth='false'>
        <div className={classes.vehiclePageName}>
          <Typography
            variant="h5"
            style={{color: '#E0E0E0'}}
          >
            Vehicles
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default Vehicles;