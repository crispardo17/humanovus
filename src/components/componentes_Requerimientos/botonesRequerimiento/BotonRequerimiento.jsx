import SearchIcon from '@mui/icons-material/Search';
import "./botonRequerimiento.css"
import  {Link} from "react-router-dom";
import ModalAnular from '../modalAnular/ModalAnular';
import ModalAsignar from '../modalAsignar/ModalAsignar';
import { useModal } from "../../../hooks/useModal"

const BotonRequerimiento = ({ type }) => {
    let data;
 
    const [isOpenModalAnular, openModalAnular, closeModalAnular] = useModal(false);
    const [isOpenModalAsignar, openModalAsignar, closeModalAsignar] = useModal(false);

  return (
    <div className="boton" >
        <div className="left">
            <Link to="/requerimiento/insertar">
            <button className="buttonReq" >Insertar</button>
            </Link>
        </div>
        <div className="left">
            <Link to="/requerimiento/modificar">
            <button className="buttonReq" >Modificar</button>
            </Link>
        </div>
        <div className="left">
            <Link to="/requerimiento/ver">
            <button className="buttonReq" >Ver</button>
            </Link>
        </div>
        <div className="left">
            <button className="buttonReq" onClick={openModalAsignar}>Asignar</button>
            <ModalAsignar isOpen={isOpenModalAsignar} closeModal={closeModalAsignar}>
                
            </ModalAsignar>    
        </div>
        <div className="left">
            <button className="buttonReq" onClick={openModalAnular}>Anular</button>
            <ModalAnular isOpen={isOpenModalAnular} closeModal={closeModalAnular}>
                
            </ModalAnular>    
        </div>
        <div className="left">
            <Link to="/requerimiento/gestionar">
            <button className="buttonReq" >Gestionar</button>
            </Link>
        </div>
        <div className="reqBuscar">
            <input className='buscarReq' type="text" placeholder="     Buscar.."/>
            <SearchIcon /> 
        </div>
    </div>
  )
}

export default BotonRequerimiento