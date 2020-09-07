import React, {useState} from "react";
import Header from "./components/Header/Header.js";
import NavBar from "./components/NavBar/NavBar.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  let [hiddenNavBar, setHiddenNavBar] = useState(false);

  function hideNavbar() {
    console.log('nav hidden')
    setHiddenNavBar(!hiddenNavBar);
    
  }

  return (
    <Router>
      <div className="App">
        <Header hideNavbar={hideNavbar} />
        <NavBar navStatus={hiddenNavBar} />
      </div>
    </Router>
  );
}

export default App;
