import { createContext, useState } from "react";

const ThemeContext = createContext();

// const initialTheme = "light";




const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    const handleTheme = (e) =>{
        // console.log(e.target.value);
        if (theme === "light") {
          setTheme("dark");
        }else {
          setTheme("light");
        }
      };

    const data = {theme, handleTheme}

return (
    <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider> 
)
}

export {ThemeProvider}
export default ThemeContext;