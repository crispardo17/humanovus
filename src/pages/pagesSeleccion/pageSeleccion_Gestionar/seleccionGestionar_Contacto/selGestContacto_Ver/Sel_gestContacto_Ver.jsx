import Breadcrumb from "../../../../../components/breadcrumb/Breadcrumb"
import FormContactoVer from "../../../../../components/componentes_Seleccion/seleccionGestionarContacto/formContactoVer/FormContactoVer"
import Navbar from "../../../../../components/navbar/Navbar"
import Sidebar from "../../../../../components/sidebar/Sidebar"
import "./sel_gestContacto_Ver.css"

const Sel_gestContacto_Ver = () => {
  return (
    <div className="verContactar">
      <Sidebar />
      <div className="verContactarContainer">
      <Navbar />
       <div className="breadcrumb">
          <Breadcrumb/>
      </div>
          <FormContactoVer/>
      </div>
    </div>
  )
}


export default Sel_gestContacto_Ver

