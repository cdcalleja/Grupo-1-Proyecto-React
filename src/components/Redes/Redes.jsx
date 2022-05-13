import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./redes.css";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
const Redes = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
    <ul className="social_icon">
 
    <li><a href="/"><FontAwesomeIcon icon={faFacebook} size="xl" style={{height:"40px", width:"40px"}}/></a></li>
    <li><a href="/"><FontAwesomeIcon icon={faTwitter} size="xl" style={{height:"40px", width:"40px"}}/></a></li>
    <li><a href="/"><FontAwesomeIcon icon={faLinkedin} size="xl" style={{height:"40px", width:"40px"}}/></a></li>
    <li><a href="/"><FontAwesomeIcon icon={faInstagram} size="xl" style={{height:"40px", width:"40px"}}/></a></li>
    <li><a href="/"><FontAwesomeIcon icon={faYoutube} size="xl" style={{height:"40px", width:"40px"}}/></a></li>
</ul> 
    </div>
  );
};

export default Redes;
