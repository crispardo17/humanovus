import React from 'react'
import "./formEntrevistarVer.css"
import Pestañas_Entrevistar from "../../../componentes_Seleccion/pestañas_Entrevistar/Pestañas_Entrevistar"

const FormEntrevistarVer = () => {
  return (
    <form className="formEntrevistarVer">
            <div className="formEntrevistarVer1">
                <div className="divFormEntVer1">
                    <label id="labelEntrevistar" >NOMBRE:</label>
                    <input type="text" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="juan david" disabled/>
                </div>
                <div className="divFormEntVer2">
                    <label id="labelEntrevistar" >APELLIDO:</label>
                    <input type="text" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="Muultiverso" disabled />
                </div>
                <div className="divFormEntVer3">
                    <label id="labelEntrevistar" >DIRECCION:</label>
                    <input type="text" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="Calle 70 A 23 - 35" disabled />
                </div>
                <div className="divFormEntVer4">
                    <label id="labelEntrevistar" >TELEFONO:</label>
                    <input type="number" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="3014632" disabled />
                </div>
                <div className="divFormEntVer5">
                    <label id="labelEntrevistar" >CELULAR:</label>
                    <input type="number" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="3204198809" disabled />
                </div>
                <div className="divFormEntVer6">
                    <label id="labelEntrevistar" >WHATSAPP:</label>
                    <input type="number" id="inputEntrevistar" name="fEntrevista" min="1" max="100" placeholder="3204198809" disabled />
                </div>
            </div>
            <div className="formEntrevistarVer2">
                <Pestañas_Entrevistar/>
            </div> 
            <div className="formEntrevistarVer3">
                <div className="divFormEntVer7">
                    <div className="divTextArea" >
                        <h1>Informe Proceso <br /> Entrevista</h1>
                    </div>
                </div>
                <div className="divFormEntVer8">
                    <div className="divTextArea" >
                        <div className="imagenPuntosEntrevistar">
                        </div>
                    </div>
                </div>
                <div className="divFormEntVer9">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >DESCRIPCION VINCULO FAMILIAR:</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." disabled/>
                    </div>
                </div>
                <div className="divFormEntVer10">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >FORMACION ACADEMICA:</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." disabled/>
                    </div>
                </div>
                <div className="divFormEntVer11">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >MOTIVACIONES INTERESES:</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." disabled/>
                    </div>
                </div>
                <div className="divFormEntVer12">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >EXPERIENCIA LABORAL:</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." disabled/>
                    </div>
                </div>
                <div className="divFormEntVer13">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >CONCEPTO PSICOLOGICO:</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." disabled/>
                    </div>
                </div>
                <div className="divFormEntVer14">
                    <div className="divTextArea" >
                    
                    </div>
                </div>
                <div className="divFormEntVer15">
                    <div className="divTextArea" >
                        <label id="labelEntrevistar" >GENOGRAMA::</label>
                        <textarea type="text" id="vinculoFamiliar" name="fEntrevista" placeholder="Descripcion..." disabled/>
                    </div>
                </div>
                <div className="divFormEntVer16">
                    <div className="divTextArea" >
                        <div className="checkbox-EntrevistarVer">
                            <input type="checkbox" className="entrevistarVer" id="apto_Entrevistar" name="apto_Entrevistar"  value="0" /> 
                            <label>APTO</label>  
                            <input type="checkbox" className="entrevistarVer" id="noApto_Entrevistar" name="noApto_Entrevistar"  value="1" /> 
                            <label>NO APTO</label>
                            <input type="checkbox" className="entrevistarVer" id="preseleccion_Entrevistar" name="preseleccion_Entrevistar" value="2" /> 
                            <label>PRESELECCIONADO</label>
                        </div>
                    </div>
                </div>
                <div className="divFormEntVer17">
                    <div className="divTextArea" >
                        <button className="btnGuardarEntrevistarVer">Guardar</button>
                    </div>
                </div>
                <div className="divFormEntVer18">
                    <div className="divTextArea" >
                        <button className="btnCancelarEntrevistarVer">Cancelar</button>
                    </div>
                </div>
            </div>      
        </form>
  )
}

export default FormEntrevistarVer