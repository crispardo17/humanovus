import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import "./afiliaciones.css"

const Afiliaciones = () => {
  return (
    <div className="Afiliaciones">
      <Sidebar/>
      <div className="afiliacionesContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div>
          <h1>afiliaciones</h1>
        </div>
      </div>
    </div>
  )
}

export default Afiliaciones