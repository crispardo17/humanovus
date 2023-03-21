import React from 'react'
import "./formResExamenes.css"

const FormResExamenes = () => {
  return (
    <form className="formResultadoExa" >
            <div className="oneRes">
              <div className="inRes" >
                <h1>Informacion Candidato Examenes</h1>
              </div>
            </div>
            <div className="twoRes">
                <div className="inRes" >
                    <div className="imagenPuntosExa">
                    </div>
                </div>
            </div>
            <div className="threeRes">
                <div className="inRes">
                  <label>NOMBRES</label>
                  <input type="text" id="nombre" name="nombre"  placeholder="nombres" required />
                </div>
            </div>
            <div className="fourRes">
              <div className="inRes" >
                    <label>APELLIDOS</label>
                    <input type="text" id="apellido" name="apellido" placeholder="apellidos" required />
                </div>
            </div>
            <div className="fiveRes">
            <div className="inRes">
                  <label>CARGO</label>
                  <input type="text" id="cargo" name="cargo" placeholder="cargo" required />
                </div>
            </div>
            <div className="sixRes">
                <div className="inRes">
                  <label>FECHA DE EXAMEN</label>
                  <input type="date" id="fExamen" name="fExamen" required/>
                </div>
            </div>
            <div className="sevenRes">
            <div className="inRes">
                  <label>IPS</label>
                  <input type="text" id="ips" name="ips" placeholder="ips" required />
                </div>
            </div>
            <div className="eightRes">
                <div className="inRes">
                  <label>HORA EXAMEN</label>
                  <input type="hour" id="hExamen" name="hExamen"  required />
                </div>
            </div>
            <div className="nineRes">
              <div className="inRes">
              <h1>Resultado Examen Médico</h1>
                </div>
            </div>
            <div className="tenRes">
                <div className="inRes">
                    <div className="imagenPuntosExa">
                    </div>
                </div>
            </div>
            <div className="onceRes">
                <div className="inRes" >
                    <label>VISIOMETRIA</label>
                    <h4>Recomendaciones</h4>
                    <textarea name="recoVisiometria" id="recoVisiometria" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className="doceRes">
                <div className="inRes">
                    <label>AUDIOMETRIA</label>
                    <h4>Recomendaciones</h4>
                    <textarea name="recoAudiometria" id="recoAudiometria" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className="treceRes">
                <div className="inRes" >
                    <label >TEST ALTURA</label>
                    <h4>Recomendaciones</h4>
                    <textarea name="recoTestAltura" id="recoTestAltura" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className="catorceRes">
            <div className="inRes" >
                    
                </div>
            </div>
            <div className="quinceRes">
                <div className="inRes" >
                    <label>Restricciones</label>
                    <textarea name="restriccion" id="restriccion" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className="dieciseisRes">
                <div className="inRes">
                    <div>
                        <button className="btnGuardar">Guardar</button>
                    </div>
                </div>
            </div>
            <div className="diecisieteRes">
                <div className="inRes" >
                    <div>
                        <button className="btnCancelar">Cancelar</button>
                    </div>
                </div>
            </div>
          </form>  
  )
}

export default FormResExamenes