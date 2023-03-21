import SearchIcon from '@mui/icons-material/Search';
import "./botonesBase.css"
import  {Link} from "react-router-dom";

const BotonesBase = ({ type }) => {
    let data;

  return (
    <div className="divBase" >
        <div className="baseButton">
        <Link to="/requerimiento/gestionar/base/insertar">
            <button className="buttonBase" >Insertar</button>
            </Link>
        </div>
        <div className="baseButton">
            <Link to="/requerimiento/gestionar/base/modificar">
            <button className="buttonBase" >Modificar</button>
            </Link>
        </div>
        <div className="baseButton">
            <Link to="/requerimiento/gestionar/base/ver">
            <button className="buttonBase" >Ver</button>
            </Link>
        </div>
        <div className="baseButton">
            <Link to="/seleccion">
            <button className="buttonBase" >Selección</button>
            </Link>
        </div>
        <div className="baseBuscar">
            <input className='buscarBase' type="text" placeholder="      Buscar.."/>
            <SearchIcon /> 
        </div>
    </div>
  )
}

export default BotonesBase