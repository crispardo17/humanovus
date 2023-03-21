import Breadcrumb from "../../../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../../../components/navbar/Navbar"
import Sidebar from "../../../../../components/sidebar/Sidebar"
import BotonSel_GestEntrevista from "../../../../../components/componentes_Seleccion/gestionar_Entrevista/botonesSel_GestEntrevista/BotonSel_GestEntrevista"
import DataTableSel_GestEntrevista from "../../../../../components/componentes_Seleccion/gestionar_Entrevista/datatableSel_GestEntrevista/DataTableSel_GestEntrevista"
import "./sel_gestEntrevista.css"

const Sel_gestEntrevista= () => {
  return (
    <div className="Sel_GestEntrevista">
      <Sidebar/>
      <div className="sel_GestEntrevistaContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div className="botonSel_GestEntrevista">
          <BotonSel_GestEntrevista />
        </div>
        <div className="dataTableReq">
          <DataTableSel_GestEntrevista />
        </div>
      </div>
    </div>
  )
}

export default Sel_gestEntrevista