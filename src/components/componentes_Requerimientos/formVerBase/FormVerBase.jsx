import React from 'react'
import "./formVerBase.css"

const FormVerBase = () => {
  return (
    <form className="formVerBase" >
        <div className="oneVerBase">
          <div className="inVerBase" >
            <h1>INFORMACION DEL CANDIDATO</h1>
          </div>
        </div>
        <div className="twoVerBase">
            <div className="inVerBase" >
                <div className="imagenPuntosVerBase">
                </div>
            </div>
        </div>
        <div className="threeVerBase">
            <div className="inVerBase">
              <label>TIPO DE DOCUMENTO</label>
              <select name="TipoId" id="TipoId" disabled>
                <option value="">Selecciona:</option>
                <option value="1">Cedula de ciudadania</option>
                <option value="2">Pasaporte</option>
              </select>
            </div>
        </div>
        <div className="fourVerBase">
          <div className="inVerBase" >
            <label>NUMERO DE IDENTIFICACIÓN</label>
            <input type="number" id="numId" name="numId" min="1" max="100" placeholder="###" disabled />
            </div>
        </div>
        <div className="fiveVerBase">
        <div className="inVerBase">
              <label>NOMBRE</label>
              <input type="number" id="nombre" name="nombre" min="1" max="100" placeholder="NOMBRE" disabled />
            </div>
        </div>
        <div className="sixVerBase">
          <div className="inVerBase" >
            <label>APELLIDO</label>
            <input type="text" id="apellido" name="apellido" min="1" max="100" placeholder="APELLIDO" disabled />
            </div>
        </div>
        <div className="sevenVerBase">
            <div className="inVerBase">
              <label>GENERO</label>
              <select name="genero" id="genero" disabled> 
                <option value="">Selecciona:</option>
                <option value="1">Femenino</option>
                <option value="2">Masculino</option>
              </select>
            </div>
        </div>
        <div className="eightVerBase">
        <div className="inVerBase">
              <label>TELEFONO</label>
              <input type="number" id="telefono" name="telefono" placeholder="###" disabled />
            </div>
        </div>
        <div className="nineVerBase">
            <div className="inVerBase">
            <label>CELULAR</label>
              <input type="number" id="celular" name="telefono" placeholder="###" disabled />
            </div>
        </div>
        <div className="tenVerBase">
          <div className="inVerBase">
              <label>WHATSAPP</label>
              <input type="number" id="numWha" name="numWha" placeholder="###" disabled />
            </div>
        </div>
        <div className="onceVerBase">
            <div className="inVerBase">
              <label>CIUDAD</label>
              <select name="ciudad" id="ciudad" disabled> 
                <option value="">Selecciona:</option>
                <option value="1">Reemplazo</option>
                <option value="2">Nuevo Cargo</option>
              </select>
            </div>
        </div>
        <div className="doceVerBase">
        <div className="inVerBase" >
            <label>CORREO</label>
              <input type="mail" id="correo" name="correo" disabled />
            </div>
        </div>
        <div className="treceVerBase">
            <div className="inVerBase">
              <label>FECHA DE BUSQUEDA</label>
              <input type="date" id="fBusqueda" name="fBusqueda" disabled />
            </div>
        </div>
        <div className="catorceVerBase">
            <div className="inVerBase" >
                <div className="imagenPuntosVerBase">
                </div>
            </div>
        </div>
      </form>
  )
}

export default FormVerBase