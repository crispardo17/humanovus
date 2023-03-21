import React from 'react'
import "./formNuevoCargo.css"

const FormNuevoCargo = () => {
  return (
    <form className="formNuevoCargo" >
        <div className="oneNuevoCargo">
          <div className="inNuevoCargo" >
            <h1>INFORMACIÓN CARGO NUEVO</h1>
          </div>
        </div>
        <div className="twoNuevoCargo">
            <div className="inNuevoCargo" >
                <div className="imagenPuntosNuevoCargo">
                </div>
            </div>
        </div>
        <div className="threeNuevoCargo">
            <div className="inNuevoCargo">
              <label>NOMBRE CARGO</label>
              <input type="text" id="nomCargo" name="nomCargo" placeholder="Nombre cargo" required />
            </div>
        </div>
        <div className="fourNuevoCargo">
          <div className="inNuevoCargo" >
            <label>JEFE INMEDIATO</label>
            <input type="text" id="jefeInm" name="jefeInm" placeholder="Jefe inmediato" required />
            </div>
        </div>
        <div className="fiveNuevoCargo">
        <div className="inNuevoCargo">
              <label>EMPRESA APLICA</label>
              <select name="empAplica" id="empAplica" required>
                <option value="">Selecciona:</option>
                <option value="1">GoPass</option>
                <option value="2">Grupo Novus</option>
              </select>
            </div>
        </div>
        <div className="sixNuevoCargo">
            <div className="inNuevoCargo">
              <label>FUNCIONES Y RESPONSABILIDADES</label>
              <input type="text" id="funYresp" name="funYresp" placeholder="funciones y Responsabilidades" required />
            </div>
        </div>
        <div className="sevenNuevoCargo">
            <div className="inNuevoCargo">
              <label>NUMERO DE PERSONAS</label>
              <input type="number" id="numPersonas" name="numPersonas" min="1" max="100"  placeholder="Numero de personas" required/>
            </div>
        </div>
        <div className="eightNuevoCargo">
            <div className="inNuevoCargo">
                <label>RECOMENDACIONES</label>
                <textarea name="recomendacion" id="recomendacion" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div className="nineNuevoCargo">
            <div className="inNuevoCargo" >
              <div>
              <button className="btnGuardarNuevoCargo">Guardar</button>
              </div>
            </div>
        </div>
        <div className="tenNuevoCargo">
            <div className="inNuevoCargo" >
              <div>
              <button className="btnCancelarNuevoCargo">Cancelar</button>
              </div>
            </div>
        </div>
      </form>
  )
}

export default FormNuevoCargo