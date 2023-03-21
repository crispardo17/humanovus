import React from 'react'
import "./formNuevaCampaña.css"

const FormNuevaCampaña = () => {
  return (
    <form className="formNuevaCampaña" >
        <div className="oneNuevaCampaña">
          <div className="inNuevaCampaña" >
            <h1>INFORMACIÓN CAMPAÑA NUEVA</h1>
          </div>
        </div>
        <div className="twoNuevaCampaña">
            <div className="inNuevaCampaña" >
                <div className="imagenPuntosNuevaCampaña">
                </div>
            </div>
        </div>
        <div className="threeNuevaCampaña">
            <div className="inNuevaCampaña">
              <label className="label_NuevaCamp">NOMBRE DE NUEVA CAMPAÑA</label>
              <input className="input_NuevaCamp" type="text" id="newCampaña" name="newCampaña"  placeholder="Nombre Campaña" required />
            </div>
        </div>
        <div className="fourNuevaCampaña">
            <div className="inNuevaCampaña" >
              <div>
              <button className="btnGuardarNuevaCampaña">Guardar</button>
              </div>
            </div>
        </div>
        <div className="fiveNuevaCampaña">
            <div className="inNuevaCampaña" >
              <div>
              <button className="btnCancelarNuevaCampaña">Cancelar</button>
              </div>
            </div>
        </div>
      </form>
  )
}

export default FormNuevaCampaña