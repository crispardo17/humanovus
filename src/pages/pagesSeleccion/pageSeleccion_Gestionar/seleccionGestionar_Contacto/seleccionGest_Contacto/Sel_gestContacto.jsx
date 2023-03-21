import Breadcrumb from "../../../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../../../components/navbar/Navbar"
import Sidebar from "../../../../../components/sidebar/Sidebar"
import BotonSel_GestContacto from "../../../../../components/componentes_Seleccion/gestionar_Contacto/botonesSel_GestContacto/BotonSel_GestContacto"
import DataTableSel_GestContacto from "../../../../../components/componentes_Seleccion/gestionar_Contacto/datatableSel_GestContacto/DataTableSel_GestContacto"
import "./sel_gestContacto.css"

const Sel_gestContacto = () => {
  return (
    <div className="Sel_GestContacto">
      <Sidebar/>
      <div className="sel_GestContactoContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div className="botonSel_GestContacto">
          <BotonSel_GestContacto />
        </div>
        <div className="dataTableReq">
          <DataTableSel_GestContacto />
        </div>
      </div>
    </div>
  )
}

export default Sel_gestContacto