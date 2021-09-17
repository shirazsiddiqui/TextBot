import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {

  const [mode, setMode] = useState('dark');//whether darkmode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) => {
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(() => {
        setAlert(null)
      }, 1500);

  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      showAlert("Dark mode enabled", "success");
      document.title = 'TextBot - Dark Mode';
    
    
    }else{
      setMode('light');
      showAlert("Light mode enabled", "success");
      document.title = 'TextBot - Light Mode';

      setInterval(() => {
      document.title = 'TextBot - Light Mode';

      },2000);

      setInterval(() => {
        document.title = 'TextBot - Shiraz';
  
        },1500);

    }
  }
  
  return (
    <>
         {/* <Navbar title="TextBot" aboutText="About TextBot"/>
         <Navbar/> */}
         <Router>
         <Navbar title="TextBot" mode={mode} toggleMode={toggleMode}/>

         <strong><Alert alert={alert}/></strong>
         
         <div className="container my-3">

         <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
         {<TextForm showAlert={showAlert} heading="Enter the text to analyze " /> }
          </Route>
        </Switch>
        </div>
        </Router>

    </>
  );

}

export default App;
