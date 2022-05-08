import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Destinations from "./components/destinations/destinations";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
    </div>
  );
}

export default App;
