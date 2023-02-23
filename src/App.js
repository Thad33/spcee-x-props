import Nav from "./Components/Nav";
import React from "react";
import "../src/App.css"
import Main from "./Components/Main";
function App() {
  return (
    <div className="App">
      <Nav h='Home' d='Destination' c='Crew' t='Technology' span={00}/>
      <Main name='SO, YOU WANT TO TRAVEL TO ' space='Space'  />
    </div>
  );
}

export default App;

// I just learnt how to use props and its damn easy! and fun muuuah!