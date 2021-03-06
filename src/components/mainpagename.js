import React from 'react';
import {Container, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainPageName: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1.5),
    marginLeft: theme.spacing(1),
  },
  mainContainer: {
    maxWidth: '100%',
  }
}));

function MainPageName() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.mainContainer}
      >
        <div className={classes.mainPageName}>
          <Typography
            variant="h5"
            style={{color: '#151515'}}
          >
            Main page
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default MainPageName;