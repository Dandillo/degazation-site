import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Media from "./components/Media";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Media />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;