import React, { useState } from "react";
import Body from "./Body";
import Footer from "./Footer";
import MyNavbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects"

function App() {
  return (
    <div>
      <MyNavbar />
      <Body />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
