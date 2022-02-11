import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="input" onSubmit={(e) => handleAdd(e)}>
      <input
        className="input_box"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        type="input"
        placeholder="Enter a task"
      />
      <button className="input_button" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
