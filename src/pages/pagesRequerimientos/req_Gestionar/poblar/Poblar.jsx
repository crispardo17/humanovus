import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb"
import FormPoblar from "../../../../components/componentes_Requerimientos/formPoblar/FormPoblar"
import Navbar from "../../../../components/navbar/Navbar"
import Sidebar from "../../../../components/sidebar/Sidebar"
import "./poblar.css"


const Poblar = () => {
  return (
    <div className="poblar">
      <Sidebar />
      <div className="poblarContainer">
      <Navbar />
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
          <FormPoblar/>
      </div>
    </div>
  )
}

export default Poblar