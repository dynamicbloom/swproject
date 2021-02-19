import React from 'react';
import {Box, Container, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  personPageName: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1.5),
    marginLeft: theme.spacing(1),
  },
  mainContainer: {
    maxWidth: '100%',
  }
}));

const Person = (props) => {
  const classes = useStyles();
  const { match } = props;
  const { params } = match;
  const { peopleId } = params;

  return (
    <>
        <Container className={classes.mainContainer}
        >
          <div className={classes.personPageName}>
            <Typography
              variant="h5"
              style={{color: '#E0E0E0'}}
            >
              Person
            </Typography>
          </div>
        </Container>
    </>
  );
};

export default Person;