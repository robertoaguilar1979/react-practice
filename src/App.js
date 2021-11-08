import "./App.css";
import { useState } from "react";

function App() {
  let [name, setName] = useState("mario");
  const [title, setTitle] = useState([
    { title: "hello world", id: 1 },
    { title: "hello planet", id: 2 },
    { title: "hello universe", id: 3 },
  ]);
  const handleClick = () => {
    setName("luigi");
    console.log(name);
  };

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <button onClick={handleClick}>click me</button>
      {title.map((title, index) => (
        <div key={title.id}>
          <h2>
            {index} - {title.title}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;
