import React from 'react'
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import FormVerContratacion from '../../../components/componentes_Contratacion/formVerContratacion/FormVerContratacion'
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import './contratacion_Ver.css'

const Contratar = () => {
    return (
        <div className="contratacionVer">
          <Sidebar />
          <div className="ContratacionVerContainer">
          <Navbar />
           <div className="breadcrumb">
              <Breadcrumb/>
          </div>
              <FormVerContratacion/>
          </div>
        </div>
      )
}

export default Contratar