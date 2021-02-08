import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./components/navbar";
import Home from "./components/pages/Home";
import Vehicles from "./components/pages/Vehicles";
import Starships from "./components/pages/Starships";
import People from "./components/pages/People";
import Planets from "./components/pages/Planets";
import axios from "axios";

function App() {

  const url = 'https://swapi.dev/api/';

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {

    axios.get(url + 'vehicles/?format=json')
      .then((response) => {
          setVehicles(response.data.results);
        }
      )

  }, []);

  console.log('vehicles', vehicles)

  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/vehicles'>
            <Vehicles/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/starships'>
            <Starships/>
          </Route>
          <Route exact path='/People'>
            <People/>
          </Route>
          <Route exact path='/Planets'>
            <Planets/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;