import Breadcrumb from "../../../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../../../components/navbar/Navbar"
import Sidebar from "../../../../../components/sidebar/Sidebar"
import "./sel_gestEntrevistar.css"
import FormEntrevistar from "../../../../../components/componentes_Seleccion/seleccionGestionarEntrevista/formEntrevistar/FormEntrevistar"

const Sel_gestEntrevistar= () => {
  return (
    <div className="Sel_GestEntrevistar">
      <Sidebar/>
      <div className="sel_GestEntrevistarContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
         <FormEntrevistar/>
      </div>
    </div>
  )
}

export default Sel_gestEntrevistar