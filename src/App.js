import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";


function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;

//const [state, setState] = useState(0)

// Your API key for rsachdeva@ucdavis.edu is:

// XdxdNOQsBkUi5YJkbjNIlVtnPD75yGFAePvauVhr
// You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

// https://api.nasa.gov/planetary/apod?api_key=XdxdNOQsBkUi5YJkbjNIlVtnPD75yGFAePvauVhr

axios
.get('https://api.nasa.gov/planetary/apod?api_key=XdxdNOQsBkUi5YJkbjNIlVtnPD75yGFAePvauVhr')