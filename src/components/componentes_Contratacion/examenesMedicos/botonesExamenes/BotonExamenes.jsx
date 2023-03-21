import SearchIcon from '@mui/icons-material/Search';
import "./botonExamenes.css"
import  {Link} from "react-router-dom";

const BotonContratacion = ({ type }) => {
    let data;

  return (
    <div className="divExamenes" >
        <div className="examenesButton">
            <Link to="/contratacion/examenes_Medicos/insertar">
            <button className="buttonExa" >Insertar</button>
            </Link>
        </div>
        <div className="examenesButton">
            <Link to="/contratacion/examenes_Medicos/resultado">
            <button className="buttonExa" >Resultado</button>
            </Link>
        </div>
        <div className="examenesBuscar">
            <input className='buscarExamenes' type="text" placeholder="  Buscar.."/>
            <SearchIcon /> 
        </div>
    </div>
  )
}

export default BotonContratacion