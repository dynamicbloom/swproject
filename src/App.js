import React from 'react';
import MainPageName from './components/mainpagename';
import MainPageCards from "./components/mainpagecards";
import NavBar from "./components/navbar";

document.body.style.backgroundColor = "#1A1A1A";

function App() {

  return (
    <>
      <NavBar/>
      <main>
        <MainPageName/>
        <MainPageCards/>
      </main>
    </>
  );
}

export default App;