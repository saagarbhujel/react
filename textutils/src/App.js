import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";






function App() {
  const [mode, setMode] = useState('light')
  const [darkBtnTxt, setDarkBtnTxt] = useState('Enable DarkMode')

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode = () =>{
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = "#0b0024";
    setDarkBtnTxt('Enble Light Mode')
    showAlert('Dark mode has been enabled','success')
  }
  else{
    setMode ('light')
    document.body.style.backgroundColor = 'white'
    setDarkBtnTxt('Enable Dark Mode')
    showAlert("Light mode has been enabled", "success");

  }
}

  return (
    <>
      {/* <Navbar titleName="TextUtils" about="About Us" /> */}
      {/* <Navbar/> */}
      <Navbar titleName="TextUtils" toggleMode={toggleMode} mode={mode} darkBtnTxt={darkBtnTxt} />
      <Alert alert={alert}/>
      <div className="container my-3 ">
        <TextForm showAlert={showAlert} formHeading="Enter the text to transform" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
