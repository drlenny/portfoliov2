import React, { useState } from "react";
import Body from "./Greetings";
import Footer from "./Footer";
import MyNavbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <MyNavbar />
      <Body />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
