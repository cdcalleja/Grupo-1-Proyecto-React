import './Banner.css';
import img4 from "./img/img4.jpg";
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext';

const Banner = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={theme}>
      <img src={img4} alt="" />
    </div>
  )
}

export default Banner