import SearchIcon from '@mui/icons-material/Search';
import "./botonSel_GestCitacion.css"
import  {Link} from "react-router-dom";

const BotonSel_GestCitacion = ({ type }) => {
    let data;

  return (
    <div className="divSel_GestCitacion" >
        <div className="sel_GestCitacionButton">
            <Link to="/seleccion/gestionar/citacion/ver">
            <button className="buttonSel_GestCitacion" >Ver</button>
            </Link>
        </div>
        <div className="sel_GestCitacionButton">
            <Link to="/seleccion/gestionar/citacion/insertar">
            <button className="buttonSel_GestCitacion" >Insertar</button>
            </Link>
        </div>
        <div className="sel_GestCitacionButton">
            <Link to="/seleccion/gestionar/citacion/reprogramar">
            <button className="buttonSel_GestCitacion" >Reprogramar</button>
            </Link>
        </div>
        <div className="sel_GestCitacionBuscar">
            <input className='buscarSel_GestCitacion' type="text" placeholder="  Buscar.."/>
            <SearchIcon /> 
        </div>
    </div>
  )
}

export default BotonSel_GestCitacion