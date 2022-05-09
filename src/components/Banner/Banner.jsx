import React from 'react';
import img11 from "./img/img11.jpg";

const Banner = () => {
  return (
    <div>
      <button 
      className = "Button" style={{ width:"200px", height: "45px", top: "445px", left: "61px", borderRadius:"5px", position: "absolute", background: "orange"}}
      >
      {" "}
      ver aqui{" "}
      </button>
      <img className= "d-block w-100" src={img11} alt="" style= {{width: "1280px", height: "500px", position:"absolute", top: "185px", left: "0px"}}/>
      <h1 style={{ width:"570px", height: "60px", top:"310px", left:"55px", position:"absolute", fontFamily:"Cormorant", fontStyle: "normal", fontWeight:"700,Bold", fontSize:"50px", lineHeight:"61px"}}>Indumentaria para Ellos</h1>
    </div>
  )
}
export default Banner