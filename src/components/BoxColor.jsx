import { useRef, useEffect } from "react";

const BoxColor = ({ color, inputValue }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      const isMatch = inputValue.toLowerCase() === color.toLowerCase();
      boxRef.current.style.backgroundColor = isMatch ? color : "transparent";
      boxRef.current.style.color = isMatch ? "black" : color;
      boxRef.current.style.borderColor = color;
    }
  }, [inputValue, color]);

  return (
    <div ref={boxRef} className="box">
      <p>{inputValue.toLowerCase() === color ? `Yes, I'm ${color} color` : `I'm not a ${inputValue} color`}</p>
    </div>
  );
};

export default BoxColor;



