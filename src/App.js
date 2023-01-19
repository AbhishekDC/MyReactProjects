import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState();
  const [themeStater, setThemeStater] = useState(false);

  const modeSetter= (receivedMode)=>{
    setMode(receivedMode);
  }
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

const toggleMode=()=>{
  if (mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark Mode Turned On","success");
    setThemeStater(true);
    document.title = 'TextUtils - Dark Mode';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light Mode Turned On","success");
    setThemeStater(false);
    document.title = 'TextUtils - Light Mode';
  }
}

 

  return (
    <>
    <Router>
    <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} themeStater={themeStater} modeSetter={modeSetter}/>
    <div style={{height:'13px'}}>
        {/* <h2>Abhishek</h2> */}
        <Alert alert={alert}/>
      </div>
    
    <div className="container my-5">
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter the Heading" mode={mode}/>
          </Route>
        </Switch>
    
    
    </div>
    </Router>
    </>
  );
}

export default App;
