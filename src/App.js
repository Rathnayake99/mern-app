import { useState } from "react";
import "./App.css";
import Main from "./Components/Main";
import { myData } from "./Data/myData";
import Movies from "./Components/Movies";

function App() {
  const [myVar, setMyVar] = useState("Main Page");

  const [myDataState, setMyDataState] = useState(myData);

  const [inputVal, setInputVal] = useState("");

  const clickHandle = () => {
    setMyVar("Home Page");
    setMyDataState([
      ...myDataState,
      {
        id: 1234 + myDataState.length,
        name: "pathum",
        city: "kurunagala",
        position: "react developer",
      },
    ]);
  };

  const mainBlock = myDataState.map(({ name, city, position, id }, index) => {
    return (
      <Main key={id + index} name={name} city={city} position={position} />
    );
  });

  return (
    <div className="App">
      <Movies />
      <h1>{myVar}</h1>
      <h1>{inputVal}</h1>
      <div className="main_block">{mainBlock}</div>
      <button onClick={clickHandle}>Click Me</button>
      <input
        type="text"
        onChange={(e) => {
          e.preventDefault();
          console.log(e);
          setInputVal(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
