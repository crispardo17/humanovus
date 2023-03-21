import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../../components/navbar/Navbar"
import Sidebar from "../../../../components/sidebar/Sidebar"
import "./sel_gestReferenciaPers.css"
import FormGestionarRefPersonal from "../../../../components/componentes_Seleccion/seleccionGestionarRefPersonal/FormGestionarRefPersonal"

const Sel_gestReferenciaPers= () => {
  return (
    <div className="Sel_GestReferenciaPers">
      <Sidebar/>
      <div className="sel_GestReferenciaPersContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
          <FormGestionarRefPersonal/>
      </div>
    </div>
  )
}

export default Sel_gestReferenciaPers