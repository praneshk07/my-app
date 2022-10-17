import React, { useState } from "react";
// usestate is a hook , search react hook

export default function TextForm(props) {
  const handleUpclick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
    const handleLowclick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleClear = (event) => {
    console.log("clear click");
    setText(event.target.value);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const [text, setText] = useState("enter the text here");
  return (
    <>
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>

        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="4"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleLowclick}>
        Convert to lowercase
      </button>
      <button className="btn btn-danger mx-3" onClick={handleClear}>
        Clear  text
      </button>
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">
        Speak
        </button>

    </div>
    <div className="container my-3">
        <h2>Final summary</h2>
        <p><b>{text.split(" ").length}</b> words and  <b>{text.length}</b> characters  </p>
        <p>{.008*text.split(" ").length} time to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
