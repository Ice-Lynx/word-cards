import "./App.css";
import { FmComponent } from "./fm-component";
import React, { useState, useEffect, useRef } from "react";
import useDimensions from "react-cool-dimensions";
import disableScroll from "disable-scroll";
import penguin from "./icons/pinguino.svg";

function App() {
  useEffect(() => {
    disableScroll.on();
  }, []);
  const [count, setCount] = useState("");
  const { ref, width, height } = useDimensions({
    onResize: ({ width, height }) => {
      // Triggered whenever the size of the target is changed
    },
  });
  return (
    <div className="full-page-layout">
      <div className="header">
        Card dragged to {count}. Box-grid dimensions: {width} x {height}
      </div>

      <div className="grid-layout" ref={ref}>
        <div className="item1">1</div>
        <div className="item1">2</div>
        <div className="item1">3</div>
        <div className="item2">4</div>
        <div className="item2">
          <FmComponent
            onCountChange={setCount}
            boxGridWidth={width}
            boxGridHeight={height}
          />
        </div>
        <div className="item2">6</div>
        <div className="item1">7</div>
        <div className="item1">8</div>
        <div className="item1">9</div>
      </div>
      <div className="footer">By Icelynx</div>
    </div>
  );
}

export default App;
