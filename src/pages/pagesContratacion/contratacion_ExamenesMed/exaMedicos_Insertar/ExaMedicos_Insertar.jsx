import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../../components/navbar/Navbar"
import Sidebar from "../../../../components/sidebar/Sidebar"
import './exaMedicos_Insertar.css'
import FormExamenesInsertar from "../../../../components/componentes_Contratacion/formExamenes/formExamenesInsertar/FormExamenesInsertar";

const ExaMedicos_Insertar = () => {

    return (
        <div className="insertarExa">
          <Sidebar />
          <div className="insertarExaContainer">
          <Navbar />
           <div className="breadcrumb">
              <Breadcrumb/>
          </div>
            <FormExamenesInsertar/>
          </div>
        </div>
      )
}

export default ExaMedicos_Insertar