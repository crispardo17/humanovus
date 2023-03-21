import Breadcrumb from "../../../../../components/breadcrumb/Breadcrumb"
import FormEntrevistarEditar from "../../../../../components/componentes_Seleccion/seleccionGestionarEntrevista/formEntrevistarEditar/FormEntrevistarEditar"
import Navbar from "../../../../../components/navbar/Navbar"
import Sidebar from "../../../../../components/sidebar/Sidebar"
import "./sel_gestEntrevistaEditar.css"



const Sel_gestEntrevistaEditar = () => {
  return (
    <div className="Sel_GestEntrevistaEditar">
      <Sidebar/>
      <div className="sel_GestEntrevistaEditarContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
         <FormEntrevistarEditar/>
      </div>
    </div>
  )
}

export default Sel_gestEntrevistaEditar