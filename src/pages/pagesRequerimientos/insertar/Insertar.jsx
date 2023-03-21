import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import FormInsertReq from "../../../components/componentes_Requerimientos/formInsertReq/FormInsertReq"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"

import "./insertar.css"

const Insertar = () => {

  
  return (
    <div className="insertar">
      <Sidebar />
      <div className="insertarContainer">
      <Navbar />
       <div className="breadcrumb">
          <Breadcrumb/>
      </div>
        <FormInsertReq/>
      </div>
    </div>
  )
}


export default Insertar

