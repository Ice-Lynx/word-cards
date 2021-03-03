import "./App.css";
import { FmComponent } from "./fm-component";
import { IceLynxLogo } from "./ice-lynx-logo";
import React, { useState } from "react";
import useDimensions from "react-cool-dimensions";

function App() {
  const [count, setCount] = useState("");
  const { ref, width, height} = useDimensions({
    onResize: ({ width, height}) => {
      // Triggered whenever the size of the target is changed
    },
  });
  return (
    <div className="full-page-layout">
      <div className="header">Card dragged to {count}. Box-grid dimensions: {width} x {height}</div>
      <div className="grid-layout" ref={ref}>
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">
          <FmComponent onCountChange={setCount} boxGridWidth={width} boxGridHeight={height} />
        </div>
        <div className="item">6</div>
        <div className="item">7</div>
        <div className="item">8</div>
        <div className="item">9</div>
      </div>
      <div className="footer">
        <IceLynxLogo />
      </div>
    </div>
  );
}

export default App;
