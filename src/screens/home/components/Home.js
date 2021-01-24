import React from 'react';
import MainPageName from "./mainpagename";
import MainPageCards from "./mainpagecards";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Container, Typography, Grid, Paper, CardMedia, CardContent, Card} from "@material-ui/core";

function Home() {

  const useStyles = makeStyles((theme) => ({
    // planetsPageName: {
    //   marginTop: theme.spacing(12),
    // },
    // customCard: {
    //   padding: theme.spacing(2),
    //   textAlign: 'center',
    //   backgroundColor: "#4F4F4F",
    //   minWidth: 275
    // },
    // paper: {
    //   padding: theme.spacing(1),
    //   textAlign: 'center',
    //   color: theme.palette.text.secondary,
    // },

    cardGrid: {
      position: 'absolute',
      display: 'block',
      width: '50vw',
      transitionDuration: '0.3s',
      height: '60vw'
    },
    cardMedia: {
      paddingTop: '56.25%'
    },
    cardContent: {
      marginBottom: theme.spacing(0),
    },
    title: {
      fontFamily: 'Montserrat',
      fontWeight: '800',
      color: '#E0E0E0',
      marginTop: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <Container className={classes.cardGrid} maxWidth= '1'>

         <Grid container
              direction="row"
              justify="flex-start"
              spacing={10}
              alignItems="center">

          <Grid item xs={12}>
            <Typography
              variant="h4"
              className={classes.title}
            >
              Main page
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{backgroundColor: "#4F4F4F"}}>
              <CardMedia
                className={classes.cardMedia}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant='h5' style={{color: '#FFFFFF'}}>
                  <Box fontFamily='Montserrat' fontSize={14} letterSpacing={0.5} fontWeight={700}>
                    Vehicle
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{backgroundColor: "#4F4F4F"}}>
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
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{backgroundColor: "#4F4F4F"}}>
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
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
    // <div>
    //   <Grid container
    //         direction="row"
    //         justify="flex-start"
    //         alignItems="center">
    //
    //     <Grid item xs={12} style={{backgroundColor: "#e80000"}}>
    //       <Typography
    //         variant="h4"
    //         className={classes.title}
    //       >
    //         Main page
    //       </Typography>
    //     </Grid>
    //   </Grid>
    //
    //   <Grid container spacing={1}>
    //     <Grid container item xs={12} spacing={1}>
    //       <Grid item xs={3}>
    //         <Card className={classes.customCard}>
    //           <CardMedia
    //             style={{ padding: "64px" }}
    //           />
    //           <CardContent className={classes.cardContent}>
    //             <Typography variant='h5' style={{color: '#FFFFFF'}}>
    //               <Box fontFamily='Montserrat' fontSize={14} letterSpacing={0.5} fontWeight={700}>
    //                 Vehicle
    //               </Box>
    //             </Typography>
    //           </CardContent>
    //         </Card>
    //       </Grid>
    //
    //       <Grid item xs={3}>
    //         <Card className={classes.customCard}>
    //           <CardMedia
    //             style={{ padding: "64px" }}
    //           />
    //           <CardContent className={classes.cardContent}>
    //             <Typography variant='h5' style={{color: '#FFFFFF'}}>
    //               <Box fontFamily='Montserrat' fontSize={14} letterSpacing={0.5} fontWeight={700}>
    //                 People
    //               </Box>
    //             </Typography>
    //           </CardContent>
    //         </Card>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //
    //   {/*  /!*<MainPageName/>*!/*/}
    //   {/*  /!*<MainPageCards/>*!/*/}
    //   {/*</Grid>*/}
    // </div>
  );
}

export default Home;