import React, { useState } from 'react'


export default function Text(props) {
  const handleUpClick = () => {
    // console.log("hellow"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleDownClick = () => {
    // console.log("changed");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success")
  }
  const handle = () => {
    // console.log("changed");
    let clear = " ";
    setText(clear);
    props.showAlert("Screen has beeen cleared","success")
  }
  const [text, setText]=useState('')

  // const removeExtraSpace = (s) => s.trim().split(/ +/).join(' ');
  return (
    <>
      <div className="container" style={{color:props.mode==="dark"?'white':'black'}}>
        <h2>{props.paragraph}</h2>
        <div className="mb-3">
        {<textarea className="form-control" style={{backgroundColor:props.mode==="dark"?'grey':'white',color:props.mode==="dark"?'white':'black'}}value={text} onChange={handleOnChange} id="textArea" rows="9"></textarea> }
        </div>
        <button disabled ={text.length===0}className="btn btn-primary  mx-2" onClick={handleUpClick}>Upper case</button>

        <button disabled ={text.length===0} className="btn btn-primary mx-2 " onClick={handleDownClick}>Lower Case</button>
        <button  disabled ={text.length===0}className="btn btn-primary mx-2 " onClick={handle}>Clear</button>
       


      </div>

      <div className="container my-10" style={{color:props.mode==="dark"?'white':'black'}}>
        <h3>Word and character count:</h3>
        <p> {text.split(' ').filter((element) =>{ return element.length!==0}).length}   words  {text.length}   character</p>
        <h5>Time taken:</h5>
        <p>{text.split(" ").filter((element) =>{ return element.length!==0}).length * 0.008}   minutes</p>
      </div>
    </>
  );
}


