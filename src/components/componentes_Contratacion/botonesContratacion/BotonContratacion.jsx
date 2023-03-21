import SearchIcon from '@mui/icons-material/Search';
import "./botonContratacion.css"
import  {Link} from "react-router-dom";
import ModalGenerar from '../modal_Generar/Modal_Generar';
import ModalSeguridadSocial from '../modal_SeguridadSocial/Modal_SeguridadSocial';
import { useModal } from "../../../hooks/useModal"

const BotonContratacion = ({ type }) => {
    let data;

    const [isOpenModalGenerar, openModalGenerar, closeModalGenerar] = useModal(false);
    const [isOpenModalSeguridadSocial, openModalSeguridadSocial, closeModalSeguridadSocial] = useModal(false);

  return (
    <div className="divContratacion" >
        <div className="contratacionButton">
            <Link to="/contratacion/examenes_Medicos">
                <button className="buttonCont" >Examenes Medicos</button>
            </Link>
        </div>
        <div className="contratacionButton">
            <Link to="/contratacion/afiliaciones">
                <button className="buttonCont" >Afiliaciones</button>
            </Link>
        </div>
        <div className="contratacionButton">
            <Link to="/contratacion/documentos">
                <button className="buttonCont" >Documentos</button>
            </Link>
        </div>
        <div className="contratacionButton">
            <button className="buttonCont" onClick={openModalSeguridadSocial}>Seguridad Social</button>
            <ModalSeguridadSocial isOpen={isOpenModalSeguridadSocial} closeModal={closeModalSeguridadSocial}>
                
            </ModalSeguridadSocial>
        </div>
        <div className="contratacionButton">
            <Link to="/contratacion/contratar">
                <button className="buttonCont" >Contratar</button>
            </Link>  
        </div>
        <div className="contratacionButton">
            <button className="buttonCont" onClick={openModalGenerar}>Generar</button>
            <ModalGenerar isOpen={isOpenModalGenerar} closeModal={closeModalGenerar}>
                
            </ModalGenerar>
        </div>
        <div className="contratacionButton">
            <Link to="/contratacion/ver">
                <button className="buttonCont" >Ver</button>
            </Link>
        </div>
        <div className="contratacionButton">
            <Link to="/contratacion/finalizar">
                <button className="buttonCont" >Finalizar Proceso</button>
            </Link>
        </div>
        <div className="contratacionBuscar">
                <input className='buscarContratacion' type="text" placeholder="  Buscar.."/>
            <SearchIcon /> 
        </div>
    </div>
  )
}

export default BotonContratacion