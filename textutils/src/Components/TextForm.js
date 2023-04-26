import React, {useState} from 'react'


export default function TextForm(props) {
    const changeUpperCase =()=>{
        // console.log("clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }

       const handelOnChange = (event) => {
        //  console.log("onchange" +text);
         setText(event.target.value)
       };

     const [text, setText] = useState("");
        // text = "new text"; // Wrong way to change the state
        //setText("new text"); // Correct way to change the state

  return (
    <div>
      <h1>{props.formHeading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handelOnChange} placeholder='Enter text here' id="myForm" rows="8"></textarea>
        <button className="btn btn-primary my-3" onClick={changeUpperCase}>Convert To Uppercase</button>
      </div>
    </div>
  );
}
