import SearchIcon from '@mui/icons-material/Search';
import "./botonSel_GestContacto.css"
import  {Link} from "react-router-dom";

const BotonSel_GestContacto = ({ type }) => {
    let data;

  return (
    <div className="divSel_GestContacto" >
        <div className="sel_GestContactoButton">
            <Link to="/seleccion/gestionar/contacto/contactar">
            <button className="buttonSel_GestContacto" >Contactar</button>
            </Link>
        </div>
        <div className="sel_GestContactoButton">
            <Link to="/seleccion/gestionar/contacto/ver">
            <button className="buttonSel_GestContacto" >Ver</button>
            </Link>
        </div>
        <div className="sel_GestContactoBuscar">
            <input className='buscarSel_GestContacto' type="text" placeholder="  Buscar.."/>
            <SearchIcon /> 
        </div>
    </div>
  )
}

export default BotonSel_GestContacto