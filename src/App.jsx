import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(true);

  return (
    <>
      <div className="bloc">
        <div>
          <p>ON</p>
          <p>ON</p>
          <p>ON</p>
        </div>
        <div className="right">
          <p>OFF</p>
          <p>OFF</p>
          <p>OFF</p>
        </div>
        <div className="bigred">
          <span>NO WAY !</span>
        </div>
      </div>
    </>
  );
};

export default App;
