import "./sidebar.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import humaLogo from '../../assets/logos/humaLogo.png';
import ojoNovus from '../../assets/bg/ojonovus.png';
import  {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar" >
        <div className="top">
            <span className="logo"></span>
            <img className="humaLogo" src={humaLogo} alt="" />
        </div>
        <div className="center">
            <ul className="ulSidebar">
                <li>
                    <Link className="linkSidebar" to="/requerimiento" >
                        <button>
                            REQUERIMIENTOS
                            <ArrowDropDownIcon />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link className="linkSidebar" to="/seleccion" >
                        <button>
                            SELECCIÓN
                            <ArrowDropDownIcon />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link className="linkSidebar" to="/contratacion" >
                        <button>
                            CONTRATACIÓN
                            <ArrowDropDownIcon />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link className="linkSidebar" to="/planta" >
                        <button>
                            PLANTA
                            <ArrowDropDownIcon />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link className="linkSidebar" to="/configuracion" >
                        <button>
                            CONFIGURACIÓN
                            <ArrowDropDownIcon />
                        </button>
                    </Link>
                </li>
                <div className="ojo">
                <img className="ojoNovus" src={ojoNovus} alt="" />
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar 