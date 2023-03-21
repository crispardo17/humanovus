import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import FormNuevaCampaña from "../../../components/componentes_Configuracion/formNuevaCampaña/FormNuevaCampaña"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import "./config_NuevaCampaña.css"

const Config_NuevaCampaña = () => {
  return (
    <div className="nuevaCampaña">
      <Sidebar />
      <div className="nuevaCampañaContainer">
      <Navbar />
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <FormNuevaCampaña/>
      </div>
    </div>
  )
}


export default Config_NuevaCampaña

