# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





APP

// import useLocalStorage from "use-local-storage";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

//   const modoOscuro = localStorage.getItem('modooscuro');
// console.log(modoOscuro);

// const [theme, setTheme] = useLocalStorage("theme", "light");

//   const switchTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
  // };
// const icono = <FontAwesomeIcon className="icon" icon={faLightbulb} />;

    // // <div className= {modoOscuro === 'on' ? "--secondary-clr" : "--main-clr"}>
    //   // <div className="App" data-theme={theme}>
    //             {/* <button onClick={switchTheme} >
    //            {icono}  Switch  {theme === "light" ? "dark" : "light"}
    //   </button>
    //   <br /><br /><br /> */}
    //   {/* <ModoOscuro /> */}



    MODO OSCURO

    

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
// import "./darktheme.css";
// import { useState } from "react";



// const ModoOscuro = () => {
//     //   const toggleBtn = document.querySelector(".toggle-btn");
//     const html = document.documentElement;
//     const moon = <FontAwesomeIcon className="icon" icon={faMoon} />;
//     const sun = <FontAwesomeIcon className="icon" icon={faSun} />;

//     //   Estados con useState
//     const [icon, setIcon] = useState(sun);
//     const [darkMode, setDarkMode] = useState(false);

//     const darkTheme = {
//         main: "#737660",
//         secondary: "#dfcece",
//     };

//     const lightTheme = {
//         main: "#dfcece",
//         secondary: "#737660",
//     };

//     function changeTheme(themeObject) {
//         html.style.setProperty("--main-clr", themeObject.main);
//         html.style.setProperty("--secondary-clr", themeObject.secondary);
//         // toggleBtn.innerHTML = icon;   -> Evitar

//         // Esto me cambia el icono segun el true o false de darkMode
//         if (darkMode) {
//             setIcon(sun);
//             setDarkMode(false);
//         } else {
//             setIcon(moon);
//             setDarkMode(true);
//         }
//     }

//     function isDarkTheme() {
//         if (
//             getComputedStyle(html).getPropertyValue("--main-clr") === "#737660" &&
//             getComputedStyle(html).getPropertyValue("--secondary-clr") === "#dfcece"
//         ) {
//             return true;
//         } else return false;
//     }

//     //   Funcion que se le pasa al onClick del button
//     const hacerClick = () => {
//         if (isDarkTheme())         {
//             localStorage.setItem('modooscuro', 'on');
//             changeTheme(lightTheme, moon);
//         } else {
//             localStorage.setItem('modooscuro', 'off');

//             changeTheme(darkTheme, sun);
//         }
//     };

//     return (
//         <div className="darktheme">
//             <button className="toggle-btn" onClick={hacerClick}>
//                 {icon}
//             </button>
//         </div>
//     );
// };

// export default ModoOscuro;