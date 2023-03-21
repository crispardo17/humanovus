import "./formCitacionInsertar.css"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React, {useState} from "react"

const FormCitacionInsertar = () => {

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
    <form className="formInsertarCitacion" >
      <div className="oneInsertarCitacion">
        <div className="inInsertarCitacion" >
          <h1>INFORMACIÓN DE LA CITACIÓN</h1>
        </div>
      </div>
      <div className="twoInsertarCitacion">
        <div className="inInsertarCitacion" >
          <div className="imagenPuntosInsertarCitacion">
          </div>
        </div>
      </div>
      <div className="threeInsertarCitacion">
        <div className="inInsertarCitacion">
          <label>TIPO CITACIÓN</label>
          <select name="tipoCitacion" id="tipoCitacion" onChange={(e) => (handleShowHide(e))} required>
            <option value="">Selecciona:</option>
            <option value="1">PSICOLOGO</option>
            <option value="2">JEFE INMEDIATO</option>
            <option value="3">OTRO</option>
          </select>
        </div>
      </div>
      {
        showHide === '3' && (
          <div className="fourInsertarCitacion">
            <div className="inInsertarCitacion" >
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
      <div className="fiveInsertarCitacion">
        <div className="inInsertarCitacion">
          <label>FECHA DE ENTREVISTA</label>
          <input type="date" id="fEntrevista" name="fEntrevista" min="1" max="100" placeholder="###" required />
        </div>
      </div>
      <div className="sixInsertarCitacion">
        <div className="inInsertarCitacion" >
          <label>HORA DE ENTREVISTA</label>
          <input type="number" id="hEntrevita" name="hEntrevista" min="1" max="100" placeholder="###" required />
        </div>
      </div>
      <div className="sevenInsertarCitacion">
        <div className="inInsertarCitacion">
          <label>TIPO DE ENTREVISTA</label>
          <select name="tEntrevista" id="tEntrevista" required>
            <option value="">Selecciona:</option>
            <option value="1">Presencial</option>
            <option value="2">Virtual</option>
          </select>
        </div>
      </div>
      <div className="eightInsertarCitacion">
        <div className="inInsertarCitacion">
          <label>LUGAR O ENLACE</label>
          <input type="text" id="lugEntrevista" name="lugEntrevista" required />
        </div>
      </div>
      <div className="nineInsertarCitacion">
        <div className="inInsertarCitacion">
          <div>
            <label>ENTREVISTADOR</label>
          </div>
          <div className="inInsertarEntrevistador">
            <select name="entrevistador" id="entrevistador" value={selectedEntrevistador} onChange={handleEntrevitadorChange} required>
              <option value="">Selecciona:</option>
              {getOptions()}
            </select>
            <button className="entrevistadorButton" id="entrevistadorButton" onClick={handleAddEntrevistador}><ControlPointIcon /></button>
          </div>
        </div>
      </div>
      <div className="tenInsertarCitacion">
        <div className="inInsertarCitacionSelect">
          <label>ENTREVISTADOR SELECCIONADO</label>
          <table>
            <tbody>
              {entrevistador.map((name) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>
                    <button className="entrevistadorDelete" id="entrevistadorDelete" onClick={() => handleDeleteEntrevistador(name)}><DeleteOutlineIcon /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="onceInsertarCitacion">
        <div className="inInsertarCitacion">
          <label>RECOMENDACIONES</label>
          <textarea name="recomendacionInsertar" id="recomendacionInsertar" cols="30" rows="10"></textarea>
        </div>
      </div>
      <div className="doceInsertarCitacion">
        <div className="inInsertarCitacion">
          <div>
            <button className="btnGuardarInsertarCitacion">Guardar</button>
          </div>
        </div>
      </div>
      <div className="treceInsertarCitacion">
        <div className="inInsertarCitacion">
          <div>
            <button className="btnCancelarInsertarCitacion">Cancelar</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default FormCitacionInsertar