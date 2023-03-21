import Breadcrumb from "../../../../../components/breadcrumb/Breadcrumb"
import FormEntrevistarVer from "../../../../../components/componentes_Seleccion/seleccionGestionarEntrevista/formEntrevistarVer/FormEntrevistarVer"
import Navbar from "../../../../../components/navbar/Navbar"
import Sidebar from "../../../../../components/sidebar/Sidebar"
import "./sel_gestEntrevistaVer.css"


const Sel_gestEntrevistaVer = () => {
  return (
    <div className="Sel_GestEntrevistaVer">
      <Sidebar/>
      <div className="sel_GestEntrevistaVerContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
         <FormEntrevistarVer/>
      </div>
    </div>
  )
}

export default Sel_gestEntrevistaVer