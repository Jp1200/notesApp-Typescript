import React, { ChangeEvent } from "react";

interface inputProps {
  submitQuery(input: string): void;
}

export const InputHandler: React.FC<inputProps> = ({ submitQuery }) => {
  const [input, setInput] = React.useState("");
  const updateInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const onSubmit = () => {
    submitQuery(input);
    setInput("");
  };
  return (
    <div>
      <input
        onChange={updateInput}
        value={input}
        type="text"
        name="note"
        placeholder="Input"
      ></input>
      <button onClick={onSubmit} type="submit">
        Submit
      </button>
    </div>
  );
};
