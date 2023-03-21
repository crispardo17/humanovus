import React from 'react'
import "./formContactoVer.css"

const FormContactoVer = () => {
  return (
    <form className="formVerContactar" >
        <div className="oneVerContactar">
          <div className="inVerContactar" >
            <label>NUMERO DE IDENTIFICACION</label>
            <input type="number" id="id" name="id" min="1" max="100" placeholder="###" required />
          </div>
        </div>
        <div className="twoVerContactar">
            <div className="inVerContactar" >
              <label>TIPO DE DOCUMENTO</label>
              <select name="tipoId" id="tipoId" required>
                <option value="">Selecciona:</option>
                <option value="1">CEDULA DE CIUDADANIA</option>
                <option value="2">PASAPORTE</option>
              </select>
            </div>
        </div>
        <div className="threeVerContactar">
            <div className="inVerContactar">
              <label>NOMBRES</label>
              <input type="number" id="nombre" name="nombre" min="1" max="100" placeholder="###" required />
            </div>
        </div>
        <div className="fourVerContactar">
          <div className="inVerContactar" >
            <label>APELLIDOS</label>
            <input type="number" id="apellido" name="apellido" min="1" max="100" placeholder="###" required />
            </div>
        </div>
        <div className="fiveVerContactar">
        <div className="inVerContactar">
              <label>CELULAR</label>
              <input type="number" id="celular" name="celular" min="1" max="100" placeholder="###" required />
            </div>
        </div>
        <div className="sixVerContactar">
            <div className="inVerContactar">
              <label>TELEFONO</label>
              <input type="number" id="telefono" name="telefono" min="1" max="100" placeholder="###" required />
            </div>
        </div>
        <div className="sevenVerContactar">
            <div className="inVerContactar">
              <label>NUMERO DE WHATSAPP</label>
              <input type="date" id="numW" name="numW" min="1" max="100" required/>
            </div>
        </div>
        <div className="eightVerContactar">
        <div className="inVerContactar">
              <label>CIUDAD</label>
              <input type="date" id="ciudad" name="ciudad" required />
            </div>
        </div>
        <div className="nineVerContactar">
            <div className="inVerContactar">
              <label>CORREO</label>
              <select name="correo" id="correo" required>
                <option value="">Selecciona:</option>
                <option value="1">Reemplazo</option>
                <option value="2">Nuevo Cargo</option>
              </select>
            </div>
        </div>
        <div className="tenVerContactar">
          <div className="inVerContactar">
              <label>FECHA DE NACIMIENTO</label>
              <input type="date" id="fNacimiento" name="fNacimiento" placeholder="00/00/0000" required/>
            </div>
        </div>
        <div className="onceVerContactar">
            <div className="inVerContactar">
              <label>ALEDAÑO</label>
              <input type="date" id="aledaño" name="aledaño" placeholder="00/00/0000" required/>
            </div>
        </div>
        <div className="doceVerContactar">
        <div className="inVerContactar" >
            </div>
        </div>
        <div className="treceVerContactar">
            <div className="inVerContactar">
                <h1>INFORMACION DEL <br /> CONTACTO</h1>
            </div>
        </div>
        <div className="catorceVerContactar">
        <div className="inVerContactar" >
                <div className="imagenPuntosContactar">
                </div>
            </div>
        </div>
        <div className="quinceVerContactar">
            <div className="inVerContactar">
              <label>COMUNICACION CON CANDIDATO</label>
              <select name="comCandidato" id="comCandidato" required>
                <option value="">Selecciona:</option>
                <option value="1">SI</option>
                <option value="2">NO</option>
              </select>
            </div>
        </div>
        <div className="dieciseisVerContactar">
        <div className="inVerContactar" >
            <label>ACEPTACION DE OFERTA</label>
            <select name="aceptferta" id="aceptferta" required>
                <option value="">Selecciona:</option>
                <option value="">SI</option>
                <option value="">NO</option>  
              </select>
            </div>
        </div>
        <div className="diecisieteVerContactar">
            <div className="inVerContactar">
              <label>MOTIVO NO ACEPTACIÓN</label>
              <select name="motNoAceptacion" id="motNoAceptacion" required>
                <option value="">Selecciona:</option>
                <option value="">NO CUMPLE CON EL PERFIL</option>
                <option value="">NO ACEPTO OFERTA</option>  
              </select>
            </div>
        </div>
        <div className="dieciochoVerContactar">
        <div className="inVerContactar" >
                <label>OBSERVACIONES</label>
                <textarea className="observacion" name="observacion" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div className="diecinueveVerContactar">
            <div className="inVerContactar">
                <label>RETIRAR DE BASE</label>
                <select name="retiroBase" id="retiroBase" required>
                <option value="">Selecciona:</option>
                <option value="">SI</option>
                <option value="">NO</option>  
              </select>
            </div>
        </div>
        <div className="veinteVerContactar">
        <div className="inVerContactar" >
              <div>
              <label>RETIRAR</label>
                <textarea className="retirar" name="retirar" id="retirar" cols="30" rows="10" placeholder="¿POR QUE?"></textarea>
              </div>
            </div>
        </div>
        <div className="veintiunoVerContactar">
            <div className="inVerContactar" >
                <div>
                    <button className="btnGuardarVerContactar">Guardar</button>
                </div>
            </div>
        </div>
        <div className="veintidosVerContactar">
            <div className="inVerContactar" >
                <div>
                 <button className="btnCancelarVerContactar">Cancelar</button>
                </div>
            </div>
        </div>
      </form>
  )
}

export default FormContactoVer