import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./components/navbar";
import Home from "./components/pages/Home";
import Vehicles from "./components/pages/Vehicles";
import Starships from "./components/pages/Starships";
import People from "./components/pages/People";
import Planets from "./components/pages/Planets";

function App() {
  // const [people, setPeople] = useState([]);
  // const [planets, setPlanets] = useState([]);
  // const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function fetchVehicles() {
      let res = await fetch('https://swapi.dev/api/vehicles/?format=json');
      let data = await res.json();
      setVehicles(data.results);
    }

    fetchVehicles();
  }, [])

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