import {useState} from 'react'
import "./formVerReq.css"

const FormVerReq = () => {

    const [siChecked, setSiChecked] = useState(false);
    const [noChecked, setNoChecked] = useState(false);

    const handleShowCapacitacion1 = () => {
    setSiChecked(true);
    setNoChecked(false);
    }

    const handleShowCapacitacion2 = () => {
    setSiChecked(false);
    setNoChecked(true);
    }

  
  return (
    <form className="formVer" >
        <div className="oneVer">
          <div className="inVer" >
            <label>EMPRESA</label>
              <select name="empresa" id="empresa" required>
                <option value="">Selecciona:</option>
                <option value="novus">GRUPO NOVUS</option>
                <option value="gopass">GOPASS</option>
              </select>
          </div>
        </div>
        <div className="twoVer">
            <div className="inVer" >
              <label>PROCESO</label>
              <select name="proceso" id="proceso" required>
                <option value="">Selecciona:</option>
                <option value="1">Comercial</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
        </div>
        <div className="threeVer">
            <div className="inVer">
              <label>SUBPROCESO</label>
              <select name="subproceso" id="subproceso" required>
                <option value="">Selecciona:</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
        </div>
        <div className="fourVer">
          <div className="inVer" >
            <label>CAMPAÑA</label>
              <select name="ciudad" id="ciudad" required>
                <option value="">Selecciona:</option>
                <option value="1">AV VILLAS</option>
                <option value="2">POPULAR</option>
                <option value="3">PORVENIR</option>
              </select>
            </div>
        </div>
        <div className="fiveVer">
          <div className="inVer" >
            <label>CIUDAD</label>
            <select name="ciudad" id="ciudad" required>
                <option value="">Selecciona:</option>
                <option value="bogota">BOGOTA</option>
                <option value="barramquilla">BARRANQUILLA</option>
                <option value="medellin">MEDELLIN</option>
                <option value="cali">CALI</option>
                <option value="yopal">YOPAL</option>
              </select>
            </div>
        </div>
        <div className="sixVerModificar">
        <div className="inVer">
              <label>NUM.VACANTES</label>
              <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" required />
            </div>
        </div>
        <div className="sevenVer">
          <div className="ch" >
            <label>REQUIERE CAPACITACIÓN</label>
              <div className="capacitacion" >
                <div className="yes" >
                  <input type="checkbox" id="siCapacitacion" name="siCapacitacion" checked={siChecked} value="1" onChange={(e)=>(handleShowCapacitacion1(e)) }/> 
                  <label>SI</label>
                </div>
                <div className="not"> 
                  <input type="checkbox" id="noCapacitacion" name="noCapacitacion" checked={noChecked}  value="0" onChange={(e)=>(handleShowCapacitacion2(e)) } /> 
                  <label>NO</label>
                </div>
              </div> 
            </div>
        </div>
        <div className="eightVer">
            <div className="inVer">
              <label>FECHA DE CAPACITACIÓN</label>
              <input type="date" id="fCapacitacion" name="fCapacitacion" min="1" max="100" required/>
            </div>
        </div>
        <div className="nineVer">
            <div className="inVer">
              <label>FECHA DE CONTRATACION</label>
              <input type="date" id="fContratacion" name="fContratacion" required />
            </div>
        </div>
        <div className="tenVer">
            <div className="inVer">
              <label>TIPO DE ASIGNACIÓN</label>
              <select name="tipoAsignacion" id="tipoAsignacion" required>
                <option value="">Selecciona:</option>
                <option value="1">Reemplazo</option>
                <option value="2">Nuevo Cargo</option>
              </select>
            </div>
        </div>
        <div className="onceVer">
          <div className="inVer">
              <label>VALOR</label>
              <input type="number" id="valor" name="valor" placeholder="$$$$$$$" required/>
            </div>
        </div>
        <div className="doceVer">
            <div className="inVer">
              <label>MOTIVO DE SOLICITUD</label>
              <select name="motSolicitud" id="motSolicitud" required> 
                <option value="">Selecciona:</option>
                <option value="1">Reemplazo</option>
                <option value="2">Nuevo Cargo</option>
              </select>
            </div>
        </div>
        <div className="treceVer">
        <div className="inVer" >
            <label>HORARIO DE TRABAJO</label>
            <select name="horTrabajo" id="horTrabajo" required>
                <option value="">Selecciona:</option>
                <option value="">Oficina</option>    
                <option value="">Rotativos</option>         
              </select>
            </div>
        </div>
        <div className="catorceVer">
            <div className="inVer">
              <label>MODALIDAD DE CONTRATO</label>
              <select name="modContrato" id="modContrato" required>
                <option value="">Selecciona:</option>
                <option value="1">Presencial</option>
                <option value="2">Remoto</option>
                <option value="3">Hibrido</option>
                <option value="4">Medio Tiempo</option>
              </select>
            </div>
        </div>
        <div className="quinceVer">
        <div className="inVer" >
            <label>EXPERIENCIA</label>
            <select name="experiencia" id="experiencia" required>
                <option value="">Selecciona:</option>
                <option value="">Sin Experiencia</option>
                <option value="">Menos de un año</option>
                <option value="">1 año</option>
                <option value="">2 años</option>
                <option value="">3 años</option>
                <option value="">Más de 4 años</option>              
              </select>
            </div>
        </div>
        <div className="dieciseisVer">
            <div className="inVer">
              <label>TIPO DE CONTRATO</label>
              <select name="tipoContrato" id="tipoContrato" required>
                <option value="">Selecciona:</option>
                <option value="1">Obra Labor</option>
                <option value="2">Fijo</option>
                <option value="3">Indefinido</option>
                <option value="4">Aprendizaje</option>
                <option value="5">Prestacion de Servicios</option>
                <option value="6">Horas</option>
                <option value="7">Otro</option>
              </select>
            </div>
        </div>
        <div className="diecisieteVer">
        <div className="inVer" >
            <label>FORMACION ACADEMICA</label>
            <select name="formAcademica" id="formAcademica" required>
                <option value="">Selecciona:</option>
                <option value="">Bachiller</option>
                <option value="">Técnico</option>
                <option value="">Tecnologo</option>
                <option value="">Profesional</option>
                <option value="">otro</option>     
              </select>
            </div>
        </div>
        <div className="dieciochoVer">
            <div className="inVer">
              <label>NÚMERO DE HORAS</label>
              <input type="number" id="numHoras" name="numHoras" min="1" max="48" placeholder="##"/>
            </div>
        </div>
        <div className="diecinueveVer">
            <div className="inVer" >
              <label>OBSERVACIONES</label>
              <textarea name="observacionVer" id="observacionVer" cols="30" rows="10"></textarea>
            </div>
        </div>
      </form>
  )
}

export default FormVerReq