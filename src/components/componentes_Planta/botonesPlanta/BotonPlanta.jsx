import SearchIcon from '@mui/icons-material/Search';
import "./botonPlanta.css"
import  {Link} from "react-router-dom";

const BotonPlanta = ({ type }) => {
    let data;

  return (
    <div className="divPlanta" >
        <div className="plantaButton">
            <Link to="/planta/activos">
            <button className="buttonPlanta" >Activos</button>
            </Link>
        </div>
        <div className="plantaButton">
            <Link to="/planta/inactivos">
            <button className="buttonPlanta" >Inactivos</button>
            </Link>
        </div>
        <div className="plantaBuscar">
            <input className='buscarPlanta' type="text" placeholder="  Buscar.."/>
            <SearchIcon /> 
        </div>
    </div>
  )
}

export default BotonPlanta