import React, {useState} from "react"
import "./formExamenesInsertar.css"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const FormExamenesInsertar = () => {

    const [examen, setExamen] = useState([]);
    const [selectedExamen, setSelectedExamen] = useState("");
    const allExamen = ["EXAMEN MEDICO ESPINAL", "AUDIOMETRIA", "VISIOMETRIA"];

    const handleExamenChange = (e) => {
    setSelectedExamen(e.target.value);
    };

    const handleAddExamen = () => {
    if (selectedExamen !== "") {
      setExamen([...examen, selectedExamen]);
      setSelectedExamen("");
     }
    };

    const handleDeleteExamen = (name) => {
    const newExamen = examen.filter((n) => n !== name);
    setExamen(newExamen);
    };

    const getOptions = () => {
    const options = allExamen.map((name) => (
      <option key={name} value={name}>
        {name}
      </option>
    ));
    examen.forEach((name) => {
      options.push(
        <option key={name} value={name} disabled>
          {name}
        </option>
      );
    });
    return options;
    };


  return (
    <form className="formInsertExa" >
            <div className="oneExa">
              <div className="inExa" >
                <h1>Informacion Candidato</h1>
              </div>
            </div>
            <div className="twoExa">
                <div className="inExa" >
                    <div className="imagenPuntosExa">
                    </div>
                </div>
            </div>
            <div className="threeExa">
                <div className="inExa">
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
            <div className="fourExa">
              <div className="inExa" >
                    <label>N° DE IDENTIFICACION</label>
                    <input type="number" id="numId" name="numId" min="1" max="100" placeholder="###" required />
                </div>
            </div>
            <div className="fiveExa">
            <div className="inExa">
                  <label>NOMBRES</label>
                  <input type="text" id="nombre" name="nombre" placeholder="nombres" required />
                </div>
            </div>
            <div className="sixExa">
                <div className="inExa">
                  <label>APELLIDOS</label>
                  <input type="text" id="apellido" name="apellido" placeholder="apellidos" required/>
                </div>
            </div>
            <div className="sevenExa">
            <div className="inExa">
                  <label>EDAD</label>
                  <input type="number" id="edad" name="edad" min="1" max="100" placeholder="###" required />
                </div>
            </div>
            <div className="eightExa">
                <div className="inExa">
                  <label>ALERGIAS</label>
                  <input type="text" id="alergia" name="alergia" placeholder="alergias" required/>
                </div>
            </div>
            <div className="nineExa">
              <div className="inExa">
                  <label>MEDICAMENTO</label>
                  <input type="text" id="medicamento" name="medicamento" placeholder="medicamento" required/>
                </div>
            </div>
            <div className="tenExa">
                <div className="inExa">
                    
                </div>
            </div>
            <div className="onceExa">
                <div className="inExa" >
                    <h1>Programacion Examen</h1>
                </div>
            </div>
            <div className="doceExa">
                <div className="inExa">
                    <div className="imagenPuntosExa">
                    </div>
                </div>
            </div>
            <div className="treceExa">
                <div className="inExa" >
                    <label>FECHA DE EXAMEN</label>
                    <input type="date" id="fExamen" name="fExamen" min="1" max="100" required/>
                </div>
            </div>
            <div className="catorceExa">
            <div className="inExa" >
                    <label>HORA DE EXAMEN</label>
                    <input type="hour" id="hExamen" name="hExamen" required/>
                </div>
            </div>
            <div className="quinceExa">
                <div className="inExa" >
                    <label>LUGAR DEL EXAMEN</label>
                    <input type="text" id="lugExamen" name="lugExamen" required/>
                </div>
            </div>
            <div className="dieciseisExa">
                <div className="inExa">
                    
                </div>
            </div>
            <div className="diecisieteExa">
            <div className="inExa" >
                    <h1>Examenes</h1>
                </div>
            </div>
            <div className="dieciochoExa">
                <div className="inExa">
                    <div className="imagenPuntosExa">
                    </div>
                </div>
            </div>
            <div className="diecinueveExa">
                <div className="inExa">
                    <label>BUSCAR EXAMENES</label>
                    <div className="inInsertarExamen">
                        <select name="examen" id="examen" value={selectedExamen} onChange={handleExamenChange} required>
                            <option value="">Selecciona:</option>
                            {getOptions()}
                        </select>
                        <button className="examenButton" id="examenButton" onClick={handleAddExamen}><ControlPointIcon /></button>
                    </div>
                </div>
            </div>
            <div className="veinteExa">
                <div className="inExa" >
                    <label>EXAMENES ELEGIDOS</label>
                        <table>
                            <tbody>
                            {examen.map((name) => (
                                <tr key={name}>
                                    <td>{name}</td>
                                    <td>
                                    <button className="examenDelete" id="examenDelete"  onClick={() => handleDeleteExamen(name)}><DeleteOutlineIcon /></button>
                                    </td>
                                </tr>
                             ))}
                            </tbody>
                        </table>
                </div>
            </div>
            <div className="veintiunoExa">
                <div className="inExa" >
                  <div>
                  <button className="btnGuardar">Guardar</button>
                  </div>
                </div>
            </div>
            <div className="veintidosExa">
                <div className="inExa" >
                  <div>
                  <button className="btnCancelar">Cancelar</button>
                  </div>
                </div>
            </div>
          </form>
  )
}

export default FormExamenesInsertar