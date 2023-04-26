import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";





function App() {
  return (
    <>
      {/* <Navbar titleName="TextUtils" about="About Us" /> */}
      {/* <Navbar/> */}
      <Navbar titleName="TextUtils" />
      <div className="container my-3 ">
        <TextForm formHeading="Enter the text to transform" />
      </div>
    </>
  );
}

export default App;
