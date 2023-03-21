import React, {useState} from "react"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./formCitacionReprogramar.css"

const FormCitacionReprogramar = () => {

    const [showHide, setShowHide] = useState('');
    const handleShowHide = (event) => {
        const getOtraCitacion = event.target.value;
        setShowHide(getOtraCitacion);
    }

    const [entrevistador, setEntrevistador] = useState([]);
    const [selectedEntrevistador, setSelectedEntrevistador] = useState("");
    const allEntrevistador = ["ANDRES ALVAREZ", "JANE ROBINSOM", "BOB MARLEY"];

    const handleEntrevitadorChange = (e) => {
        setSelectedEntrevistador(e.target.value);
    };

    const handleAddEntrevistador = () => {
        if (selectedEntrevistador !== "") {
            setEntrevistador([...entrevistador, selectedEntrevistador]);
            setSelectedEntrevistador("");
        }
    };

    const handleDeleteEntrevistador = (name) => {
        const newEntrevistador = entrevistador.filter((n) => n !== name);
        setEntrevistador(newEntrevistador);
    };

    const getOptions = () => {
        const options = allEntrevistador.map((name) => (
            <option key={name} value={name}>
                {name}
            </option>
        ));
        entrevistador.forEach((name) => {
            options.push(
                <option key={name} value={name} disabled>
                    {name}
                </option>
            );
        });
        return options;
    };

    return (
        <form className="formReprogramarCitacion" >
        <div className="oneReprogramarCitacion">
          <div className="inReprogramarCitacion" >
            <h1>INFORMACIÓN DE LA CITACIÓN</h1>
          </div>
        </div>
        <div className="twoReprogramarCitacion">
            <div className="inReprogramarCitacion" >
              <div className="imagenPuntosReprogramarCitacion">
              </div>
            </div>
        </div>
        <div className="threeReprogramarCitacion">
            <div className="inReprogramarCitacion">
                <label>TIPO CITACIÓN</label>
                <select name="tCitacion" id="tCitacion"  onChange={(e)=>(handleShowHide(e))} required>
                  <option value="">Selecciona:</option>
                  <option value="1">PSICOLOGO</option>
                  <option value="2">JEFE INMEDIATO</option>
                  <option value="3">OTRO</option>
                </select>
            </div>
        </div>
        {
          showHide ==='3' && (
        <div className="fourReprogramarCitacion">
          <div className="inReprogramarCitacion" >
            <label>OTRA CITACIÓN</label>
            <select name="oCitacion" id="oCitacion" required>
                <option value="">Selecciona:</option>
                <option value="bogota">BOGOTA</option>
                <option value="barramquilla">BARRANQUILLA</option>
                <option value="medellin">MEDELLIN</option>
                <option value="cali">CALI</option>
                <option value="yopal">YOPAL</option>
              </select>
            </div>
        </div>
            )
        }
        <div className="fiveReprogramarCitacion">
        <div className="inReprogramarCitacion">
              <label>FECHA DE ENTREVISTA</label>
              <input type="date" id="fEntrevista" name="fEntrevista" min="1" max="100" placeholder="###" required />
            </div>
        </div>
        <div className="sixReprogramarCitacion">
            <div className="inReprogramarCitacion" >
              <label>HORA DE ENTREVISTA</label>
              <input type="number" id="hEntrevista" name="hEntrevista" min="1" max="100" placeholder="###" required />
            </div>
        </div>
        <div className="sevenReprogramarCitacion">
            <div className="inReprogramarCitacion">
              <label>TIPO DE ENTREVISTA</label>
              <select name="tEntrevista" id="tEntrevista" required>
                <option value="">Selecciona:</option>
                <option value="1">Presencial</option>
                <option value="2">Virtual</option>
              </select>
            </div>
        </div>
        <div className="eightReprogramarCitacion">
        <div className="inReprogramarCitacion">
              <label>LUGAR O ENLACE</label>
              <input type="url" id="lEntrevista" name="lEntrevista" required />
            </div>
        </div>
        <div className="nineReprogramarCitacion">
            <div className="inReprogramarCitacion">
              <div>
                <label>ENTREVISTADOR</label>
              </div>
              <div className="inReprogramarEntrevistador">
                  <select name="entrevistadorRep" id="entrevistadorRep" value={selectedEntrevistador} onChange={handleEntrevitadorChange} required>
                    <option value="">Selecciona:</option>
                    {getOptions()}
                  </select>
                  <button className="entrevistadorButton" id="entrevistadorButton" onClick={handleAddEntrevistador}><ControlPointIcon /></button>
              </div>
            </div>
        </div>
        <div className="tenReprogramarCitacion">
            <div className="inReprogramarCitacion">
                <label>ENTREVISTADOR SELECCIONADO</label>
                <table>
                    <tbody>
                    {entrevistador.map((name) => (
                      <tr key={name}>
                          <td>{name}</td>
                          <td>
                            <button className="entrevistadorDelete" id="entrevistadorDelete"  onClick={() => handleDeleteEntrevistador(name)}><DeleteOutlineIcon /></button>
                          </td>
                      </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="onceReprogramarCitacion">
            <div className="inReprogramarCitacion">
            <label>RECOMENDACIONES</label>
              <textarea name="obsReprogramar" id="obsReprogramar" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div className="doceReprogramarCitacion">
        <div className="inReprogramarCitacion">
            <div>
              <button className="btnGuardarReprogramarCitacion">Guardar</button>
              </div>
            </div>
        </div>
        <div className="treceReprogramarCitacion">
        <div className="inReprogramarCitacion">
            <div>
              <button className="btnCancelarReprogramarCitacion">Cancelar</button>
              </div>
            </div>
        </div>
      </form>
    )
}

export default FormCitacionReprogramar