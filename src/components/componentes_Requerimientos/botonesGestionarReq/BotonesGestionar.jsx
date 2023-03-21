import SearchIcon from '@mui/icons-material/Search';
import "./botonesGestionar.css"
import  {Link} from "react-router-dom";

const BotonGestionar = ({ type }) => {
    let data;

  return (
    <div className="divGestionar" >
        <div className="gestionarButton">
            <Link to="/requerimiento/gestionar/poblar">
            <button className="buttonGestionar" >Poblar</button>
            </Link>
        </div>
        <div className="gestionarButton">
            <Link to="/requerimiento/gestionar/base">
            <button className="buttonGestionar" >Base</button>
            </Link>
        </div>
        <div className="gestionarButton">
            <button className="buttonGestionar" >Cerrar Requerimiento</button>
        </div>
        <div className="gestionarButton">
            <Link to="/requerimiento/gestionar/kpi">
            <button className="buttonGestionar" >KPI</button>
            </Link>
        </div>
        <div className="gestionarBuscar">
            <input className='buscarGestionar' type="text" placeholder="  Buscar.."/>
            <SearchIcon /> 
        </div>
    </div>
  )
}

export default BotonGestionar