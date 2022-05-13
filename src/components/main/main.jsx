import React from "react";
import ThemeContext from '../../context/ThemeContext';
import { useContext } from "react";

function Main() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme}>
      <p style={{
          width: "auto",
          height: "50px",
          color: "black",
          background: "lightblue",
          textAlign:"center",
          lineHeight: "50px",
          margin: "0px",
          }}
          > 
          Gana tu primer descuento registrando tu correo electronico <button style={{float:"right", background: "lightblue", border:"none", fontSize: "20px", marginRight: "20px"}}> X </button> 
      </p> 
      
    </div>
  );
}

export default Main;
