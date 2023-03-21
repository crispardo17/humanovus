import React from 'react'
import "./formDocumentos.css"
import Tipo_Documentacion from "../tabla_Documentacion/tipo_Documentacion/Tipo_Documentacion"
import Documentacion_Motos from "../tabla_Documentacion/documentos_Motos/Documentacion_Motos"
import Documentacion_Extranjero from "../tabla_Documentacion/documentacion_Extranjero/Documentacion_Extranjero"

const FormDocumentos = () => {
  return (
    <div className="formDocumentos"  >
          <div className="tituloDocumentos">
            <div>
               <h2>SOLICITUD DE DOCUMENTOS</h2>
            </div>
            <div className="imagenPuntosDocumentos">
            </div>   
          </div>
          <div>
            <br />
            <Tipo_Documentacion/>
          </div>
          <div>
            <br />
            <h5>Motorizados-Tecnicos en soporte</h5>
            <Documentacion_Motos/>
          </div>
          <div>
            <br />
            <h5>Personal Extranjero</h5>
            <Documentacion_Extranjero/>
          </div>
          <div>
            <br />
            <h5>Descripción de documentos</h5>
            <textarea name="observacionDocumentos" id="observacionDocumentos" cols="30" rows="10"></textarea>
          </div>
          <div className="botonesDocumentos">
            <br />
              <div>
                  <button className="btnEnviar">Enviar</button>
              </div>
              <div>
                  <button className="btnCancelar">Cancelar</button>
              </div>
          </div>
        </div>
  )
}

export default FormDocumentos