import React,{useState} from 'react';

export default function TextForm(props) {
    
    const [text, setText] = useState("Enter text here");
    
    const handleLowerCaseClick = ()=>{
      // console.log("Upper Case was Clicked");
      let lower = text.toLowerCase();
      setText(lower);
  }
    const handleUpperCaseClick = ()=>{
        // console.log("Upper Case was Clicked");
        let upper = text.toUpperCase();
        setText(upper);
    }

    const handleOnchange = (event)=>{
        
        setText(event.target.value);
    }

  return (
    <div>
        <h1>{props.heading}</h1>
      
  <div className="form-group">
    <textarea className="form-control" value ={text} id="exampleFormControlTextarea1" onChange={handleOnchange}   rows="8"></textarea>
    <button className="btn btn-primary my-2" onClick={handleUpperCaseClick}>Convert to Upper Case</button>
    <button className='btn btn-secondary my-2 mx-2'onClick={handleLowerCaseClick}>Convert to LowerCase</button>
    
<div className="btn-group">
  <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="false" aria-expanded="true">
    Choose Color
  </button>
  <div className="dropdown-menu">
    
    <a className="dropdown-item text-danger" value="Red">Red</a>
    <a className="dropdown-item text-primary" value="Blue">Blue</a>
    
    <a className="dropdown-item text-success" value="Green">Green</a>
  </div>
</div>
  </div>

    
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length -1} words,{text.length} Character</p>
      <p>You will need almost {(text.split(" ").length -1)*0.45} minutes to read this text</p>
      <h3>Preview</h3>
      <p>{text}</p>
      </div>
    </div>
  )
}
