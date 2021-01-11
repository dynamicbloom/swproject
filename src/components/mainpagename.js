import React from 'react';
import {Box, Container, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainPageName: {
    marginTop: theme.spacing(12),
  }
}));

function MainPageName() {
  const classes = useStyles();

  return (
    <div>
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
    </div>
  );
}

export default MainPageName;