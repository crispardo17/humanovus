import Breadcrumb from "../../../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../../../components/navbar/Navbar"
import Sidebar from "../../../../../components/sidebar/Sidebar"
import BotonSel_GestCitacion from "../../../../../components/componentes_Seleccion/gestionar_Citacion/botonesSel_GestCitacion/BotonSel_GestCitacion"
import DataTableSel_GestCitacion from "../../../../../components/componentes_Seleccion/gestionar_Citacion/datatableSel_GestCitacion/DataTableSel_GestCitacion"
import "./sel_gestCitacion.css"

const Sel_gestCitacion = () => {
  return (
    <div className="Sel_GestCitacion">
      <Sidebar/>
      <div className="sel_GestCitacionContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div className="botonSel_GestCitacion">
          <BotonSel_GestCitacion />
        </div>
        <div className="dataTableReq">
          <DataTableSel_GestCitacion />
        </div>
      </div>
    </div>
  )
}

export default Sel_gestCitacion