import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  function themeUpdate(){
    // props.setMode('light');
    console.log("Abhishek");
    
  }

  function showCheckBoxes (){
    return(
    props.themeStater && <span className={`mx-2  text-${props.mode==='light'?'dark':'light'}`}>
<input className="form-check-input mx-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Red
  </label>

  <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Yellow
  </label>
</span>
  )}

  return (
    <nav className={`navbar navbar-expand-lg navbar -${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
          
        </li>
        <li className="nav-item">
        <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/about">About</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">{props.about}</Link>
        </li>
        
      </ul>

    {/* {showCheckBoxes()} */}

      <div className={`mx-2 form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Theme</label>
      </div>
    </div>
  </div>
</nav>
  )
}
