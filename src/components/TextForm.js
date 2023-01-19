import React,{useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

export default function TextForm(props) {
    
    const [text, setText] = useState("Enter text here");
    let clr = "";
    const dropDownSelect = (event)=>{
      
      if(event==="Yellow"){
        clr="Yellow";
        
      }else if(event==="Red"){
        clr="Red";
        
      }else{
        clr="blue";
        
      }
      console.log(clr);
      
    }

    const handleLowerCaseClick = ()=>{
      // console.log("Upper Case was Clicked");
      let lower = text.toLowerCase();
      setText(lower);
      props.showAlert("Lowercase Converted","primary");
  }

  const handleClearTextClick=()=>{
    setText(" ");
    props.showAlert("Text Cleared","danger");
  }
    const handleUpperCaseClick = ()=>{
        // console.log("Upper Case was Clicked");
        let upper = text.toUpperCase();
        setText(upper);
        props.showAlert("Uppercase COnverted","warning");
    }

    const handleOnchange = (event)=>{
        
        setText(event.target.value);
    }

  return (
    <div className='container'>
        <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
      
  <div className="form-group">
    <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'black':'white', color:props.mode==='light'?'white':'black'}} value ={text} id="exampleFormControlTextarea1" onChange={handleOnchange}   rows="8"></textarea>
    <button className="btn btn-primary my-2 mx-2" onClick={handleUpperCaseClick}>Convert to Upper Case</button>
    <button className='btn btn-primary my-2 mx-2'onClick={handleLowerCaseClick}>Convert to LowerCase</button>
    <button className='btn btn-primary my-2 mx-2'onClick={handleClearTextClick}>Clear Text</button>
    
    <DropdownButton
      className='btn btn-primary my-2 mx-2'
      title="Select Color"
      id="dropdown-menu-align-right" 
      onSelect={dropDownSelect}
        >
              <Dropdown.Item eventKey="Red" >Red</Dropdown.Item>
              <Dropdown.Item eventKey="Yellow">Yellow</Dropdown.Item>
              <Dropdown.Item eventKey="Blue">Blue</Dropdown.Item>
              
      </DropdownButton>
  </div>

    
    <div className={`container my-2 text-${props.mode==='light'?'black':'white'}`}>
      <h1>Your Text Summary</h1>
      <p>{text.trim().split(" ").filter((element)=>{return element.length !== 0}).length } words,{text.length} Character</p>
      <p>You will need almost {(text.split(" ").filter((element)=>{return element.length !== 0}).length )*0.45} minutes to read this text</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </div>
  )
}
