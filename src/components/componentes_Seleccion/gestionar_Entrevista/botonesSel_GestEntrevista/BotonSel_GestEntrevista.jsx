import SearchIcon from '@mui/icons-material/Search';
import "./botonSel_GestEntrevista.css"
import  {Link} from "react-router-dom";

const BotonSel_GestEntrevista = ({ type }) => {
    let data;

  return (
    <div className="divSel_GestEntrevista" >
        <div className="sel_GestEntrevistaButton">
            <Link to="/seleccion/gestionar/entrevista/entrevistar">
            <button className="buttonSel_GestEntrevista" >Entrevistar</button>
            </Link>
        </div>
        <div className="sel_GestEntrevistaButton">
            <Link to="/seleccion/gestionar/entrevista/ver">
            <button className="buttonSel_GestEntrevista" >Ver</button>
            </Link>
        </div>
        <div className="sel_GestEntrevistaButton">
            <Link to="/seleccion/gestionar/entrevista/editar">
            <button className="buttonSel_GestCitacion" >Editar</button>
            </Link>
        </div>
        <div className="sel_GestEntrevistaButton">
            <Link to="/seleccion/gestionar/entrevista/descartar">
            <button className="buttonSel_GestEntrevista" >Descartar</button>
            </Link>
        </div>
        <div className="sel_GestEntrevistaBuscar">
            <input className='buscarSel_GestEntrevista' type="text" placeholder="  Buscar.."/>
            <SearchIcon /> 
        </div>
    </div>
  )
}

export default BotonSel_GestEntrevista