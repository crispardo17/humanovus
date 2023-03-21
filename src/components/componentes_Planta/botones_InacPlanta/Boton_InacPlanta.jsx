import SearchIcon from '@mui/icons-material/Search';
import "./boton_InacPlanta.css"
import  {Link} from "react-router-dom";

const Boton_InacPlanta = ({ type }) => {
    let data;

  return (
    <div className="divInacPlanta" >
        <div className="inacPlantaButton">
            <Link to="/planta/inactivos/ver">
            <button className="buttonInacPlanta" >Ver</button>
            </Link>
        </div>
        <div className="inacPlantaBuscar">
            <input className='buscarInacPlanta' type="text" placeholder="  Buscar.."/>
            <SearchIcon /> 
        </div>
    </div>
  )
}

export default Boton_InacPlanta