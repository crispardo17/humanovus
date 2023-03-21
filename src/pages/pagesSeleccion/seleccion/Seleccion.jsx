import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import BotonSeleccion from "../../../components/componentes_Seleccion/botonesSeleccion/BotonSeleccion"
import DataTableSel from "../../../components/componentes_Seleccion/datatableSel/DataTableSel"
import "./seleccion.css"

const Seleccion = () => {
  return (
    <div className="Seleccion">
      <Sidebar/>
      <div className="seleccionContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div className="botonSeleccion">
          <BotonSeleccion />
        </div>
        <div className="dataTableReq">
          <DataTableSel />
        </div>
      </div>
    </div>
  )
}

export default Seleccion