import React from 'react'
import "./formPoblar.css"


const FormPoblar = () => {
  return (
    <form className="formPoblar" >
        <div className="onePoblar">
          <div className="inPoblar" >
            <h1>POBLAR</h1>
          </div>
        </div>
        <div className="twoPoblar">
            <div className="inPoblar" >
              <div className="imagenPuntosPoblar">
              </div>
            </div>
        </div>
        <div className="threePoblar">
            <div className="inPoblar">
              <label>TITULO 1</label>
              <input type="text" id="titulo1" name="titulo1" placeholder="Titulo 1" required/>
            </div>
        </div>
        <div className="fourPoblar">
          <div className="inPoblar" >
              <label>TITULO 2</label>
              <input type="text" id="titulo2" name="titulo2" placeholder="Titulo 2" required/>
            </div>
        </div>
        <div className="fivePoblar">
            <div className="inPoblar">
              <label>EDAD MINIMA</label>
              <input type="number" id="edadMinima" name="edadMinima" min="1" max="100" placeholder="##" required/>
            </div>
        </div>
        <div className="sixPoblar">
            <div className="inPoblar">
              <label>EDAD MAXIMA</label>
              <input type="number" id="edadMaxima" name="edadMaxima"  min="1" max="100" placeholder="##" required/>
            </div>
        </div>
        <div className="sevenPoblar">
            <div className="inPoblar">
              <label>SALARIO ENTRE</label>
              <input type="number" id="salarioEntre" name="salarioEntre" placeholder="$$$$$$$" required />
            </div>
        </div>
        <div className="eightPoblar">
            <div className="inPoblar">
                <label>A</label>
                <input type="number" id="aSalario" name="aSalario" placeholder="$$$$$$$" required/>
            </div>
        </div>
        <div className="ninePoblar">
            <div className="inPoblar">
                <label>FECHA ACT. HOJA DE VIDA</label>
                <select name="fHojaVida" id="fHojaVida" required>
                  <option value="">Selecciona:</option>
                  <option value="1">Reemplazo</option>
                  <option value="2">Nuevo Cargo</option>
                </select>
            </div>
        </div>
        <div className="tenPoblar">
            <div className="inPoblar">
                <label>CIUDAD</label>
                <select name="ciudad" id="ciudad" required> 
                  <option value="">Selecciona:</option>
                  <option value="1">Reemplazo</option>
                  <option value="2">Nuevo Cargo</option>
                </select>
            </div>
        </div>
        <div className="elevenPoblar">
            <div className="inPoblar" >
              <div>
                <button className="btnGuardarPoblar">Guardar</button>
              </div>
            </div>
        </div>
        <div className="twelvePoblar">
            <div className="inPoblar" >
              <div>
                <button className="btnCancelarPoblar">Cancelar</button>
              </div>
            </div>
        </div>
        </form>
  )
}

export default FormPoblar