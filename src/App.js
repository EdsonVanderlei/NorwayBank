import React from "react";
import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";

const App = () => {
  return (
    <div className="App">
        <Header/>
        <HomePage/>
        <Footer/>
    </div>
  )
}

export default App;
