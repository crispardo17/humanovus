import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import FormNuevoCargo from "../../../components/componentes_Configuracion/formNuevoCargo/FormNuevoCargo"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import "./config_NuevoCargo.css"

const Config_NuevoCargo = () => {
  return (
    <div className="nuevoCargo">
      <Sidebar />
      <div className="nuevoCargoContainer">
      <Navbar />
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
          <FormNuevoCargo />
      </div>
    </div>
  )
}


export default Config_NuevoCargo

