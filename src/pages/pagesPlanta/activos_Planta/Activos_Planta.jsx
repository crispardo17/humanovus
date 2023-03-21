import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import Boton_ActPlanta from "../../../components/componentes_Planta/botones_ActPlanta/Boton_ActPlanta"
import DataTable_ActPlanta from "../../../components/componentes_Planta/datatable_ActPlanta/DataTable_ActPlanta"
import "./activos_Planta.css"

const Activos_Planta = () => {
  return (
    <div className="Activos_Planta">
      <Sidebar/>
      <div className="activos_PlantaContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div className="botonPlanta">
          <Boton_ActPlanta />
        </div>
        <div className="dataTableCont">
          <DataTable_ActPlanta />
        </div>
      </div>
    </div>
  )
}

export default Activos_Planta