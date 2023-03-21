import Breadcrumb from "../../../../../components/breadcrumb/Breadcrumb"
import FormCitacionVer from "../../../../../components/componentes_Seleccion/seleccionGestionarCitacion/formCitacionVer/FormCitacionVer"
import Navbar from "../../../../../components/navbar/Navbar"
import Sidebar from "../../../../../components/sidebar/Sidebar"
import "./sel_gestCitacion_Ver.css"

const Sel_gestCitacion_Ver = () => {
  return (
    <div className="verCitacion">
      <Sidebar />
      <div className="verCitacionContainer">
      <Navbar />
       <div className="breadcrumb">
          <Breadcrumb/>
      </div>
       <FormCitacionVer/>
      </div>
    </div>
  )
}


export default Sel_gestCitacion_Ver

