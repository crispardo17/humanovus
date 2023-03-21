import React from 'react'
import "./formPerfilCargo.css"
import PerfilCargo_Educacion from "../../componentesSel_PerfilCargo/perfilCargo_Educacion/PerfilCargo_Educacion"
import PerfilCargo_Experiencia from "../../componentesSel_PerfilCargo/perfilCargo_Experiencia/PerfilCargo_Experiencia"
import PerfilCargo_Habilidades from "../../componentesSel_PerfilCargo/perfilCargo_Habilidades/PerfilCargo_Habilidades"
import PerfilCargo_OtrosReq from "../../componentesSel_PerfilCargo/perfilCargo_OtrosReq/PerfilCargo_OtrosReq"

const FormPerfilCargo = () => {
  return (
    <form className="containerTablas">
            <h3>EDUCACIÓN</h3>
              <div className="tablaPerfil_Cargo">
                <PerfilCargo_Educacion />
              </div>
            <h3>EXPERIENCIA</h3>
              <div className="tablaPerfil_Cargo">
                <PerfilCargo_Experiencia />
              </div>
            <h3>HABILIDADES</h3>
              <div className="tablaPerfil_Cargo">
                <PerfilCargo_Habilidades />
              </div>
            <h3>OTROS REQUISITOS</h3>
              <div className="tablaPerfil_Cargo">
                <PerfilCargo_OtrosReq />
              </div>
              <div className="botonesPerfil_Cargo">
                <div className="botonesPerfil1">
                    <div className="inBotonesPerfil">
                        <div>
                          <button className="btnGuardarInsertarCitacion">Guardar</button>
                        </div>
                    </div>
                </div>
              <div className="botonesPerfil2">
                  <div className="inBotonesPerfil">
                    <div>
                        <button className="btnCancelarInsertarCitacion">Cancelar</button>
                    </div>
                  </div>
              </div>
              </div>
        </form>
  )
}

export default FormPerfilCargo