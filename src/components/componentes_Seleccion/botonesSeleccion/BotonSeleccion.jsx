import SearchIcon from '@mui/icons-material/Search';
import "./botonSeleccion.css"
import  {Link} from "react-router-dom";
import ModalDescartar from '../modal_EntDescartar/Modal_EntDescartar';
import { useModal } from "../../../hooks/useModal"

const BotonSeleccion = ({ type }) => {
    let data;

    const [isOpenModalDescartar, openModalDescartar, closeModalDescartar] = useModal(false);


  return (
    <div className="divSeleccion" >
        <div className="seleccionButton">
            <Link to="/seleccion/gestionar">
            <button className="buttonSel" >Gestionar</button>
            </Link>
        </div>
        <div className="seleccionButton">
            <Link to="/seleccion/perfil_cargo">
            <button className="buttonSel" >Perfil Cargo</button>
            </Link>
        </div>
        <div className="seleccionButton">
        <button className="buttonSel" onClick={openModalDescartar}>Descartar</button>
            <ModalDescartar isOpen={isOpenModalDescartar} closeModal={closeModalDescartar}>
                
            </ModalDescartar>
        </div>
        <div className="seleccionBuscar">
            <input className='buscarSeleccion' type="text" placeholder="     Buscar.."/>
            <SearchIcon /> 
        </div>
    </div>
  )
}

export default BotonSeleccion