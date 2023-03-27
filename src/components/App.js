import React from "react";
import About from "./About";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}



{/* write an <About> component here */}


function App() {
  let name = "Meridith"
  console.log(`${name} loves REACT!`)
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      {/* add your <About> component here */}
    </div>
  );
}

export default App;
