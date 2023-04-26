import React, {useState} from 'react'


export default function TextForm(props) {
    const changeUpperCase =()=>{
        // console.log("clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
     
     const changeLowerCase =()=>{
        let newText = text.toLowerCase()
        setText(newText)
     }

     const capitalize = ()=>{
        // const word = "sagar bhujel"
        const newText = text.split(" ")
        // console.log(newText)
        for(let i=0; i<newText.length; i++){
           if (newText[i]) {
             newText[i] = newText[i][0].toUpperCase() + newText[i].substring(1).toLowerCase();
           }

        }
        setText(newText.join(" "))
        // setText(newText)
        // console.log(newText)
     }

     const sentenceCase =()=>{
        // const newText = text.toLowerCase()
       const newText = text
         .split(/[.?!]\s+/)
         .map(
           (sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
         );
       
       setText(newText.join(". "))

       
    //   console.log(newText)
     }

     const clearInput = ()=>{
        // const newText = text
        setText(" ")
     }

       const handelOnChange = (event) => {
        //  console.log("onchange" +text);
         setText(event.target.value)
       };

     const [text, setText] = useState("");
        // text = "new text"; // Wrong way to change the state
        //setText("new text"); // Correct way to change the state

  return (
    <>
      <div className="container">
        <h1>{props.formHeading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control w-50  "
            value={text}
            onChange={handelOnChange}
            placeholder="Enter text here"
            id="myForm"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-3 mx-1" onClick={sentenceCase}>
            Sentence Case
          </button>
          <button
            className="btn btn-primary my-3 mx-1"
            onClick={changeUpperCase}
          >
            Convert To Uppercase
          </button>
          <button
            className="btn btn-primary my-3 mx-1"
            onClick={changeLowerCase}
          >
            Convert To Lowercase
          </button>
          <button className="btn btn-primary my-3 mx-1" onClick={capitalize}>
            Capitalize Case
          </button>

          <button className="btn btn-primary my-3 mx-1" onClick={clearInput}>
            Clear
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Text Summary</h2>
        <p>
          {text === "" ? "0" : text.split(" ").length} words and {text.length}{" "}
          characters.
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
