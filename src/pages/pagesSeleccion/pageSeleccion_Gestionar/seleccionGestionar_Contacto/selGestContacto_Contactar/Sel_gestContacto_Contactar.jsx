import Breadcrumb from "../../../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../../../components/navbar/Navbar"
import Sidebar from "../../../../../components/sidebar/Sidebar"
import "./sel_gestContacto_Contactar.css"
import FormContactoContactar from "../../../../../components/componentes_Seleccion/seleccionGestionarContacto/formContactoContactar/FormContactoContactar"

const Sel_gestContacto_Contactar = () => {

  return (
    <div className="contactar">
      <Sidebar />
      <div className="contactarContainer">
      <Navbar />
       <div className="breadcrumb">
          <Breadcrumb/>
      </div>
       <FormContactoContactar/>
      </div>
    </div>
  )
}


export default Sel_gestContacto_Contactar

