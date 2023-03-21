import "./modalAsignar.css"
import {useState} from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const modalAsignar = ({ isOpen, closeModal }) => {

    const [psicologoChecked, setPsicologoChecked] = useState(false);
    const [grupoChecked, setGrupoChecked] = useState(false);
    const [showPsicologo, setShowPsicologo] = useState(false);
    const [showGrupo, setShowGrupo] = useState(false);
  
    const handleShowPsicologo = () => {
      setPsicologoChecked(true);
      setGrupoChecked(false);
      setShowPsicologo(true);
      setShowGrupo(false);
    }
  
    const handleShowGrupo = () => {
      setPsicologoChecked(false);
      setGrupoChecked(true);
      setShowGrupo(true);
      setShowPsicologo(false);
    }

    const [names, setNames] = useState([]);
    const [selectedName, setSelectedName] = useState("");
    const allNames = ["ANDRES ALVAREZ", "JANE ROBINSOM", "BOB MARLEY"];

    const handleSelectChange = (e) => {
    setSelectedName(e.target.value);
    };

    const handleAddName = () => {
    if (selectedName !== "") {
      setNames([...names, selectedName]);
      setSelectedName("");
     }
    };

    const handleDeleteName = (name) => {
    const newNames = names.filter((n) => n !== name);
    setNames(newNames);
    };

    const getOptions = () => {
    const options = allNames.map((name) => (
      <option key={name} value={name}>
        {name}
      </option>
    ));
    names.forEach((name) => {
      options.push(
        <option key={name} value={name} disabled>
          {name}
        </option>
      );
    });
    return options;
    };
    

  return (
    <article className={`modal ${isOpen && "is-open"}`}>
        <div className="modal-fondoAsignar">
            <div className="modal-fondo1Asignar">
                <div className="div-imagenAsignar">
                  <div className="imagenOjoAsignar"></div>
                </div>
                <h3 className="nombreModalAsignar">ASIGNAR A:</h3>
            </div>
            <div className="modal-fondo2Asignar">
                <div className="checkbox-Asignar">  
                    <input type="checkbox" className="psicologo" id="persona" name="persona" checked={psicologoChecked} value="1" onChange={(e)=>(handleShowPsicologo(e)) }/> 
                    <label>PERSONA</label>
                    <input type="checkbox" className="psicologo" id="grupo" name="grupo" checked={grupoChecked} value="0" onChange={(e)=>(handleShowGrupo(e)) }/> 
                    <label>GRUPO</label>
                </div>
                {
                    showPsicologo &&(
                <div className="grid-AsignarPsicologo">
                    <div className="div-Psicologo1">
                        <label>PSICOLOGO</label>
                        <select  className="selectModalAnular" name="campaña" id="campaña" required>
                            <option value="">Selecciona:</option>
                            <option value="ANDRES ALVAREZ">ANDRES ALVAREZ</option>
                            <option value="LINA HUERTAS">LINA HUERTAS</option>
                        </select>
                    </div>
                    <div className="div-Psicologo2">
                        <button className="btnGuardarModalAsignar">Guardar</button>
                    </div>
                    <div className="div-Psicologo3">
                        <button className="btnCancelarModalAsignar" onClick={closeModal}>Cancelar</button>
                    </div>

                </div>
                 )
                }
                {
                    showGrupo &&(
                <div className="grid-AsignarGrupo">
                    <div className="div-Grupo1">
                        <div className="asignarTitulo">
                            <label>ASIGNAR A:</label>
                        </div>
                        <div className="asignarSelect">
                        <select  className="selectModalAsignar" name="selectModalAsignar" id="selectModalAsignar" value={selectedName} onChange={handleSelectChange}  required>
                            <option value="">Selecciona:</option>
                            {getOptions()}
                        </select>
                        <button className="asignarButton" id="asignarButton" onClick={handleAddName}><ControlPointIcon /></button>
                        </div>
                    </div>
                    <div className="div-Grupo2">
                        <label>ASIGNADO A:</label>
                        <table>
                            <tbody>
                                {names.map((name) => (
                                <tr key={name}>
                                    <td>{name}</td>
                                    <td>
                                    <button className="asignarDelete" id="asignarDelete"  onClick={() => handleDeleteName(name)}><DeleteOutlineIcon /></button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="div-Grupo3">
                        <button className="btnGuardarModalAsignar">Guardar</button>
                    </div>
                    <div className="div-Grupo4">
                        <button className="btnCancelarModalAsignar" onClick={closeModal}>Cancelar</button>
                    </div>

                </div>
                 )
                }  
            </div>
        </div>
    </article>
  )
}

export default modalAsignar

