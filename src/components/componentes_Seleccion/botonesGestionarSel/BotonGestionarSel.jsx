import SearchIcon from '@mui/icons-material/Search';
import "./botonGestionarSel.css"
import Modal_EntDescartar from '../modal_EntDescartar/Modal_EntDescartar';
import { useModal } from "../../../hooks/useModal"
import  {Link} from "react-router-dom";

const BotonGestionarSel = ({ type }) => {
    let data;

    const [isOpenModal_EntDescartar, openModal_EntDescartar, closeModal_EntDescartar] = useModal(false);

  return (
    <div className="divGestSel" >
        <div className="gestSelButton">
            <Link to="/seleccion/gestionar/contacto">
            <button className="buttonGestSel" >Contacto</button>
            </Link>
        </div>
        <div className="gestSelButton">
            <Link to="/seleccion/gestionar/citacion">
            <button className="buttonGestSel" >Citaciones</button>
            </Link>
        </div>
        <div className="gestSelButton">
            <Link to="/seleccion/gestionar/entrevista">
            <button className="buttonGestSel" >Entrevista</button>
            </Link>
        </div>
        <div className="gestSelButton">
            <Link to="/seleccion/gestionar/referencia_personal">
            <button className="buttonGestSel" >Referenciacion</button>
            </Link>
        </div>
        <div className="gestSelButton">
            <Link to="/seleccion/gestionar/referencia_laboral">
            <button className="buttonGestSel" >Exp Laboral</button>
            </Link>
        </div>
        <div className="gestSelButton">
        <button className="buttonGestSel" onClick={openModal_EntDescartar}>Descartar</button>
            <Modal_EntDescartar isOpen={isOpenModal_EntDescartar} closeModal={closeModal_EntDescartar}>
                
            </Modal_EntDescartar> 
        </div>
        <div className="gestSelBuscar">
            <input className='buscarGestSel' type="text" placeholder="  Buscar.."/>
            <SearchIcon /> 
        </div>
    </div>
  )
}

export default BotonGestionarSel