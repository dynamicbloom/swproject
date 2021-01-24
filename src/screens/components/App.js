import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Toolbar} from "@material-ui/core";

import {RouteWithSubRoutes} from "../../shared/components";
import Container from '@material-ui/core/Container';

import routes from '../route';
import Navbar from "./Navbar";

// document.body.style.backgroundColor = "#1A1A1A";

function App() {

  // const [people, setPeople] = useState([]);
  // const [planets, setPlanets] = useState([]);
  // const [starships, setStarships] = useState([]);
  // const [vehicles, setVehicles] = useState([]);
  //
  // useEffect(() => {
  //   async function fetchVehicles() {
  //     let res = await fetch('https://swapi.dev/api/vehicles/?format=json');
  //     let data = await res.json();
  //     setVehicles(data.results);
  //   }
  //
  //   fetchVehicles();
  // }, [])
  //
  return (
    <Router>
      <Navbar/>
      <Container maxWidth={false}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Container>
    </Router>
    // <>
    //   <Router>
    //     <Navbar/>
    //     <Switch>
    //       <Route exact path='/vehicles'>
    //         <Vehicles/>
    //       </Route>
    //       <Route exact path='/'>
    //         <Home/>
    //       </Route>
    //       <Route exact path='/starships'>
    //         <Starships/>
    //       </Route>
    //       <Route exact path='/People'>
    //         <People/>
    //       </Route>
    //       <Route exact path='/Planets'>
    //         <Planets/>
    //       </Route>
    //     </Switch>
    //   </Router>
    // </>
  );
}

export default App;