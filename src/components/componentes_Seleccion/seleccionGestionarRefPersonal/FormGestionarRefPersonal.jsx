import React from 'react'
import "./formGestionarRefPersonal.css"
import TablaRef_Personal from "../../componentes_Seleccion/gestionar_Ref_Personal/tablaRef_Personal/TablaRef_Personal"

const FormGestionarRefPersonal = () => {
  return (
    <div className="divRefPersonal">
          <div className="oneRefPersonal">
            <div className="inRefPersonal">
                <h1>Referencias Personales</h1>
            </div>
          </div>
          <div className="twoRefPersonal">
            <div className="inRefPersonal">
                <div className="imagenPuntosRefPersonal">
                </div>
            </div>
          </div>
          <div className="threeRefPersonal">
            <div className="inRefPersonal">
                <div className="tablaRef_Personal">
                <TablaRef_Personal />
                </div>
            </div>
          </div>
          <div className="fourRefPersonal">
            <div className="inRefPersonal">
              <form className="formRefPersonal">
                <div className="oneRefPer">
                  <div className="ifRefPersonal">
                    <label>NOMBRES</label>
                    <input type="text" id="nombreRefPers" name="nombreRefPers" min="1" max="100" required/>
                  </div> 
                </div>
                <div className="twoRefPer">
                  <div className="ifRefPersonal">
                    <label>APELLIDOS</label>
                    <input type="text" id="apellidoRefPers" name="apellidoRefPers" min="1" max="100" required/>
                  </div> 
                </div>
                <div className="threeRefPer">
                  <div className="ifRefPersonal">
                    <label>TELEFONO</label>
                    <input type="text" id="telefonoRefPers" name="telefonoRefPers" min="1" max="100" required/>
                  </div> 
                </div>
                <div className="fourRefPer">
                  <div className="ifRefPersonal">
                    <label>TIPO DOCUMENTO</label>
                    <select name="tipoDocRefPers" id="tipoDocRefPers" required>
                        <option value="">Selecciona:</option>
                        <option value="">Cedula Ciudadania</option>
                        <option value="">Pasaporte</option>  
                    </select>
                  </div> 
                </div>
                <div className="fiveRefPer">
                  <div className="ifRefPersonal">
                    <label>N° DOCUMENTO</label>
                    <input type="text" id="idRefPers" name="idRefPers" min="1" max="100" required/>
                  </div> 
                </div>
                <div className="sixRefPer">
                  <div className="ifRefPersonal">
                    <label>PARENTESCO</label>
                    <input type="text" id="parentesco" name="parentesco" min="1" max="100" required/>
                  </div> 
                </div>
                <div className="sevenRefPer">
                  <div className="ifRefPersonal">
                    <label>VALIDACIÓN</label>
                    <select name="validacion" id="validacion" required>
                        <option value="">Selecciona:</option>
                        <option value="">Corresponde</option>
                        <option value="">No Corresponde</option>
                    </select>
                  </div> 
                </div>
                <div className="eightRefPer">
                  <div className="ifRefPersonal">
                      <div className="imagenPuntosRefPersonal">
                      </div>
                  </div> 
                </div>
                <div className="nineRefPer">
                  <div className="ifRefPersonal">
                    <label>REFERENCIA</label>
                    <textarea name="referenciaPers" id="referenciaPers" cols="30" rows="10"></textarea>
                  </div> 
                </div>
                <div className="tenRefPer">
                  <div className="ifRefPersonal">
                      <div>
                          <button className="btnGuardarRefPersonal">Guardar</button>
                      </div>
                  </div> 
                </div>
                <div className="elevenRefPer">
                  <div className="ifRefPersonal">
                      <div>
                        <button className="btnCancelarRefPersonal">Cancelar</button>
                      </div>
                  </div> 
                </div>
            </form>
            </div>
          </div>
        </div>
  )
}

export default FormGestionarRefPersonal