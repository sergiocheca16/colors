import { useRef, useState } from "react";
import BoxColor from "./BoxColor";

const colors = ["red", "green", "pink", "yellow", "purple", "white", "blue", "aqua", "olive"];

function MyForm() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handleChange = () => {
    setInputValue(inputRef.current.value);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Escribe un color"
        onChange={handleChange}
      />
      <div className="container">
        {colors.map((color, index) => (
          <BoxColor key={index} color={color} inputValue={inputValue} />
        ))}
      </div>
    </div>
  );
};

export default MyForm;


