import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb"
import FormVerBase from "../../../../components/componentes_Requerimientos/formVerBase/FormVerBase"
import Navbar from "../../../../components/navbar/Navbar"
import Sidebar from "../../../../components/sidebar/Sidebar"
import "./verBase.css"

const InsertarBase = () => {
  return (
    <div className="verBase">
      <Sidebar />
      <div className="verBaseContainer">
      <Navbar />
       <div className="breadcrumb">
          <Breadcrumb/>
      </div>
          <FormVerBase/>
      </div>
    </div>
  )
}


export default InsertarBase

