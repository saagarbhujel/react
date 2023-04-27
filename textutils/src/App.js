import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";






function App() {
  const [mode, setMode] = useState('light')
  const [darkBtnTxt, setDarkBtnTxt] = useState('Enable DarkMode')

  const toggleMode = () =>{
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = "#0b0024";
    setDarkBtnTxt('Enble Light Mode')
  }
  else{
    setMode ('light')
    document.body.style.backgroundColor = 'white'
    setDarkBtnTxt('Enable Dark Mode')
  }
}

  return (
    <>
      {/* <Navbar titleName="TextUtils" about="About Us" /> */}
      {/* <Navbar/> */}
      <Navbar titleName="TextUtils" toggleMode={toggleMode} mode={mode} darkBtnTxt={darkBtnTxt} />
      <div className="container my-3 ">
        <TextForm formHeading="Enter the text to transform" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
