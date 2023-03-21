import React, {useState} from "react"
import "./formContactoContactar.css"

const FormContactoContactar = () => {

    const [showOferta, setShowOferta] = useState('');
    const handleShowOferta = (event) => {
        const getOferta = event.target.value;
        setShowOferta(getOferta);
    }


    const [showAledaño, setShowAledaño] = useState('');
    const handleShowAledaño = (event) => {
        const getAledaño = event.target.value;
        setShowAledaño(getAledaño);
    }


  return (
    <form className="formContactar" >
        <div className="oneContactar">
          <div className="inContactar" >
            <label>NUMERO DE IDENTIFICACION</label>
            <input type="number" id="numId" name="numId" min="1" max="100" placeholder="###" required />
          </div>
        </div>
        <div className="twoContactar">
            <div className="inContactar" >
              <label>TIPO DE DOCUMENTO</label>
              <select name="tipoId" id="tipoId" required>
                <option value="">Selecciona:</option>
                <option value="1">CEDULA DE CIUDADANIA</option>
                <option value="2">PASAPORTE</option>
              </select>
            </div>
        </div>
        <div className="threeContactar">
            <div className="inContactar">
              <label>NOMBRES</label>
              <input type="text" id="nombre" name="nombre" min="1" max="100" placeholder="nombre" required />
            </div>
        </div>
        <div className="fourContactar">
          <div className="inContactar" >
            <label>APELLIDOS</label>
            <input type="text" id="apellido" name="apellido" min="1" max="100" placeholder="apellidos" required />
            </div>
        </div>
        <div className="fiveContactar">
        <div className="inContactar">
              <label>CELULAR</label>
              <input type="number" id="celular" name="celular" placeholder="###" required />
            </div>
        </div>
        <div className="sixContactar">
            <div className="inContactar">
              <label>TELEFONO</label>
              <input type="number" id="telefono" name="telefono"  placeholder="###" required />
            </div>
        </div>
        <div className="sevenContactar">
            <div className="inContactar">
              <label>NUMERO DE WHATSAPP</label>
              <input type="date" id="numWha" name="numWha" required/>
            </div>
        </div>
        <div className="eightContactar">
        <div className="inContactar">
              <label>CIUDAD</label>
              <select name="ciudad" id="ciudad" onChange={(e)=>(handleShowAledaño(e)) } required>
                <option value="">Selecciona:</option>
                <option value="1">Aledaño</option>
                <option value="2">Nuevo Cargo</option>
              </select>
            </div>
        </div>
        <div className="nineContactar">
            <div className="inContactar">
              <label>CORREO</label>
              <select name="correo" id="correo" required>
                <option value="">Selecciona:</option>
                <option value="1">Reemplazo</option>
                <option value="2">Nuevo Cargo</option>
              </select>
            </div>
        </div>
        <div className="tenContactar">
          <div className="inContactar">
              <label>FECHA DE NACIMIENTO</label>
              <input type="date" id="fNacimiento" name="fNacimiento" placeholder="00/00/0000" required/>
            </div>
        </div>
        {
          showAledaño ==='1' &&(
        <div className="onceContactar">
            <div className="inContactar">
              <label>AlEDAÑO</label>
              <input type="text" id="aledaño" name="aledaño" placeholder="aledaño" required/>
            </div>
        </div>
           )
        }
        <div className="doceContactar">
        <div className="inContactar" >
            </div>
        </div>
        <div className="treceContactar">
            <div className="inContactar">
                <h1>INFORMACION DEL <br /> CONTACTO</h1>
            </div>
        </div>
        <div className="catorceContactar">
        <div className="inContactar" >
                <div className="imagenPuntosContactar">
                </div>
            </div>
        </div>
        <div className="quinceContactar">
            <div className="inContactar">
              <label>COMUNICACION CON CANDIDATO</label>
                <select name="comCandidato" id="comCandidato" required>
                  <option value="">Selecciona:</option>
                  <option value="1">SI</option>
                  <option value="2">NO</option>
                </select>
            </div>
        </div>
        <div className="dieciseisContactar">
            <div className="inContactar" >
              <label>ACEPTACION DE OFERTA</label>
                <select name="aceOferta" id="aceOferta" onChange={(e)=>(handleShowOferta(e)) } required>
                  <option value="">Selecciona:</option>
                  <option value="1">SI</option>
                  <option value="2">NO</option>  
                </select>
            </div>
        </div>
        {
          showOferta ==='1' &&(
          <div className="diecisieteContactar">    
              <div className="unoSi">
                  <div className="inContactar">
                    <label>FECHA DE ENTREVISTA</label>
                    <input type="date" id="fEntrevista" name="fEntrevista" min="1" max="48" placeholder="00/00/0000"/>
                  </div>
              </div>
              <div className="dosSi">
                  <div className="inContactar" >
                      <label>HORA DE ENTREVISTA</label>
                      <input type="number" id="hEntrevista" name="hEntrevista" min="1" max="48" placeholder="00/00"/>
                  </div>
              </div>
              <div className="tresSi">
                  <div className="inContactar">
                      <label>TIPO DE ENTREVISTA</label>
                      <input type="text" id="tEntrevista" name="tEntrevista" min="1" max="48" placeholder="presencial"/>
                  </div>
              </div>
              <div className="cuatroSi">
              <div className="inContactar" >
                    <div>
                    <label>DIRECCIÓN</label>
                    <input type="text" id="direccionEmp" name="direccionEmp" min="1" max="48" placeholder="Cra 20 # 88-20"/>
                    </div>
                  </div>
              </div>
              <div className="cincoSi">
                  <div className="inContactar" >
                    <div>
                    <label>PSICOLOGO</label>
                    <select name="psicologo" id="psicologo" required>
                      <option value="">Selecciona:</option>
                      <option value="">JUANITO PEREZ</option>
                      <option value="">ANDREA LIBRERO</option>  
                    </select>
                    </div>
                  </div>
              </div>
              <div className="seisSi">
                  <div className="inContactar" >
                    <div>
                    </div>
                  </div>
              </div>
              <div className="sieteSi">
                  <div className="inContactar" >
                      <label>OBSERVACIONES</label>
                      <textarea name="observacionContactar" id="observacionContactar" cols="30" rows="10"></textarea>
                  </div>
              </div>
              <div className="ochoSi">
                  <div className="inContactar" >
                      <div>
                        <button className="btnCancelarContactar">Guardar</button>
                      </div>
                  </div>
              </div>
              <div className="nueveSi">
                  <div className="inContactar" >
                      <div>
                        <button className="btnGuardarContactar">Cancelar</button>
                      </div>
                  </div>
              </div>
            </div>
              )
         }
         {
          showOferta ==='2' &&(
          <div className="diecisieteContactar">    
              <div className="unoNo">
                  <div className="inContactar">
                  <label>MOTIVO NO ACEPTACIÓN</label>
                    <select name="motNoAceptacion" id="motNoAceptacion" required>
                      <option value="">Selecciona:</option>
                      <option value="">NO CUMPLE CON EL PERFIL</option>
                      <option value="">NO ACEPTO OFERTA</option>  
                    </select>
                  </div>
              </div>
              <div className="dosNo">
                  <div className="inContactar" >
                      <label>OBSERVACIONES</label>
                      <textarea className="observacion" name="observacion" id="" cols="30" rows="10"></textarea>
                  </div>
              </div>
              <div className="tresNo">
                  <div className="inContactar">
                    <label>RETIRAR DE BASE</label>
                    <select name="retiroBase" id="retiroBase" required>
                        <option value="">Selecciona:</option>
                        <option value="">SI</option>
                        <option value="">NO</option>  
                    </select>
                  </div>
              </div>
              <div className="cuatroNo">
                  <div className="inContactar" >
                      <label>RETIRAR</label>
                      <textarea className="retirarContactar" name="retirarContactar" id="retirarContactar" cols="30" rows="10" placeholder="¿POR QUE?"></textarea>
                  </div>
              </div>
              <div className="cincoNo">
                  <div className="inContactar" >
                    <div>
                        <button className="btnCancelarContactar">Guardar</button>
                      </div>
                  </div>
              </div>
              <div className="seisNo">
                  <div className="inContactar" >
                      <div>
                        <button className="btnGuardarContactar">Cancelar</button>
                      </div>
                  </div>
              </div>
            </div>
              )
         }      
      </form>
  )
}

export default FormContactoContactar