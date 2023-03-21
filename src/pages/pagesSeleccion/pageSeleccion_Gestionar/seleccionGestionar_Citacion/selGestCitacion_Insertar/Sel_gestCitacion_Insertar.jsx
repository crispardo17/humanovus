import Breadcrumb from "../../../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../../../components/navbar/Navbar"
import Sidebar from "../../../../../components/sidebar/Sidebar"
import "./sel_gestCitacion_Insertar.css"
import FormCitacionInsertar from "../../../../../components/componentes_Seleccion/seleccionGestionarCitacion/formCitacionInsertar/FormCitacionInsertar";

const Sel_gestCitacion_Insertar = () => {


  return (
    <div className="insertarCitacion">
      <Sidebar />
      <div className="insertarCitacionContainer">
      <Navbar />
       <div className="breadcrumb">
          <Breadcrumb/>
      </div>
          <FormCitacionInsertar/>      
      </div>
    </div>
  )
}


export default Sel_gestCitacion_Insertar

