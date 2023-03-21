import React from 'react'
import "./formModificarBase.css"

const FormModificarBase = () => {
  return (
    <form className="formModificarBase" >
        <div className="oneModificarBase">
          <div className="inModificarBase" >
            <h1>INFORMACION DEL CANDIDATO</h1>
          </div>
        </div>
        <div className="twoModificarBase">
            <div className="inModificarBase" >
                <div className="imagenPuntosModificarBase">
                </div>
            </div>
        </div>
        <div className="threeModificarBase">
            <div className="inModificarBase">
              <label>TIPO DE DOCUMENTO</label>
              <select name="tipoDoc" id="tipoDoc" required>
                <option value="">Selecciona:</option>
                <option value="1">Cedula de ciudadania</option>
                <option value="2">Pasaporte</option>
              </select>
            </div>
        </div>
        <div className="fourModificarBase">
          <div className="inModificarBase" >
            <label>NUMERO DE IDENTIFICACIÓN</label>
            <input type="number" id="numId" name="numId" placeholder="###" required />
            </div>
        </div>
        <div className="fiveModificarBase">
        <div className="inModificarBase">
              <label>NOMBRE</label>
              <input type="text" id="nombre" name="nombre" placeholder="NOMBRE" required />
            </div>
        </div>
        <div className="sixModificarBase">
          <div className="inModificarBase" >
            <label>APELLIDO</label>
            <input type="text" id="apellido" name="apellido" placeholder="APELLIDO" required />
            </div>
        </div>
        <div className="sevenModificarBase">
            <div className="inModificarBase">
              <label>GENERO</label>
              <select name="genero" id="genero" required> 
                <option value="">Selecciona:</option>
                <option value="1">Femenino</option>
                <option value="2">Masculino</option>
              </select>
            </div>
        </div>
        <div className="eightModificarBase">
        <div className="inModificarBase">
              <label>TELEFONO</label>
              <input type="number" id="telefono" name="telefono" placeholder="###" required />
            </div>
        </div>
        <div className="nineModificarBase">
            <div className="inModificarBase">
            <label>CELULAR</label>
              <input type="number" id="celular" name="celular" placeholder="###" required />
            </div>
        </div>
        <div className="tenModificarBase">
          <div className="inModificarBase">
              <label>WHATSAPP</label>
              <input type="number" id="numWha" name="numWha" placeholder="###" required/>
            </div>
        </div>
        <div className="onceModificarBase">
            <div className="inModificarBase">
              <label>CIUDAD</label>
              <select name="ciudad" id="ciudad" required> 
                <option value="">Selecciona:</option>
                <option value="1">Reemplazo</option>
                <option value="2">Nuevo Cargo</option>
              </select>
            </div>
        </div>
        <div className="doceModificarBase">
        <div className="inModificarBase" >
            <label>CORREO</label>
              <input type="mail" id="correo" name="correo" required />
            </div>
        </div>
        <div className="treceModificarBase">
            <div className="inModificarBase">
              <label>FECHA DE BUSQUEDA</label>
              <input type="date" id="fBusqueda" name="fBusqueda" required />
            </div>
        </div>
        <div className="catorceModificarBase">
            <div className="inModificarBase" >
                <div className="imagenPuntosModificarBase">
                </div>
            </div>
        </div>
        <div className="quinceModificarBase">
            <div className="inModificarBase">
                <div>
                    <button className="btnGuardar">Guardar</button>
                </div>
            </div>
        </div>
        <div className="dieciseisModificarBase">
            <div className="inModificarBase" >
                <div>
                    <button className="btnCancelar">Cancelar</button>
                </div>
            </div>
        </div>
      </form>
  )
}

export default FormModificarBase