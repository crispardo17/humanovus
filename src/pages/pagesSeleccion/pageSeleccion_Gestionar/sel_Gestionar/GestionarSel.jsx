import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../../components/navbar/Navbar"
import Sidebar from "../../../../components/sidebar/Sidebar"
import BotonGestionarSel from "../../../../components/componentes_Seleccion/botonesGestionarSel/BotonGestionarSel"
import DataTableGetSel from "../../../../components/componentes_Seleccion/datatableGestSel/DataTableGestSel"
import "./gestionarSel.css"

const Seleccion = () => {
  return (
    <div className="GestionarSel">
      <Sidebar/>
      <div className="gestionarSelContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div className="botonGestionarSel">
          <BotonGestionarSel />
        </div>
        <div className="dataTableCont">
          <DataTableGetSel />
        </div>
      </div>
    </div>
  )
}

export default Seleccion