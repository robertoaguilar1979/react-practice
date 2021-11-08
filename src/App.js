import "./App.css";
import { useState } from "react";

function App() {
  let [name, setName] = useState("mario");

  const handleClick = () => {
    setName("luigi");
    console.log(name);
  };

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App;
