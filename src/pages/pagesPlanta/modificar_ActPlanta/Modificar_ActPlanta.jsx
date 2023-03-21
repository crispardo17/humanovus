import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import Pestañas_ModificarActPlanta from "../../../components/componentes_Planta/pestañas_ModificarActPlanta/Pestaña_ModificarActPlanta"
import "./modificar_ActPlanta.css"

const Modificar_ActPlanta = () => {
  return (
    <div className="Modificar_ActPlanta">
      <Sidebar/>
      <div className="modificar_ActPlantaContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div className="pestañaModificarPlanta">
            <Pestañas_ModificarActPlanta/>
        </div>
      </div>
    </div>
  )
}

export default Modificar_ActPlanta