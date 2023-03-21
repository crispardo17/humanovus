import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import "./ver_Inactivo.css"

const Ver_Inactivo = () => {
  return (
    <div className="Ver_Inactivo">
      <Sidebar/>
      <div className="ver_InactivoContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div className="breadcrumb">
          <h1>ver inactivos</h1>
        </div>
      </div>
    </div>
  )
}

export default Ver_Inactivo