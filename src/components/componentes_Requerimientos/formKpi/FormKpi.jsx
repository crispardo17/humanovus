import React from 'react'
import "./formKpi.css"

const FormKpi = () => {
  return (
    <form className="formKpi" >
            <div className="oneKpi">
              <div className="inKpi" >
                <h1>KPI</h1>
              </div>
            </div>
            <div className="twoKpi">
                <div className="inKpi" >
                  <div className="imagenPuntosKpi">
                  </div>
                </div>
            </div>
            <div className="threeKpi">
                <div className="inKpi">
                  <label>FECHA INICIAL</label>
                  <input type="date" id="fechaInicialKpi" name="fechaInicialKpi" required/>
                </div>
            </div>
            <div className="fourKpi">
              <div className="inKpi" >
                  <label>FECHA FINAL</label>
                  <input type="date" id="fechaFinalKpi" name="fechaFinalKpi" required/>
                </div>
            </div>
            <div className="fiveKpi">
                <div className="inKpi">
                  <label>PSICOLOGO</label>
                  <select name="psicologo" id="psicologo" required>
                    <option value="">Selecciona:</option>
                    <option value="1">Juanito alvarez</option>
                    <option value="2">Andrea Lamas</option>
                  </select>
                </div>
            </div>
            <div className="sixKpi">
                <div className="inKpi">
                  <label>CAMPAÑA</label>
                  <select name="campaña" id="campaña" required>
                      <option value="">Selecciona:</option>
                      <option value="1">Campaña 1</option>
                      <option value="2">Campaña 2</option>
                  </select>
                </div>
            </div>
            <div className="sevenKpi">
                <div className="inKpi">
                  <label>CARGO</label>
                  <select name="cargo" id="cargo" required>
                      <option value="">Selecciona:</option>
                      <option value="1">Cargo 1</option>
                      <option value="2">Cargo 2</option>
                  </select>
                </div>
            </div>
            <div className="eightKpi">
                <div className="inKpi">
                <div>
                    <button className="btnGenerarKpi">GENERAR</button>
                  </div>
                </div>
            </div>
          </form>
  )
}

export default FormKpi