import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import "./seleccion_PerfilCargo.css"
import FormPerfilCargo from "../../../components/componentes_Seleccion/seleccionPerfilCargo/FormPerfilCargo"

const seleccion_PerfilCargo = () => {
  return (
    <div className="selPerfilCargo">
      <Sidebar/>
      <div className="perfilCargoContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <FormPerfilCargo/>
      </div>
    </div>
  )
}

export default seleccion_PerfilCargo