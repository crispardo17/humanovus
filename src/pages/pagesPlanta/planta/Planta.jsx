import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import BotonPlanta from "../../../components/componentes_Planta/botonesPlanta/BotonPlanta"
import DataTablePlanta from "../../../components/componentes_Planta/datatablePlanta/DataTablePlanta"
import "./planta.css"

const Planta = () => {
  return (
    <div className="Planta">
      <Sidebar/>
      <div className="plantaContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div className="botonPlanta">
          <BotonPlanta />
        </div>
        <div className="dataTablePlanta">
          <DataTablePlanta />
        </div>
      </div>
    </div>
  )
}

export default Planta