import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import "./documentos.css"
import FormDocumentos from "../../../components/componentes_Contratacion/formDocumentos/FormDocumentos"

const Documentos = () => {
  return (
    <div className="Documentos">
      <Sidebar/>
      <div className="documentosContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <FormDocumentos/>
      </div>
    </div>
  )
}

export default Documentos