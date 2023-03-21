import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import FormModificarReq from "../../../components/componentes_Requerimientos/formModificarReq/FormModificarReq"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import "./modificar.css"

const Modificar = () => {
  return (
    <div className="modificar">
      <Sidebar />
      <div className="modificarContainer">
      <Navbar />
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
          <FormModificarReq/>
        </div>
    </div>
  )
}


export default Modificar

