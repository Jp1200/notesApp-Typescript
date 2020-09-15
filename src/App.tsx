import React from "react";
import { InputHandler } from "./Input";
import { useSelector, useDispatch } from "react-redux";
import { InputState } from "./inputReducer";
import "./App.css";

function App() {
  const inputs = useSelector<InputState, InputState["inputs"]>(
    (state) => state.inputs
  );
  const dispatch = useDispatch();
  const addInput = (input: string) => {
    dispatch({ type: "ADD_INPUT", payload: input });
  };
  return (
    <>
      <InputHandler submitQuery={addInput} />
      <hr />
      <ul>
        {inputs.map((input) => {
          return <li key={input}>{input}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
