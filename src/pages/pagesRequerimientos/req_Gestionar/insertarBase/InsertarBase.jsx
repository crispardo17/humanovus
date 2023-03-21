import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb"
import FormInsertarBase from "../../../../components/componentes_Requerimientos/formInsertarBase/FormInsertarBase"
import Navbar from "../../../../components/navbar/Navbar"
import Sidebar from "../../../../components/sidebar/Sidebar"
import "./insertarBase.css"

const InsertarBase = () => {

  
  return (
    <div className="insertarBase">
      <Sidebar />
      <div className="insertarBaseContainer">
      <Navbar />
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
          <FormInsertarBase/>
      </div>
    </div>
  )
}


export default InsertarBase

