import BotonesGestionarBase from "../../../../components/componentes_Requerimientos/botonesGestionarBase/BotonesBase"
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb"
import DataTableGestionarBase from "../../../../components/componentes_Requerimientos/datatableGestionarBase/DataTableBase"
import Navbar from "../../../../components/navbar/Navbar"
import Sidebar from "../../../../components/sidebar/Sidebar"
import "./base.css"

const Base = () => {
    return (
      <div className="base">
        <Sidebar/>
        <div className="baseContainer">
        <Navbar/>
          <div className="breadcrumb">
            <Breadcrumb/>
          </div>
          <div className="boton">
            <BotonesGestionarBase />
          </div>
          <div className="dataTableReq">
            <DataTableGestionarBase />
          </div>
        </div>
      </div>
    )
  }
  
  export default Base