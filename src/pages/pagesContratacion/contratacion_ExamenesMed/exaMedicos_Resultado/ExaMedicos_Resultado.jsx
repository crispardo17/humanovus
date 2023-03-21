import React from 'react'
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb"
import FormResExamenes from '../../../../components/componentes_Contratacion/formExamenes/formResExamenes/FormResExamenes'
import Navbar from "../../../../components/navbar/Navbar"
import Sidebar from "../../../../components/sidebar/Sidebar"
import './exaMedicos_Resultado.css'

const ExaMedicos_Resultado = () => {
    return (
        <div className="resultadoExa">
          <Sidebar />
          <div className="resultadoExaContainer">
          <Navbar />
           <div className="breadcrumb">
              <Breadcrumb/>
          </div>
           <FormResExamenes/>
          </div>
        </div>
      )
}

export default ExaMedicos_Resultado