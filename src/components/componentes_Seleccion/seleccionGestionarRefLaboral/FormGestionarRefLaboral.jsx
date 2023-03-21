import React from 'react'
import "./formGestionarRefLaboral.css"
import TablaRef_Laboral from "../../componentes_Seleccion/gestionar_Ref_Laboral/tablaRef_Laboral/TablaRef_Laboral"

const FormGestionarRefLaboral = () => {
  return (
    <div className="divRefLaboral">
    <div className="oneRefLaboral">
      <div className="inRefLaboral">
          <h1>Referencias Laborales</h1>
      </div>
    </div>
    <div className="twoRefLaboral">
      <div className="inRefLaboral">
          <div className="imagenPuntosRefLaboral">
          </div>
      </div>
    </div>
    <div className="threeRefLaboral">
      <div className="inRefLaboral">
          <div className="tablaRef_Laboral">
          <TablaRef_Laboral />
          </div>
      </div>
    </div>
    <div className="fourRefLaboral">
      <div className="inRefLaboral">
        <form className="formRefLaboral">
          <div className="oneRefLab">
            <div className="ifRefLaboral">
              <label>EMPRESA</label>
              <input type="text" id="empresaRefLab" name="empresaRefLab" min="1" max="100" required/>
            </div> 
          </div>
          <div className="twoRefLab">
            <div className="ifRefLaboral">
              <label>TELEFONO</label>
              <input type="text" id="telefonoRefLab" name="telefonoRefLab" min="1" max="100" required/>
            </div> 
          </div>
          <div className="threeRefLab">
            <div className="ifRefLaboral">
              <label>CARGO</label>
              <input type="text" id="cargoRefLab" name="cargoRefLab" min="1" max="100" required/>
            </div> 
          </div>
          <div className="fourRefLab">
            <div className="ifRefLaboral">
              <label>EMAIL</label>
              <input type="email" id="correoRefLab" name="correoRefLab" min="1" max="100" required/>
            </div> 
          </div>
          <div className="fiveRefLab">
            <div className="ifRefLaboral">
              <label>DIRECCION</label>
              <input type="text" id="direccionRefLab" name="direccionRefLab" min="1" max="100" required/>
            </div> 
          </div>
          <div className="sixRefLab">
            <div className="ifRefLaboral">
              <label>FECHA DE RETIRO</label>
              <input type="text" id="fRetiro" name="fRetiro" min="1" max="100" required/>
            </div> 
          </div>
          <div className="sevenRefLab">
            <div className="ifRefLaboral">
              <label>FECHA DE INGRESO</label>
              <input type="text" id="fIngreso" name="fIngreso" min="1" max="100" required/>
            </div> 
          </div>
          <div className="eightRefLab">
            <div className="ifRefLaboral">
            <label>CARGO FUNCIONARIO</label>
              <input type="text" id="carFuncionario" name="carFuncionario" min="1" max="100" required/>
            </div> 
          </div>
          <div className="nineRefLab">
            <div className="ifRefLaboral">
              <label>FUNCIONARIO</label>
              <input type="text" id="funcionario" name="funcionario" min="1" max="100" required/>
            </div> 
          </div>
          <div className="tenRefLab">
            <div className="ifRefLaboral">
              <label>CAUSAL DE RETIRO</label>
              <input type="text" id="causaRetiro" name="causaRetiro" min="1" max="100" required/>
            </div> 
          </div>
          <div className="elevenRefLab">
            <div className="ifRefLaboral">
              <label>REFERENCIA</label>
              <textarea name="referenciaLab" id="referenciaLab" cols="30" rows="10"></textarea>
            </div> 
          </div>
          <div className="twelveRefLab">
            <div className="ifRefLaboral">
                <div>
                    <button className="btnGuardarRefLaboral">Guardar</button>
                </div>
            </div> 
          </div>
          <div className="treceRefLab">
            <div className="ifRefLaboral">
                <div>
                  <button className="btnCancelarRefLaboral">Cancelar</button>
                </div>
            </div> 
          </div>
      </form>
      </div>
    </div>
  </div>
  )
}

export default FormGestionarRefLaboral