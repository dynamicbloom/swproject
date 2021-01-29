import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Container, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  peoplePageName: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1.5),
    marginLeft: theme.spacing(1),
  }
}));

function People() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth='1'>
        <div className={classes.peoplePageName}>
          <Typography
            variant="h5"
            style={{color: '#E0E0E0'}}
            gutterBottom
          >
            <Box fontFamily='Montserrat' letterSpacing={0} fontWeight={400} >
              People
            </Box>
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default People;