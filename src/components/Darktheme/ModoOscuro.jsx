

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./darktheme.css";
import { useState } from "react";

const ModoOscuro = () => {
    //   const toggleBtn = document.querySelector(".toggle-btn");
    const html = document.documentElement;
    const moon = <FontAwesomeIcon className="icon" icon={faMoon} />;
    const sun = <FontAwesomeIcon className="icon" icon={faSun} />;

    //   Estados con useState
    const [icon, setIcon] = useState(sun);
    const [darkMode, setDarkMode] = useState(false);

    const darkTheme = {
        main: "#737660",
        secondary: "#dfcece",
    };

    const lightTheme = {
        main: "#dfcece",
        secondary: "#737660",
    };

    function changeTheme(themeObject) {
        html.style.setProperty("--main-clr", themeObject.main);
        html.style.setProperty("--secondary-clr", themeObject.secondary);
        // toggleBtn.innerHTML = icon;   -> Evitar

        // Esto me cambia el icono segun el true o false de darkMode
        if (darkMode) {
            setIcon(sun);
            setDarkMode(false);
        } else {
            setIcon(moon);
            setDarkMode(true);
        }
    }

    function isDarkTheme() {
        if (
            getComputedStyle(html).getPropertyValue("--main-clr") === "#737660" &&
            getComputedStyle(html).getPropertyValue("--secondary-clr") === "#dfcece"
        ) {
            return true;
        } else return false;
    }

    //   Funcion que se le pasa al onClick del button
    const hacerClick = () => {
        if (isDarkTheme()) {
            changeTheme(lightTheme, moon);
        } else {
            changeTheme(darkTheme, sun);
        }
    };

    return (
        <div className="darktheme">
            <button className="toggle-btn" onClick={hacerClick}>
                {icon}
            </button>
        </div>
    );
};

export default ModoOscuro;
