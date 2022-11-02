import { useState } from "react";
import Introdcution from "./components/Introduction";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App font-inter">
      <Introdcution />
    </div>
  );
}

export default App;
