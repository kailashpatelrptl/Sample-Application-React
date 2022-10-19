import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase", "success");
  }
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase", "success");
  }

  const handleClearClick = () => {
    let newText = ('');
    setText(newText)
    props.showAlert("Text Cleared", "success");
  }

  const handleCapitalizeWord = () => {
    let arrText = text.split(" ");
    for (let i = 0; i < arrText.length; i++) {
      arrText[i] = arrText[i].charAt(0).toUpperCase() + arrText[i].slice(1);
    }
    let newText = arrText.join(" ");
    setText(newText)
    props.showAlert("Text capatalize", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState("Enter here");

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <div className="my-3">
          <h3>{props.textlabel}</h3>
          {/* <label htmlFor="myBox" className="form-label">{props.textlabel}</label> */}
          <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Convert to Uppercase</button>
          <button type="button" onClick={handleLowerClick} className="btn btn-primary mx-2 my-2">Convert to Lowercase</button>
          <button type="button" onClick={handleClearClick} className="btn btn-primary mx-2 my-2">Clear text</button>
          <button type="button" onClick={handleCapitalizeWord} className="btn btn-primary mx-2 my-2">Capitalize Word</button>


        </div>
      </div>

      <div className="container my-4" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} charactors</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>

      </div>
    </>
  )
}
