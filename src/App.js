import React from "react";
import Button from "./components/Button";
import Result from "./components/Result";

const App = () => {
  return (
    <React.Fragment>
      <div className="result">
        <Result result={"計算結果"} />
      </div>
      <div className="button-wrapper">
        <div className="number">
          <div>
            <div className="upper">
              <Button text={"7"} />
              <Button text={"8"} />
              <Button text={"9"} />
            </div>
            <div className="middle">
              <Button text={"4"} />
              <Button text={"5"} />
              <Button text={"6"} />
            </div>
            <div className="lower">
              <Button text={"1"} />
              <Button text={"2"} />
              <Button text={"3"} />
            </div>
            <div className="buttom">
              <Button text={"0"} />
              <Button text={"AC"} />
              <Button text={"="} />
            </div>
          </div>
        </div>
      </div>

      <Button />
      <Result />
    </React.Fragment>
  );
};

export default App;
