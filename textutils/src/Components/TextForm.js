import React, { useState } from "react";

export default function TextForm(props) {

  //upper case
  const changeUpperCase = () => {
    // console.log("clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Upper Case', 'success')
  };

  //lower case
  const changeLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted To Lower Case', 'success')
  };

  //capitalize case
  const capitalize = () => {
    // const word = "sagar bhujel"
    const newText = text.split(" ");
    // console.log(newText)
    for (let i = 0; i < newText.length; i++) {
      if (newText[i]) {
        newText[i] =
          newText[i][0].toUpperCase() + newText[i].substring(1).toLowerCase();
      }
    }
    setText(newText.join(" "));
    // setText(newText)
    // console.log(newText)
    props.showAlert('Converted to Capitalize Case','success')
  };

  //sentence case
  const sentenceCase = () => {
    // const newText = text.toLowerCase()
    const newText = text
      .split(/[.?!]\s+/)
      .map(
        (sentence) =>
          sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
      );

    setText(newText.join(". "));
    props.showAlert("Converted to Sentence Case", "success");


    //   console.log(newText)
  };

  //delete or clear the text area
  const clearInput = () => {
    // const newText = text
    setText("");
    props.showAlert("Text has been Cleared", "warning");

  };

  //copy to clip board
  const copyToClipboard = ()=>{
    let newText = document.getElementById('myForm')
    navigator.clipboard.writeText(newText.value)
    document.getSelection().removeAllRanges()
    props.showAlert("Copied to ClipBoard.", "success")
  }

  const handelOnChange = (event) => {
    //  console.log("onchange" +text);
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  //setText("new text"); // Correct way to change the state

  return (
    <>
      <div
        className="container text-center"
        style={{
          color: props.mode === "dark" ? "white" : "#0b0024",
        }}
      >
        <h1>{props.formHeading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control w-75 mx-auto "
            value={text}
            onChange={handelOnChange}
            placeholder="Enter text here "
            id="myForm"
            rows="8"
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(50 48 56)",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={sentenceCase}>
            Sentence Case
          </button>
          <button
            disabled={text.length===0}
            className="btn btn-primary my-3 mx-1"
            onClick={changeUpperCase}
          >
            Convert To Uppercase
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary my-3 mx-1 my-1"
            onClick={changeLowerCase}
          >
            Convert To Lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-3 mx-1 my-1" onClick={capitalize}>
            Capitalize Case
          </button>

          <button disabled={text.length===0} className="btn btn-primary my-3 mx-1 my-1" onClick={copyToClipboard}>
            Copy
          </button>

          <button disabled={text.length===0} className="btn btn-primary my-3 mx-1 my-1" onClick={clearInput}>
            Clear
          </button>

        </div>
      </div>
      <div
        className="container text-center"
        style={{
          color: props.mode === "dark" ? "white" : "#0b0024",
        }}
      >
        <h2>Text Summary</h2>
        <p>
          {text === "" ? "0" : text.split(/\s+/).filter((t)=>t!=="").length} words and {text.replace(/\s/g, '').length}
          characters.
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview.."}
        </p>
      </div>
    </>
  );
}
