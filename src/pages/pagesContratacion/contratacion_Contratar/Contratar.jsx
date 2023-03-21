import React from 'react'
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb"
import Navbar from "../../../components/navbar/Navbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import './contratar.css'
import FormContratar from '../../../components/componentes_Contratacion/formContratar/FormContratar';

const Contratar = () => {
    return (
        <div className="contratar">
          <Sidebar />
          <div className="ContratarContainer">
          <Navbar />
           <div className="breadcrumb">
              <Breadcrumb/>
          </div>
            <FormContratar/>
          </div>
        </div>
      )
}

export default Contratar