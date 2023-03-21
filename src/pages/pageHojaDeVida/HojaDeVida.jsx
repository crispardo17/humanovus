import Pestañas_HojaDeVida from "../../components/componente_HojaDeVida/pestañas_HojaDeVida/Pestañas_HojaDeVida"
import NavbarHojaDeVida from "../../components/navbarHojaDeVida/NavbarHojaDeVida"

import "./hojaDeVida.css"

const HojaDeVida = () => {
  return (
    <div className="Configuracion">
      <div className="configuracionContainer">
        <NavbarHojaDeVida />
        <div className="dataTableConfi">
          <Pestañas_HojaDeVida />
        </div>
      </div>
    </div>
  )
}

export default HojaDeVida