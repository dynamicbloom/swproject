import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";

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
  },
  gridBug: {
    maxWidth: '98.5%',
  }
}));

const getPersonCard = () => {
  return (
    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
      <Card>
        <CardContent>
          Hi
        </CardContent>
      </Card>
    </Grid>
  );
};

function People() {
  const classes = useStyles();

  return (
    <>
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
      <Container className={classes.gridBug}
                 disableGutters>
        <Grid container
              spacing={3}
              style={{
                margin: 0,
                width: '100%',
              }}
        >
          {getPersonCard()}
          {getPersonCard()}
          {getPersonCard()}
          {getPersonCard()}
          {getPersonCard()}
          {getPersonCard()}
          {getPersonCard()}
          {getPersonCard()}
          {getPersonCard()}

          {/*<Grid item xs={12} sm={6} md={3} lg={3} xl={3}>*/}
          {/*  <Card style={{backgroundColor: "#4F4F4F"}} className={classes.cardRoot}>*/}
          {/*    <CardActionArea>*/}
          {/*      <CardMedia*/}
          {/*        className={classes.cardMedia}*/}
          {/*      />*/}
          {/*      <CardContent className={classes.cardContent}>*/}
          {/*        <Typography variant='h5' style={{color: '#FFFFFF'}}>*/}
          {/*          <Box fontFamily='Montserrat' fontSize={14} letterSpacing={0.5} fontWeight={700}>*/}
          {/*            People*/}
          {/*          </Box>*/}
          {/*        </Typography>*/}
          {/*      </CardContent>*/}
          {/*    </CardActionArea>*/}
          {/*  </Card>*/}
          {/*</Grid>*/}
        </Grid>
      </Container>
    </>
  );
}

export default People;