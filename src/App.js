import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./components/navbar";
import Home from "./components/pages/Home";
import Characters from "./components/pages/People/Characters";
import Person from "./components/pages/People/Person";
import Comics from "./components/pages/Comics";

function App() {

  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />} />
          <Route exact path='/Characters' render={(props) => <Characters {...props} />} />
          <Route exact path='/Characters/:personId' render={(props) => <Person {...props} />} />
          <Route exact path='/Comics' render={(props) => <Comics {...props} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;