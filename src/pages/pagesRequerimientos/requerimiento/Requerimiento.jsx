import BotonRequerimiento from "../../../components/componentes_Requerimientos/botonesRequerimiento/BotonRequerimiento"
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import DataTableReq from "../../../components/componentes_Requerimientos/datatableReq/DataTableReq"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import "./requerimiento.css"


const Requerimiento = () => {
  return (
    <div className="requerimiento">
      <Sidebar />
      <div className="requerimientoContainer">
      <Navbar />
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div className="botonReq">
          <BotonRequerimiento />
        </div>
        <div className="dataTableReq">
          <DataTableReq />
        </div>
      </div>
    </div>
  )
}

export default Requerimiento