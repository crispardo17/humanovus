import Breadcrumb from "../../../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../../../components/navbar/Navbar"
import Sidebar from "../../../../../components/sidebar/Sidebar"
import "./sel_gestCitacion_Reprogramar.css"
import FormCitacionReprogramar from "../../../../../components/componentes_Seleccion/seleccionGestionarCitacion/formCitacionReprogramar/FormCitacionReprogramar";

const Sel_gestCitacion_Reprogramar = () => {

  return (
    <div className="reprogramarCitacion">
      <Sidebar />
      <div className="reprogramarCitacionContainer">
      <Navbar />
       <div className="breadcrumb">
          <Breadcrumb/>
      </div>
       <FormCitacionReprogramar/>
      </div>
    </div>
  )
}


export default Sel_gestCitacion_Reprogramar

