import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import ContactUs from '../src/Components/Pages/ContactUs'
import AboutUs from '../src/Components/Pages/AboutUs'
import Appbar from "./Components/comman/Appbar";
import DomesticTravel from '../src/Components/Pages/DomesticTravel'
import Footer from "./Components/Pages/Footer";


const App = () => {
  return (
    <Router>
      <Appbar/>
      <Routes>
        {/* Root Route */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/domesticTravel" element={<DomesticTravel />} />
      </Routes>
      <Footer/> 
    </Router>
  );
};

export default App;
