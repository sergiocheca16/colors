import React, { useState, useRef, useEffect } from 'react';

function boxColor ({color, value}) {
  const [classList, setClassList] = useState('');
  const boxRef = useRef(null);

  const boxCSS = {
    backgroundColor: classList.value == `box ${value}` ? color : null, // Color de fondo
    border: `1px solid ${color}`,
    color: color
  }

  
  useEffect(() => {
    setClassList(boxRef.current.classList)
  }, []);
  return (
    <>
    <div 
      ref={boxRef} 
      className={`box ${color}`}
      style={boxCSS}>
      {color === value ? <h2 style={{color: 'black'}}>Yes, I´m {value} color</h2> : <h2>I´m not a {value} color</h2> }
    </div> 
    </> 
  )
}
export default boxColor;  
