import React from 'react';
import img11 from "./img/img11.jpg";


const Banner = () => {
  return (
    <div style={{backgroundImage: `url(${img11})`, backgroundSize: "cover", backgroundPosition: "center", height: "50vh"}}>
      <h2 style={{ width:"570px", height: "60px", fontFamily:"Cormorant", fontStyle: "normal", fontWeight:"700,Bold", fontSize:"50px", lineHeight:"61px", textAlign:"center", margin:"0px"}}>Disfruta del otoño</h2>
      <h3 style={{ width:"570px", height: "30px", fontFamily:"Poppins", fontStyle: "normal", fontWeight:"300,Light", fontSize:"26px", lineHeight:"39px", textAlign:"center", margin:"20px"}}>descuentos en mercancia seleccionada</h3>
      <button id='productos'
      className = "Button" style={{ width:"200px", height: "45px", background: "orange", marginLeft:"150px", borderRadius:"5px",cursor:"pointer"
      }}
      >
      {" "}
      shop now{" "}
      </button>
    </div>
  )
}

export default Banner