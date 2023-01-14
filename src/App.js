import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('dark');

const toggleMode=()=>{
  if (mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
  }
}

  return (
    <>
    <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-5">
    <TextForm heading="Enter the Heading" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
