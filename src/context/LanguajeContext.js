import { createContext, useState } from "react";

const LanguajeContext = createContext();


const initialLanguage = "es";
const translation = {
    es: {
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesion",
        buttonLogout: "Cerrar Sesion",
        headerTittle: "Sesion Cerrada",
        mainWelcome: "Bienvenido Usuari@",
        buttonInfo: "Cerrar",
        navtitle: "Ropa",
        navmen: "Hombre",
        navwomen: "Mujer",
        navkid: "Niño",
    },
    en: {
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Logout",
        headerTittle: "Closed Session",
        mainWelcome: "Welcome guest",
        buttonInfo: "Close",
        navtitle: "Clothes",
        navmen: "Men",
        navwomen: "Women",
        navkid: "Kid",
    },
    };
const LanguajeProvider = ({children}) => {
    

    const [language, setLanguage] = useState(initialLanguage);
    const [text, setText] = useState(translation[language]);

    const handleLanguage = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "es") {
        setLanguage("es");
        setText(translation.es)
    } else {
        setLanguage("en");
        setText(translation.en);
    }
    }
    
    const data = {text, handleLanguage};

    return  <LanguajeContext.Provider value={data}>{children}</LanguajeContext.Provider>;
}


export {LanguajeProvider}
export default LanguajeContext;