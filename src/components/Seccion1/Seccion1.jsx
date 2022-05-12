import './seccion1.css';
import img from './Img/presentacion.jpg';

const Seccion1 = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <img src={img} className='img-fluid' alt='presentacion' />
        </div>
        <div className='col-12 fs-6 text col-md-6 fs-4 text'>
          <div className='Nosotros'>
            <h2>Nosotros</h2>
            <p>Desde un principio, nuestros antepasados, nos heredaron su pasión e inspiración en la sastrería italiana y su combinación con los textiles de todo el mundo, logrando así una clidad única en sus prendas. <br /> Nuestro objetivo es llevar al cliente todo el aprendizaje que obtuvimos, creando así una variedad de ropa exclusiva y única en todo el mundo. <br /> Desde las etapas iniciales de elección de telas hasta la presentación de una prenda, logramos que estas aporten una imágen única para el cliente. <br /> Nuestros productos son compañeros de estilo de vida que acompañarán a las generaciones futuras y las suyas.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seccion1