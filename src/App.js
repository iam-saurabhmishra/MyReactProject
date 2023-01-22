import React , { useState } from 'react'
import './App.css'
import AboutUs from './Components/AboutUs'
import Alert from './Components/Alert'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'

const App = () => {

  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  function showAlert(message, type) {
    setalert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }

  const toggleTheme = (mode)=> {
    setMode(mode);
    if(mode === "dark") {
      document.body.style.backgroundColor="black";
      showAlert("Mode is changed to Dark ","success");
    } else {
      document.body.style.backgroundColor="white";
      showAlert("Mode is changed to Light ","success");
    }
  }
  return (
    <>
      <Navbar title="PlayWithText" mode={mode} toggleTheme={toggleTheme}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze..." mode={mode} showAlert={showAlert}/>
      </div>
      <div className="container my-3">
      <AboutUs/>
      </div>
   </>
  )
}

export default App