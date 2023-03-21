import React from 'react'
import "./formInsertarBase.css"

const FormInsertarBase = () => {
  return (
    <form className="formInsertBase" >
        <div className="oneBase">
          <div className="inBase" >
            <h1>INFORMACION DEL CANDIDATO</h1>
          </div>
        </div>
        <div className="twoBase">
            <div className="inBase" >
                <div className="imagenPuntosInsertarBase">
                </div>
            </div>
        </div>
        <div className="threeBase">
            <div className="inBase">
              <label>TIPO DE DOCUMENTO</label>
              <select name="tipoId" id="tipoId" required>
                <option value="">Selecciona:</option>
                <option value="1">Cedula de ciudadania</option>
                <option value="2">Pasaporte</option>
              </select>
            </div>
        </div>
        <div className="fourBase">
          <div className="inBase" >
            <label>NUMERO DE IDENTIFICACIÓN</label>
            <input type="number" id="numId" name="numId" min="1" max="100" placeholder="###" required />
            </div>
        </div>
        <div className="fiveBase">
        <div className="inBase">
              <label>NOMBRE</label>
              <input type="text" id="nombre" name="nombre" min="1" max="100" placeholder="NOMBRE" required />
            </div>
        </div>
        <div className="sixBase">
          <div className="inBase" >
            <label>APELLIDO</label>
            <input type="text" id="apellido" name="apellido" min="1" max="100" placeholder="APELLIDO" required />
            </div>
        </div>
        <div className="sevenBase">
            <div className="inBase">
              <label>GENERO</label>
              <select name="genero" id="genero" required> 
                <option value="">Selecciona:</option>
                <option value="1">Femenino</option>
                <option value="2">Masculino</option>
              </select>
            </div>
        </div>
        <div className="eightBase">
        <div className="inBase">
              <label>TELEFONO</label>
              <input type="number" id="telefono" name="telefono" placeholder="###" required />
            </div>
        </div>
        <div className="nineBase">
            <div className="inBase">
            <label>CELULAR</label>
              <input type="number" id="celular" name="celular" placeholder="###" required />
            </div>
        </div>
        <div className="tenBase">
          <div className="inBase">
              <label>WHATSAPP</label>
              <input type="number" id="numW" name="numW" placeholder="###" required/>
            </div>
        </div>
        <div className="onceBase">
            <div className="inBase">
              <label>CIUDAD</label>
              <select name="ciudad" id="ciudad" required> 
                <option value="">Selecciona:</option>
                <option value="1">Reemplazo</option>
                <option value="2">Nuevo Cargo</option>
              </select>
            </div>
        </div>
        <div className="doceBase">
        <div className="inBase" >
            <label>CORREO</label>
              <input type="mail" id="correo" name="correo" required />
            </div>
        </div>
        <div className="treceBase">
            <div className="inBase">
              <label>FECHA DE BUSQUEDA</label>
              <input type="date" id="fBusqueda" name="fBusqueda" required />
            </div>
        </div>
        <div className="catorceBase">
            <div className="inBase" >
                <div className="imagenPuntosInsertarBase">
                </div>
            </div>
        </div>
        <div className="quinceBase">
            <div className="inBase">
                <div>
                    <button className="btnGuardar">Guardar</button>
                </div>
            </div>
        </div>
        <div className="dieciseisBase">
            <div className="inBase" >
                <div>
                    <button className="btnCancelar">Cancelar</button>
                </div>
            </div>
        </div>
      </form>
  )
}

export default FormInsertarBase