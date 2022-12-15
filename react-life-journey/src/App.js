import React from "react";
import Navbar from "./components/Navbar"
import Location from "./components/Location";
import Data from "./data"

const locations = Data.map(items =>{
  return <Location 
          key = {items.id}
          {...items}
  />
})
function App() {
  return (
    <div className="App">
     <Navbar />
     {locations}
    </div>
  );
}

export default App;
