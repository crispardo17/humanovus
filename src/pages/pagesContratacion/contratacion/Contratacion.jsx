import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import BotonContratacion from "../../../components/componentes_Contratacion/botonesContratacion/BotonContratacion"
import DataTableCont from "../../../components/componentes_Contratacion/datatableCont/DataTableCont"
import "./contratacion.css"

const Contratacion = () => {
  return (
    <div className="contratacion">
      <Sidebar/>
      <div className="contratacionContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div className="botonContratacion">
          <BotonContratacion />
        </div>
        <div className="dataTableCont">
          <DataTableCont />
        </div>
      </div>
    </div>
  )
}

export default Contratacion