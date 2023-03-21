import React from 'react'
import "./formVerContratacion.css"

const FormVerContratacion = () => {
  return (
    <form className="formContratacionVer" >
            <div className="oneContratacionVer">
              <div className="inContratacionVer" >
                <h1>Informacion Contratación</h1>
              </div>
            </div>
            <div className="twoContratacionVer">
                <div className="inContratacionVer" >
                    <div className="imagenPuntosContratacionVer">
                    </div>
                </div>
            </div>
            <div className="threeContratacionVer">
                <div className="inContratacionVer">
                  <label>EXAMENES MEDICOS</label>
                </div>
            </div>
            <div className="fourContratacionVer">
                <div className="inContratacionVer" >

                </div>
            </div>
            <div className="fiveContratacionVer">
                <div className="inContratacionVer">
                    <h6>Descripción</h6>
                    <textarea name="observacionContVer" id="observacionContVer" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className="sixContratacionVer">
                <div className="inContratacionVer">
                  <label>AFILIACIONES</label>
                </div>
            </div>
            <div className="sevenContratacionVer">
                <div className="inContratacionVer">
                </div>
            </div>
            <div className="eightContratacionVer">
                <div className="inContratacionVer">
                    <h6>Descripción</h6>
                    <textarea name="observacionContVer" id="observacionContVer" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className="nineContratacionVer">
              <div className="inContratacionVer">
                  <label>DOCUMENTOS</label>
                </div>
            </div>
            <div className="tenContratacionVer">
                <div className="inContratacionVer">
                </div>
            </div>
            <div className="onceContratacionVer">
                <div className="inContratacionVer" >
                    <h6>Descripción</h6>
                    <textarea name="observacionContVer" id="observacionContVer" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className="doceContratacionVer">
                <div className="inContratacionVer" >
                  <div>
                    <label>SEGURIDAD SOCIAL</label>
                  </div>
                </div>
            </div>
            <div className="treceContratacionVer">
                <div className="inContratacionVer" >
                </div>
            </div>
            <div className="catorceContratacionVer">
                <div className="inContratacionVer" >
                    <h6>Descripción</h6>
                    <textarea name="observacionContVer" id="observacionContVer" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className="quinceContratacionVer">
                <div className="inContratacionVer" >
                  <div>
                  <button className="btnVolver">Volver</button>
                  </div>
                </div>
            </div>
          </form>
  )
}

export default FormVerContratacion