import React, { useState, useEffect } from "react";
import Header from "./header";
import NasaCard from "./Nasa";

import "./App.css";



function App() {
  return (
    <div className="App">
      <Header />
      <NasaCard />
    </div>
  );
}

export default App;

//const [state, setState] = useState(0)

// Your API key for rsachdeva@ucdavis.edu is:

// XdxdNOQsBkUi5YJkbjNIlVtnPD75yGFAePvauVhr
// You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

// https://api.nasa.gov/planetary/apod?api_key=XdxdNOQsBkUi5YJkbjNIlVtnPD75yGFAePvauVhr

//get the api w axios.. console log .. view the data 
//make files after seeing what kind of data is being outputted


// axios
// .get('https://api.nasa.gov/planetary/apod?api_key=XdxdNOQsBkUi5YJkbjNIlVtnPD75yGFAePvauVhr')