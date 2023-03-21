import React from 'react'
import "./formCitacionVer.css"

const FormCitacionVer = () => {
  return (
    <form className="formVerCitacion" >
        <div className="oneVerCitacion">
          <div className="inVerCitacion" >
            <h1>INFORMACIÓN DE LA CITACIÓN</h1>
          </div>
        </div>
        <div className="twoVerCitacion">
            <div className="inVerCitacion" >
              <div className="imagenPuntosVerCitacion">
              </div>
            </div>
        </div>
        <div className="threeVerCitacion">
            <div className="inVerCitacion">
                <label>TIPO CITACIÓN</label>
                <select name="tipoCitacion" id="tipoCitacion" required>
                  <option value="">Selecciona:</option>
                  <option value="psicologo">PSICOLOGO</option>
                  <option value="jefeInmediato">JEFE INMEDIATO</option>
                  <option value="otro">OTRO</option>
                </select>
            </div>
        </div>
        <div className="fourVerCitacion">
          <div className="inVerCitacion" >
            <label>OTRA CITACIÓN</label>
            <select name="otraCitacion" id="otraCitacion" required>
                <option value="">Selecciona:</option>
                <option value="bogota">BOGOTA</option>
                <option value="barramquilla">BARRANQUILLA</option>
                <option value="medellin">MEDELLIN</option>
                <option value="cali">CALI</option>
                <option value="yopal">YOPAL</option>
              </select>
            </div>
        </div>
        <div className="fiveVerCitacion">
        <div className="inVerCitacion">
              <label>FECHA DE ENTREVISTA</label>
              <input type="number" id="fEntrevista" name="fEntrevista" min="1" max="100" placeholder="###" required />
            </div>
        </div>
        <div className="sixVerCitacion">
            <div className="inVerCitacion" >
              <label>HORA DE ENTREVISTA</label>
              <input type="number" id="hEntrevista" name="hEntrevista" min="1" max="100" placeholder="###" required />
            </div>
        </div>
        <div className="sevenVerCitacion">
            <div className="inVerCitacion">
              <label>TIPO DE ENTREVISTA</label>
              <select name="tEntrevista" id="tEntrevista" required>
                <option value="">Selecciona:</option>
                <option value="1">Presencial</option>
                <option value="2">Virtual</option>
              </select>
            </div>
        </div>
        <div className="eightVerCitacion">
        <div className="inVerCitacion">
              <label>LUGAR O ENLACE</label>
              <input type="text" id="lugEntrevista" name="lugEntrevista" required />
            </div>
        </div>
        <div className="nineVerCitacion">
            <div className="inVerCitacion">
            <label>ENTREVISTADOR SELECCIONADO</label>
              <textarea name="entrevistadorSel" id="entrevistadorSel" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div className="tenVerCitacion">
          <div className="inVerCitacion">
              <div className="imagenPuntosVerCitacion">
              </div>
            </div>
        </div>
        <div className="onceVerCitacion">
            <div className="inVerCitacion">
            <label>RECOMENDACIONES</label>
              <textarea name="recomendacionCitacion" id="recomendacionCitacion" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div className="doceVerCitacion">
        <div className="inVerCitacion">
            <div>
              <button className="btnCerrarVerCitacion">Cerrar</button>
              </div>
            </div>
        </div>
      </form>
  )
}

export default FormCitacionVer