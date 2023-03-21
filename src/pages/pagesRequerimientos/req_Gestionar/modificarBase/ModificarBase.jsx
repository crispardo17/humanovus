import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb"
import FormModificarBase from "../../../../components/componentes_Requerimientos/formModificarBase/FormModificarBase"
import Navbar from "../../../../components/navbar/Navbar"
import Sidebar from "../../../../components/sidebar/Sidebar"
import "./modificarBase.css"

const InsertarBase = () => {
  return (
    <div className="modificarBase">
      <Sidebar />
      <div className="modificarBaseContainer">
      <Navbar />
       <div className="breadcrumb">
          <Breadcrumb/>
      </div>
          <FormModificarBase/>
      </div>
    </div>
  )
}


export default InsertarBase

