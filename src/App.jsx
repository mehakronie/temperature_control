import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  const counthandler = () => {
    setcount(count + 1);
  };

  return (
    <>
      <div className="main-container">
        <div className="blue-container">
          <div
            className={count < 10 ? "temp-contain cold" : "temp-contain high"}
          >
            <main>{count}°C</main>
          </div>
          <section className="btn-container">
            <button onClick={counthandler}>+</button>
            <button
              onClick={() => {
                setcount(count - 1);
              }}
            >
              -
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
