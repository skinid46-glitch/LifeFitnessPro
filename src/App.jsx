import React from "react";
import Navbar from "./components/NavBar";
import HeroSection from "./sections/HeroSection"
import HeadLine from "./sections/HeadLine";
import Services from "./sections/Services";
import Transformation from "./sections/Transformation";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <HeadLine/>
      <Services/>
      <Transformation/>
      <Footer/>
    </>
  )
}

export default App;