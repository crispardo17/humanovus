import React from 'react'
import "./formEntrevistarEditar.css"
import Pestañas_Entrevistar from "../../../componentes_Seleccion/pestañas_Entrevistar/Pestañas_Entrevistar"

const FormEntrevistarEditar = () => {
  return (
    <form className="formEntrevistarEditar">
            <div className="formEntrevistarEditar1">
                <div className="divFormEntEditar1">
                    <label id="labelEntrevistar" >NOMBRE:</label>
                    <input type="text" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="juan david" disabled/>
                </div>
                <div className="divFormEntEditar2">
                    <label id="labelEntrevistar" >APELLIDO:</label>
                    <input type="text" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="Muultiverso" disabled />
                </div>
                <div className="divFormEntEditar3">
                    <label id="labelEntrevistar" >DIRECCION:</label>
                    <input type="text" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="Calle 70 A 23 - 35" disabled />
                </div>
                <div className="divFormEntEditar4">
                    <label id="labelEntrevistar" >TELEFONO:</label>
                    <input type="number" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="3014632" disabled />
                </div>
                <div className="divFormEntEditar5">
                    <label id="labelEntrevistar" >CELULAR:</label>
                    <input type="number" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="3204198809" disabled />
                </div>
                <div className="divFormEntEditar6">
                    <label id="labelEntrevistar" >WHATSAPP:</label>
                    <input type="number" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="3204198809" disabled />
                </div>
            </div>
            <div className="formEntrevistarEditar2">
                <Pestañas_Entrevistar/>
            </div> 
            <div className="formEntrevistarEditar3">
                <div className="divFormEnt7">
                    <div className="divTextArea" >
                        <h1>Informe Proceso <br /> Entrevista</h1>
                    </div>
                </div>
                <div className="divFormEntEditar8">
                    <div className="divTextArea" >
                        <div className="imagenPuntosEntrevistarEditar">
                        </div>
                    </div>
                </div>
                <div className="divFormEntEditar9">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >DESCRIPCION VINCULO FAMILIAR:</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." required/>
                    </div>
                </div>
                <div className="divFormEntEditar10">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >FORMACION ACADEMICA:</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." required/>
                    </div>
                </div>
                <div className="divFormEntEditar11">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >MOTIVACIONES INTERESES:</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." required/>
                    </div>
                </div>
                <div className="divFormEntEditar12">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >EXPERIENCIA LABORAL:</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." required/>
                    </div>
                </div>
                <div className="divFormEntEditar13">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >CONCEPTO PSICOLOGICO:</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." required/>
                    </div>
                </div>
                <div className="divFormEntEditar14">
                    <div className="divTextArea" >
                    
                    </div>
                </div>
                <div className="divFormEntEditar15">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >GENOGRAMA::</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." required/>
                    </div>
                </div>
                <div className="divFormEntEditar16">
                    <div className="divTextArea" >
                        <div className="checkbox-EntrevistarEditar">
                            <input type="checkbox" className="entrevistar" id="apto_Entrevistar" name="apto_Entrevistar"  value="0" /> 
                            <label>APTO</label>  
                            <input type="checkbox" className="entrevistar" id="noApto_Entrevistar" name="noApto_Entrevistar"  value="1" /> 
                            <label>NO APTO</label>
                            <input type="checkbox" className="entrevistar" id="preseleccion_Entrevistar" name="preseleccion_Entrevistar" value="2" /> 
                            <label>PRESELECCIONADO</label>
                        </div>
                    </div>
                </div>
                <div className="divFormEntEditar17">
                    <div className="divTextArea" >
                        <button className="btnGuardarEntrevistarEditar">Guardar</button>
                    </div>
                </div>
                <div className="divFormEntEditar18">
                    <div className="divTextArea" >
                        <button className="btnCancelarEntrevistarEditar">Cancelar</button>
                    </div>
                </div>
            </div>      
        </form>
  )
}

export default FormEntrevistarEditar