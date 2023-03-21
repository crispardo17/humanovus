import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../../components/navbar/Navbar"
import Sidebar from "../../../../components/sidebar/Sidebar"
import TablaKpi from "../../../../components/componentes_Requerimientos/tablaKpi/TablaKpi"
import Chart from "../../../../components/componentes_Requerimientos/chart/Chart"
import "./kpi.css"
import FormKpi from "../../../../components/componentes_Requerimientos/formKpi/FormKpi"


const Kpi = () => {
  return (
    <div className="kpi">
      <Sidebar />
      <div className="kpiContainer">
      <Navbar />
        <div className="breadcrumb">
          <Breadcrumb/>
        </div>
        <div className="formularioKpi">
          <div className="formularioKpi1">
            <FormKpi/>
          </div>
          <div className="formularioKpi2">
            <div className="tablaKpi">
            <TablaKpi/>
            </div>
          </div>
          <div className="formularioKpi23">
            <div className="chart">
            <Chart />
            </div>
          </div>  
        </div>  
      </div>
    </div>
  )
}

export default Kpi