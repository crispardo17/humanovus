import Breadcrumb from "../../components/breadcrumb/Breadcrumb"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./calendario.css"

const Calendario = () => {
  return (
    <div className="Calendario">
      <Sidebar/>
      <div className="calendarioContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        Calendario
      </div>
    </div>
  )
}

export default Calendario