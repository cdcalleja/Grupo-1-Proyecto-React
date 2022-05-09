import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";




const ModoOscuro = () => {
    const { theme, handleTheme } = useContext(ThemeContext)


    return (
        <header className={theme}>
                <button onClick={handleTheme} style={{ backgroundColor: "transparent", border: "none", marginLeft: "100px" }}>
                    {theme === "light" ? (<FontAwesomeIcon className="icon" icon={faSun} />) :
                        (<FontAwesomeIcon className="icon" icon={faMoon} />)
                    }
                </button>

            
        </header>
    )
}

export default ModoOscuro