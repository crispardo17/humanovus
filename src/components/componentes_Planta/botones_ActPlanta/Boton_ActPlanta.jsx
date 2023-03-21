import SearchIcon from '@mui/icons-material/Search';
import "./boton_ActPlanta.css"
import  {Link} from "react-router-dom";
import ModalCesionPat from '../Modal_CesionPat/Modal_CesionPat';
import { useModal } from "../../../hooks/useModal"

const Boton_ActPlanta = ({ type }) => {
    let data;

    const [isOpenModalCesionPat, openModalCesionPat, closeModalCesionPat] = useModal(false);

  return (
    <div className="divActPlanta" >
        <div className="actPlantaButton">
            <Link to="/planta/activos/modificar">
            <button className="buttonActPlanta" >Modificar</button>
            </Link>
        </div>
        <div className="actPlantaButton">
            <Link to="/planta/activos/ver">
            <button className="buttonActPlanta" >Ver</button>
            </Link>
        </div>
        <div className="actPlantaButton">
            <button className="buttonActPlanta" onClick={openModalCesionPat}>Cesion Patronal</button>
            <ModalCesionPat isOpen={isOpenModalCesionPat} closeModal={closeModalCesionPat}>
                
            </ModalCesionPat>  
        </div>
        <div className="actPlantaBuscar">
            <input className='buscarActPlanta' type="text" placeholder="  Buscar.."/>
            <SearchIcon /> 
        </div>
    </div>
  )
}

export default Boton_ActPlanta