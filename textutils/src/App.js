import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";





function App() {
  return (
    <>
      {/* <Navbar titleName="TextUtils" about="About Us" /> */}
      {/* <Navbar/> */}
      <Navbar titleName="TextUtils" />
      <div className="container my-3 ">
        {/* <TextForm formHeading="Enter the text to transform" /> */}
        <About/>
      </div>
    </>
  );
}

export default App;
