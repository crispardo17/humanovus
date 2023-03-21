import BotonesGestionar from "../../../components/componentes_Requerimientos/botonesGestionarReq/BotonesGestionar"
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import DataTableGestionar from "../../../components/componentes_Requerimientos/datatableGestionarReq/DataTableGestionar"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import "./gestionar.css"

const Gestionar = () => {
    return (
      <div className="gestionar">
        <Sidebar/>
        <div className="gestionarContainer">
        <Navbar/>
          <div className="breadcrumb">
            <Breadcrumb/>
          </div>
          <div className="boton">
            <BotonesGestionar />
          </div>
          <div className="dataTableReq">
            <DataTableGestionar />
          </div>
        </div>
      </div>
    )
  }
  
  export default Gestionar