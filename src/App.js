import "./App.scss";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // button handleSubstraction
  const handleSubstract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  // Add Color
  let color = "#fff";
  if (count > 0) {
    color = "green";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "white";
  }

  return (
    <section className="counterapp --flex-center">
      <div className="container counter --card --center-all">
        <h1 className="--text-light">Counter App React</h1>
        <p
          className="count --my2 --text-md --text-light --fw-bold"
          style={{ color: color }}
        >
          {count}
        </p>
        <div className="buttons">
          <button className="--btn --btn-danger" onClick={handleSubstract}>
            - Substract
          </button>
          <button className="--btn --btn-white" onClick={handleReset}>
            ! Reset
          </button>
          <button className="--btn --btn-success" onClick={handleAdd}>
            + Add
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
