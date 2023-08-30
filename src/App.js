
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#290a2d';
      showAlert("Dark mode enabled", "success");
    }
  }
  return (
    <>
    {/* <Router> */}
   
      <Navbar title="Text Convert" Features="about" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Routes>
          <Route exact path="/about" element={<About />}/> */}
          {/* <Route exact path="/" */}
          <TextForm paragraph="Convert the text " mode={mode} showAlert={showAlert} />
         
        {/* </Routes> */}
        {/* </Router> */}
  
    </>
  );

}

export default App;
