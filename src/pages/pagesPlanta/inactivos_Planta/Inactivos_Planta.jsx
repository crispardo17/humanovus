import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import Boton_InacPlanta from "../../../components/componentes_Planta/botones_InacPlanta/Boton_InacPlanta"
import DataTable_InactPlanta from "../../../components/componentes_Planta/datatable_InacPlanta/DataTable_InacPlanta"
import "./inactivos_Planta.css"

const Inactivos_Planta = () => {
  return (
    <div className="Inactivos_Planta">
      <Sidebar/>
      <div className="inactivos_PlantaContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div className="botonPlanta">
          <Boton_InacPlanta />
        </div>
        <div className="dataTableCont">
          <DataTable_InactPlanta />
        </div>
      </div>
    </div>
  )
}

export default Inactivos_Planta