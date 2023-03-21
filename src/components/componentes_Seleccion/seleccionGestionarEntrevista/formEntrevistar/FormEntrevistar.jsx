import React from 'react'
import "./formEntrevistar.css"
import Pestañas_Entrevistar from "../../../componentes_Seleccion/pestañas_Entrevistar/Pestañas_Entrevistar"

const FormEntrevistar = () => {
  return (
    <form className="formEntrevistar">
            <div className="formEntrevistar1">
                <div className="divFormEnt1">
                    <label id="labelEntrevistar" >NOMBRE:</label>
                    <input type="text" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="juan david" disabled/>
                </div>
                <div className="divFormEnt2">
                    <label id="labelEntrevistar" >APELLIDO:</label>
                    <input type="text" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="Muultiverso" disabled />
                </div>
                <div className="divFormEnt3">
                    <label id="labelEntrevistar" >DIRECCION:</label>
                    <input type="text" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="Calle 70 A 23 - 35" disabled />
                </div>
                <div className="divFormEnt4">
                    <label id="labelEntrevistar" >TELEFONO:</label>
                    <input type="number" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="3014632" disabled />
                </div>
                <div className="divFormEnt5">
                    <label id="labelEntrevistar" >CELULAR:</label>
                    <input type="number" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="3204198809" disabled />
                </div>
                <div className="divFormEnt6">
                    <label id="labelEntrevistar" >WHATSAPP:</label>
                    <input type="number" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="3204198809" disabled />
                </div>
            </div>
            <div className="formEntrevistar2">
                <Pestañas_Entrevistar/>
            </div> 
            <div className="formEntrevistar3">
                <div className="divFormEnt7">
                    <div className="divTextArea" >
                        <h1>Informe Proceso <br /> Entrevista</h1>
                    </div>
                </div>
                <div className="divFormEnt8">
                    <div className="divTextArea" >
                        <div className="imagenPuntosEntrevistar">
                        </div>
                    </div>
                </div>
                <div className="divFormEnt9">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >DESCRIPCION VINCULO FAMILIAR:</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." required/>
                    </div>
                </div>
                <div className="divFormEnt10">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >FORMACION ACADEMICA:</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." required/>
                    </div>
                </div>
                <div className="divFormEnt11">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >MOTIVACIONES INTERESES:</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." required/>
                    </div>
                </div>
                <div className="divFormEnt12">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >EXPERIENCIA LABORAL:</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." required/>
                    </div>
                </div>
                <div className="divFormEnt13">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >CONCEPTO PSICOLOGICO:</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." required/>
                    </div>
                </div>
                <div className="divFormEnt14">
                    <div className="divTextArea" >
                    
                    </div>
                </div>
                <div className="divFormEnt15">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >GENOGRAMA::</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." required/>
                    </div>
                </div>
                <div className="divFormEnt16">
                    <div className="divTextArea" >
                        <div className="checkbox-Entrevistar">
                            <input type="checkbox" className="entrevistar" id="apto_Entrevistar" name="apto_Entrevistar"  value="0" /> 
                            <label>APTO</label>  
                            <input type="checkbox" className="entrevistar" id="noApto_Entrevistar" name="noApto_Entrevistar"  value="1" /> 
                            <label>NO APTO</label>
                            <input type="checkbox" className="entrevistar" id="preseleccion_Entrevistar" name="preseleccion_Entrevistar" value="2" /> 
                            <label>PRESELECCIONADO</label>
                        </div>
                    </div>
                </div>
                <div className="divFormEnt17">
                    <div className="divTextArea" >
                        <button className="btnGuardarEntrevistar">Guardar</button>
                    </div>
                </div>
                <div className="divFormEnt18">
                    <div className="divTextArea" >
                        <button className="btnCancelarEntrevistar">Cancelar</button>
                    </div>
                </div>
            </div>      
        </form>
  )
}

export default FormEntrevistar