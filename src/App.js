import "./App.css";
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <About />
      {/* <Resume /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}
