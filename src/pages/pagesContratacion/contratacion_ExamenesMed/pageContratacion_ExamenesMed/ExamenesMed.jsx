import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../../components/navbar/Navbar"
import Sidebar from "../../../../components/sidebar/Sidebar"
import BotonExamenes from "../../../../components/componentes_Contratacion/examenesMedicos/botonesExamenes/BotonExamenes"
import DatatableExamenes from "../../../../components/componentes_Contratacion/examenesMedicos/datatableExamenes/DatatableExamenes"
import "./examenesMed.css"

const ExamenesMed = () => {
  return (
    <div className="ExamenesMed">
      <Sidebar/>
      <div className="examenesMedContainer">
      <Navbar/>
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div className="botonExamenes">
          <BotonExamenes />
        </div>
        <div className="datatableExamenes">
          <DatatableExamenes />
        </div>
      </div>
    </div>
  )
}

export default ExamenesMed