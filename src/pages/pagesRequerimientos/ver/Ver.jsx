import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import FormVerReq from "../../../components/componentes_Requerimientos/formVerReq/FormVerReq"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import "./ver.css"

const Ver = () => {
  return (
    <div className="ver">
      <Sidebar />
      <div className="verContainer">
      <Navbar />
       <div className="breadcrumb">
          <Breadcrumb/>
      </div>
          <FormVerReq/>
      </div>
    </div>
  )
}


export default Ver

