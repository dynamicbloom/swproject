import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Container, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  starshipsPageName: {
    marginTop: theme.spacing(12),
  }
}));

function Starships() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth='1'>
        <div className={classes.starshipsPageName}>
          <Typography
            variant="h1"
            style={{color: '#E0E0E0'}}
            gutterBottom
          >
            <Box fontFamily='Montserrat' fontSize={14} letterSpacing={0} fontWeight={400} >
              Starships
            </Box>
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default Starships;