import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./botonConfiguracion.css"
import  {Link} from "react-router-dom";

const BotonConfiguracion = ({ type }) => {
    let data;

  return (
    <div className="divConfig" >
        <div className="configButton">
            <Link to="/configuracion/nueva_campaña">
            <button className="buttonConfig" >Nueva Campaña</button>
            </Link>
        </div>
        <div className="configButton">
            <Link to="/configuracion/nuevo_cargo">
            <button className="buttonConfig" >Nuevo Cargo</button>
            </Link>
        </div>
        <div className="configButton">
            <Link to="/configuracion/perfil_cargo">
            <button className="buttonConfig" >Perfil Cargo</button>
            </Link>
        </div>
        <div className="configButton">
            <Link to="/configuracion/perfil_cargo">
            <button className="buttonConfig" >Lista de Cargos</button>
            </Link>
        </div>
        <div className="configBuscar">
            <input className='buscarConfig' type="text" placeholder="     Buscar.."/>
            <SearchIcon /> 
        </div>
    </div>
  )
}

export default BotonConfiguracion