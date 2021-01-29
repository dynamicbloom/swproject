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

function Vehicles({ data }) {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth='1'>
        <div className={classes.vehiclePageName}>
          <Typography
            variant="h5"
            style={{color: '#E0E0E0'}}
            gutterBottom
          >
            <Box fontFamily='Montserrat' letterSpacing={0} fontWeight={400} >
              Vehicles
            </Box>
          </Typography>
        </div>
      </Container>
    </div>
    // <>
    //   <Grid columns={3}>
    //     {data.map((vehicles, i) => {
    //       return (
    //         <Grid.Column key={i}>
    //           <Card>
    //             <Card.Content>
    //               <Card.Header>{vehicles.name}</Card.Header>
    //               <Card.Description>
    //                 <strong>Price</strong>
    //                 <p>{vehicles.cost_in_credits}</p>
    //                 <strong>Class</strong>
    //                 <p>{vehicles.vehicle_class}</p>
    //               </Card.Description>
    //             </Card.Content>
    //           </Card>
    //         </Grid.Column>
    //       )
    //     })}
    //   </Grid>
    // </>
  );
}

export default Vehicles;
