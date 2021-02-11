import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./components/navbar";
import Home from "./components/pages/Home";
import Vehicles from "./components/pages/Vehicles";
import Starships from "./components/pages/Starships";
import People from "./components/pages/People/People";
import Person from "./components/pages/People/Person";
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
          <Route exact path='/' render={(props) => <Home {...props} />} />
          <Route exact path='/Vehicles' render={(props) => <Vehicles {...props} />} />
          <Route exact path='/Starships' render={(props) => <Starships {...props} />} />
          <Route exact path='/People' render={(props) => <People {...props} />} />
          <Route exact path='/:personId' render={(props) => <Person {...props} />} />
          <Route exact path='/Planets' render={(props) => <Planets {...props} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;