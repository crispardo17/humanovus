import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../../components/navbar/Navbar"
import Sidebar from "../../../../components/sidebar/Sidebar"
import "./sel_gestReferenciaLab.css"
import FormGestionarRefLaboral from "../../../../components/componentes_Seleccion/seleccionGestionarRefLaboral/FormGestionarRefLaboral"

const Sel_gestReferenciaLab= () => {
  return (
    <div className="Sel_GestReferenciaLab">
      <Sidebar/>
      <div className="sel_GestReferenciaLabContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
          <FormGestionarRefLaboral/>
      </div>
    </div>
  )
}

export default Sel_gestReferenciaLab