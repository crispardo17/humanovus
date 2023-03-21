import React from 'react'
import "./formContratar.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FormContratar = () => {
  return (
    <form className="formContratar" >
            <div className="oneContratar">
              <div className="inContratar" >
                <h1>Informacion Candidato</h1>
              </div>
            </div>
            <div className="twoContratar">
                <div className="inContratar" >
                    <div className="imagenPuntosContratar">
                    </div>
                </div>
            </div>
            <div className="threeContratar">
                <div className="inContratar">
                  <label>TIPO DE IDENTIFICACION</label>
                  <select name="tipoId" id="tipoId" required>
                    <option value="">Selecciona:</option>
                    <option value="1">CC</option>
                    <option value="2">PP</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
            </div>
            <div className="fourContratar">
              <div className="inContratar" >
                    <label>N° DE IDENTIFICACION</label>
                    <input type="number" id="numId" name="numId" placeholder="###" required />
                </div>
            </div>
            <div className="fiveContratar">
            <div className="inContratar">
                  <label>FECHA DE EXPEDICIÓN</label>
                  <input type="date" id="fecExpedicion" name="fecExpedicion" placeholder="fecha de expedición" required />
                </div>
            </div>
            <div className="sixContratar">
                <div className="inContratar">
                  <label>CIUDAD DE EXPEDICIÓN</label>
                  <input type="text" id="ciudadExp" name="ciudadExp" placeholder="ciudad expedicion" required/>
                </div>
            </div>
            <div className="sevenContratar">
            <div className="inContratr">
                  <label>NOMBRES</label>
                  <input type="text" id="nombre" name="nombre" placeholder="###" required />
                </div>
            </div>
            <div className="eightContratar">
                <div className="inContratar">
                  <label>APELLIDOS</label>
                  <input type="text" id="apellido" name="apellido"  placeholder="###" required />
                </div>
            </div>
            <div className="nineContratar">
              <div className="inContratar">
                  <label>N° LIBRETA MILITAR</label>
                  <input type="number" id="libMilitar" name="libMilitar" placeholder="####" required/>
                </div>
            </div>
            <div className="tenContratar">
                <div className="inContratar">
                  <label>RH</label>
                  <input type="text" id="rh" name="rh" placeholder="RH" required/>  
                </div>
            </div>
            <div className="onceContratar">
                <div className="inContratar" >
                  <label>ESTADO CIVIL</label>
                  <select name="estCivil" id="estCivil" required>
                        <option value="">Selecciona:</option>
                        <option value="1">Soltero</option>
                        <option value="2">Casado</option>
                        <option value="3">Divorciado</option>
                    </select>
                </div>
            </div>
            <div className="doceContratar">
                <div className="inContratar">
                  <label>BUSCAR EXAMENES</label>
                    <select name="buscarExamen" id="buscarExamen" required>
                        <option value="">Selecciona:</option>
                        <option value="1">Examen medico spin</option>
                        <option value="2">Audiometria</option>
                        <option value="3">Visiomtria</option>
                    </select>
                </div>
            </div>
            <div className="treceContratar">
                <div className="inContratar" >
                    <h1>Información Seguridad Social</h1>
                </div>
            </div>
            <div className="catorceContratar">
            <div className="inContratar" >
                    <div className="imagenPuntosContratar">
                    </div>
                </div>
            </div>
            <div className="quinceContratar">
                <div className="inContratar" >
                    <label>EPS</label>
                    <div className='eps'>
                        <input type="text" id="eps" name="eps" required/>
                        <button id='verButton'>Ver</button>
                    </div>
                </div>
            </div>
            <div className="dieciseisContratar">
                <div className="inExa">
                    <label>CAJA DE COMPENSACIÓN</label>
                    <input type="text" id="cajaCompensacion" name="cajaCompensacion" required/>
                </div>
            </div>
            <div className="diecisieteContratar">
            <div className="inContratar" >
                  <label>FONDOS DE PENSIONES</label>
                  <div className='fdp'>
                    <input type="text" id="fdp" name="fdp" required/>
                    <button id='verButton'>Ver</button>
                  </div>
                </div>
            </div>
            <div className="dieciochoContratar">
                <div className="inContratar">
                  <label>ARL</label>
                    <select name="arl" id="arl" required>
                        <option value="">Selecciona:</option>
                        <option value="1">Examen medico spin</option>
                        <option value="2">Audiometria</option>
                        <option value="3">Visiomtria</option>
                    </select>
                </div>
            </div>
            <div className="diecinueveContratar">
                <div className="inContratar">
                    <h1>Información Contacto</h1>
                </div>
            </div>
            <div className="veinteContratar">
                <div className="inContratar" >
                    <div className="imagenPuntosContratar">
                    </div>
                </div>
            </div>
            <div className="veintiunoContratar">
                <div className="inContratar" >
                    <label>EMPRESA</label>
                    <input type="text" id="empresa" name="empresa" required/>
                </div>
            </div>
            <div className="veintidosContratar">
                <div className="inContratar" >
                    <label>PROCESO</label>
                    <select name="proceso" id="proceso" required>
                        <option value="">Selecciona:</option>
                        <option value="1">Proceso1</option>
                        <option value="2">Proceso2</option>
                        <option value="3">Proceso3</option>
                    </select>
                </div>
            </div>
            <div className="veintitresContratar">
                <div className="inContratar" >
                    <label>SUBPROCESO</label>
                    <select name="subproceso" id="subproceso" required>
                        <option value="">Selecciona:</option>
                        <option value="1">subProceso1</option>
                        <option value="2">subProceso2</option>
                        <option value="3">subProceso3</option>
                    </select>
                </div>
            </div>
            <div className="veinticuatroContratar">
                <div className="inContratar" >
                    <label>CAMPAÑA</label>
                    <select name="campaña" id="campaña" required>
                        <option value="">Selecciona:</option>
                        <option value="1">campaña1</option>
                        <option value="2">campaña2</option>
                        <option value="3">campaña3</option>
                    </select>
                </div>
            </div>
            <div className="veinticincoContratar">
                <div className="inContratar" >
                    <label>CARGO</label>
                    <select name="cargo" id="cargo" required>
                        <option value="">Selecciona:</option>
                        <option value="1">cargo1</option>
                        <option value="2">cargo2</option>
                        <option value="3">cargo3</option>
                    </select>
                </div>
            </div>
            <div className="veintiseisContratar">
                <div className="inContratar" >
                    <label>MODALIDAD</label>
                    <select name="modalidad" id="modalidad" required>
                        <option value="">Selecciona:</option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                    </select>
                </div>
            </div>
            <div className="veintisieteContratar">
                <div className="inContratar" >
                    <label>TIPO DE CONTRATO</label>
                    <select name="tipoContrato" id="tipoContrato" required>
                        <option value="">Selecciona:</option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                    </select>
                </div>
            </div>
            <div className="veintiochoContratar">
                <div className="inContratar" >
                    <label>N° DE HORAS</label>
                    <input type="number" id="numHoras" name="numHoras" required/>
                </div>
            </div>
            <div className="veintinueveContratar">
                <div className="inContratar" >
                    <label>VALOR</label>
                    <input type="number" id="valor" name="valor" required/>
                </div>
            </div>
            <div className="treintaContratar">
                <div className="inContratar" >
                    <label>TIPO DE ASIGNACIÓN</label>
                    <select name="tipoAsignacion" id="tipoAsignacion" required>
                        <option value="">Selecciona:</option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                    </select>
                </div>
            </div>
            <div className="treintayunoContratar">
                <div className="inContratar" >
                    <label>FECHA DE CONTRATO</label>
                    <input type="date" id="fContrato" name="fContrato" required/>
                </div>
            </div>
            <div className="treintaydosContratar">
                <div className="inContratar" >
                    
                </div>
            </div>
            <div className="treintaytresContratar">
                <div className="inContratar" >
                  <h1>Información de Anexos al Contrato</h1>
                </div>
            </div>
            <div className="treintaycuatroContratar">
                <div className="inContratar" >
                    <div className="imagenPuntosContratar">
                    </div>
                </div>
            </div>
            <div className="treintaycincoContratar">
                <div className="inContratar" >
                  <FormGroup>
                      <FormControlLabel control={<Checkbox  />} label="Acuerdo de confiencialidad" />
                      <FormControlLabel control={<Checkbox  />} label="Perfil de cargo" />
                      <FormControlLabel control={<Checkbox  />} label="Encuesta de Salud" />
                      <FormControlLabel control={<Checkbox  />} label="Recomendaciones Medicas" />
                      <FormControlLabel control={<Checkbox  />} label="Codigo de vestimenta" />
                  </FormGroup>
                </div>
            </div>
            <div className="treintayseisContratar">
                <div className="inContratar" >
                  <div>
                  <button className="btnGuardar">Guardar</button>
                  </div>
                </div>
            </div>
            <div className="treintaysieteContratar">
                <div className="inContratar" >
                  <div>
                  <button className="btnCancelar">Cancelar</button>
                  </div>
                </div>
            </div>
          </form>
  )
}

export default FormContratar