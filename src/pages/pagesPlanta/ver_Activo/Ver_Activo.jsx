import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import "./ver_Activo.css"

const Ver_Activo = () => {
  return (
    <div className="Ver_Activo">
      <Sidebar/>
      <div className="ver_ActivoContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div className="breadcrumb">
          <h1>Ver activos</h1>
        </div>
      </div>
    </div>
  )
}

export default Ver_Activo