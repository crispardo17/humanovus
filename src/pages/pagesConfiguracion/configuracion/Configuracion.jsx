import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import BotonConfiguracion from "../../../components/componentes_Configuracion/botonesConfiguracion/BotonConfiguracion"
import DataTableConfi from "../../../components/componentes_Configuracion/datatableConfi/DataTableConfi"
import "./configuracion.css"

const Configuracion = () => {
  return (
    <div className="Configuracion">
      <Sidebar />
      <div className="configuracionContainer">
      <Navbar />
        <div className="breadcrumb">
          <Breadcrumb />
        </div>
        <div className="botonConfiguracion">
          <BotonConfiguracion />
        </div>
        <div className="dataTableConfi">
          <DataTableConfi />
        </div>
      </div>
    </div>
  )
}

export default Configuracion