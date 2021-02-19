import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Container, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  starshipsPageName: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1.5),
    marginLeft: theme.spacing(1),
  }
}));

function Starships() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth='false'>
        <div className={classes.starshipsPageName}>
          <Typography
            variant="h5"
            style={{color: '#E0E0E0'}}
          >
            Starships
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default Starships;