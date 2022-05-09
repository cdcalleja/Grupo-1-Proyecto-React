import React from 'react'
import {equis} from "./img/equis"

function main() {
  return (
    <div>
        main <button className = "Button"  style={{width: "1280px", height: "50px", left: "0px", top: "0px", position: "absolute", color:"orange"}}
            >
            {" "}
            Gana tu primer descuento registrado tu correo electronico{" "} </button>
            <img className= "d-block w-100" src={equis} alt="Cerrar" style={{width:"16px", height:"16px",left:"1209px", top:"17px", position:"absolute", border: "2px", solid: "#1f1f1f"}}/>
    </div>
  )
}

export default main