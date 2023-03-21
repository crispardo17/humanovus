import React from 'react'
import "./pestaña_ModificarActPlanta.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Pestaña_ModificarActPlanta = () => {

    // tabs

    const [activeTab, setActiveTab] = useState("1");

    const cambiarTab = (numeroTab) => {
        if (activeTab !== numeroTab) {
            setActiveTab(numeroTab);
        }
    }

    // tabs

    // medicamentos

    const [showMedicamentos, setShowMedicamentos] = useState('');
    const handleShowMedicamentos = (event) => {
        const getMedicamentos = event.target.value;
        setShowMedicamentos(getMedicamentos);
    }

    const [medicamento, setMedicamento] = useState('');
    const [frecuencia, setFrecuencia] = useState('');
    const [datos, setDatos] = useState([]);

    const handleMedicamentoChange = (event) => {
        setMedicamento(event.target.value);
    };

    const handleFrecuenciaChange = (event) => {
        setFrecuencia(event.target.value);
    };

    const handleAgregarMedicamento = () => {
        if (medicamento && frecuencia) {
            const nuevoDato = { medicamento , frecuencia };
            setDatos([...datos, nuevoDato]);
            setMedicamento('');
            setFrecuencia('');
        }
    };

    const handleEliminarMedicamento = (index) => {
        const nuevosDatos = datos.filter((dato, i) => i !== index);
        setDatos(nuevosDatos);
    };

    const handleEditarMedicamento = (index) => {
        const dato = datos[index];
        setMedicamento(dato.medicamento);
        setFrecuencia(dato.frecuencia);
        const nuevosDatos = datos.filter((dato, i) => i !== index);
        setDatos(nuevosDatos);
    };

    // Medicamentos

    //Academia

    const [titulo, setTitulo] = useState('');
    const [nivelAc, setNivelAc] = useState('');
    const [institucion, setInstitucion] = useState('');
    const [anoGrado, setAnoGrado] = useState('');
    const [date, setDate] = useState([]);

    const handleTitulo = (event) => {
        setTitulo(event.target.value);
    };
    const handleNivelAc = (event) => {
        setNivelAc(event.target.value);
    };
    const handleInstitucion = (event) => {
        setInstitucion(event.target.value);
    };
    const handleAnoGrado = (event) => {
        setAnoGrado(event.target.value);
    };

    const handleAgregarAcademica = () => {
        if (titulo && nivelAc && institucion && anoGrado) {
            const nuevoDate = { titulo , nivelAc , institucion , anoGrado};
            setDate([...date, nuevoDate]);
            setTitulo('');
            setNivelAc('');
            setInstitucion('');
            setAnoGrado('');
        }
    };

    const handleEliminarAcademia = (index) => {
        const nuevosDate = date.filter((dato, i) => i !== index);
        setDate(nuevosDate);
    };

    const handleEditarAcademia = (index) => {
        const dat = date[index];
        setTitulo(dat.titulo);
        setNivelAc(dat.nivelAc);
        setInstitucion(dat.institucion);
        setAnoGrado(dat.anoGrado);
        const nuevosDate = date.filter((dato, i) => i !== index);
        setDate(nuevosDate);
    };
    

    //Academia

    return (

        <div className='pestañas'>
            <Nav tabs className='navegador'>
                <NavItem>
                    <NavLink className={(activeTab == "1" ? "activeTab baseTab" : "baseTab")} onClick={() => cambiarTab("1")}>
                        <h6>Informacion Personal</h6>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={(activeTab == "2" ? "activeTab baseTab" : "baseTab")} onClick={() => cambiarTab("2")}>
                        <h6>Informacion Academica</h6>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={(activeTab == "3" ? "activeTab baseTab" : "baseTab")} onClick={() => cambiarTab("3")}>
                        <h6>Informacion Medica</h6>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={(activeTab == "4" ? "activeTab baseTab" : "baseTab")} onClick={() => cambiarTab("4")}>
                        <h6>Contratos de Trabajo</h6>
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    {/* Formulario informacion personal */}
                    <div className='pestañasContainer'>
                        <form className="formInfoPersonal" >
                            <div className="oneInfoPersonal">
                                <div className="inInfoPersonal" >
                                    <h1>INFORMACION <br /> PERSONAL</h1>
                                </div>
                            </div>
                            <div className="twoInfoPersonal">
                                <div className="inInfoPersonal" >
                                    <div className="imagenPuntosInfoPersonal">
                                    </div>
                                </div>
                            </div>
                            <div className="threeInfoPersonal">
                                <div className="inInfoPersonal">
                                    <label>NOMBRE</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="fourInfoPersonal">
                                <div className="inInfoPersonal">
                                    <label>APELLIDOS</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="apellidos" disabled />
                                </div>
                            </div>
                            <div className="fiveInfoPersonal">
                                <div className="inInfoPersonal">
                                    <label>DIRECCION</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="direccion" disabled />
                                </div>
                            </div>
                            <div className="sixInfoPersonal">
                                <div className="inInfoPersonal">
                                    <label>TELEFONO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" disabled />
                                </div>
                            </div>
                            <div className="sevenInfoPersonal">
                                <div className="inInfoPersonal">
                                    <label>CELULAR</label>
                                    <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" disabled />
                                </div>
                            </div>
                            <div className="eigntInfoPersonal">
                                <div className="inInfoPersonal">
                                    <label>WHATSAPP</label>
                                    <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" disabled />
                                </div>
                            </div>
                            <div className="nineInfoPersonal">
                                <div className="inInfoPersonal">
                                    <label>GENERO</label>
                                    <select name="ciudad" id="ciudad" disabled>
                                        <option value="">Selecciona:</option>
                                        <option value="bogota">MASCULINO</option>
                                        <option value="barramquilla">FEMENINO</option>
                                    </select>
                                </div>
                            </div>
                            <div className="tenInfoPersonal">
                                <div className="inInfoPersonal">
                                    <label>ESTADO CIVIL</label>
                                    <select name="ciudad" id="ciudad" disabled >
                                        <option value="">Selecciona:</option>
                                        <option value="bogota">SOLTERO</option>
                                        <option value="barramquilla">CASADO</option>
                                    </select>
                                </div>
                            </div>
                            <div className="elevenInfoPersonal">
                                <div className="inInfoPersonal">
                                    <label>LUGAR DE NACIMIENTO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" disabled />
                                </div>
                            </div>
                            <div className="doceInfoPersonal">
                                <div className="inInfoPersonal">
                                    <label>ESTRATO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" disabled />
                                </div>
                            </div>
                            <div className="treceInfoPersonal">
                                <div className="inInfoPersonal">
                                    <label>TIPO DE VIVIENDA</label>
                                    <select name="ciudad" id="ciudad" disabled >
                                        <option value="">Selecciona:</option>
                                        <option value="bogota">FAMILIAR</option>
                                        <option value="barramquilla">SOLA</option>
                                    </select>
                                </div>
                            </div>
                            <div className="catorceInfoPersonal">
                                <div className="inInfoPersonal">

                                </div>
                            </div>
                            <div className="quinceInfoPersonal">
                                <div className="inInfoPersonal">
                                    <button className="btnGuardarInfoPersona">Guardar</button>
                                </div>
                            </div>
                            <div className="dieciseisInfoPersonal">
                                <div className="inInfoPersonal">
                                    <button className="btnCancelarInfoPersona">Cancelar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="2">
                    {/* Formulario informacion Academica */}
                    <div className='pestañasContainer'>
                        <form className="formInfoAcademica" >
                            <div className="oneInfoAcademica">
                                <div className="inInfoAcademica" >
                                    <h1>INFORMACION <br /> ACADEMICA</h1>
                                </div>
                            </div>
                            <div className="twoInfoAcademica">
                                <div className="inInfoAcademica" >
                                    <div className="imagenPuntosAcademica">
                                    </div>
                                </div>
                            </div>
                            <div className="threeInfoAcademica">
                                <div className="inInfoAcademica">
                                    <label>TITULO</label>
                                    <input type="text" id="numVacantes" name="numVacantes" value={titulo} onChange={handleTitulo} placeholder="titulo" required />
                                </div>
                            </div>
                            <div className="fourInfoAcademica">
                                <div className="inInfoAcademica">
                                    <label>NIVEL</label>
                                    <input type="text" id="numVacantes" name="numVacantes" value={nivelAc} onChange={handleNivelAc}  placeholder="nivel" required />
                                </div>
                            </div>
                            <div className="fiveInfoAcademica">
                                <div className="inInfoAcademica">
                                    <label>INSTITUCIÓN</label>
                                    <input type="text" id="numVacantes" name="numVacantes" value={institucion} onChange={handleInstitucion}  placeholder="institución" required />
                                </div>
                            </div>
                            <div className="sixInfoAcademica">
                                <div className="inInfoAcademica">
                                    <label>AÑO GRADO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" value={anoGrado} onChange={handleAnoGrado}  min="1" max="100" placeholder="###" required />
                                </div>
                            </div>
                            <div className="sevenInfoAcademica">
                                <div className="inInfoAcademica">
                                        <label>ANEXAR ARCHIVO</label>
                                        <input type="file" id='anexarArchivo' className='anexarArchivo' />
                                </div>
                            </div>
                            <div className="eightInfoAcademica">
                                <div className="inInfoAcademica">
                                    <label>          </label>
                                    <button id='añadirAcademica' onClick={handleAgregarAcademica}>AÑADIR INFORMACION</button>
                                </div>
                            </div>
                            <div className="nineInfoAcademica">
                                <div className="inInfoAcademica">
                                    <TableContainer>
                                        <Table sx={{ minWidth: 500 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">TITULO</TableCell>
                                                    <TableCell align="center">NIVEL</TableCell>
                                                    <TableCell align="center">INSTITUCIÓN</TableCell>
                                                    <TableCell align="center">AÑO DE GRADO</TableCell>
                                                    <TableCell align="center">ANEXOS</TableCell>
                                                    <TableCell align="center">ACCION</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {date.map((dato, index) => (
                                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align="center">{dato.titulo}</TableCell>
                                                        <TableCell align="center">{dato.nivelAc}</TableCell>
                                                        <TableCell align="center">{dato.institucion}</TableCell>
                                                        <TableCell align="center">{dato.anoGrado}</TableCell>
                                                        <TableCell align="center">{dato.anexos}</TableCell>
                                                        <TableCell align="center">
                                                            <button id='academicaEditDelete' onClick={() => handleEliminarAcademia(index)}><DeleteOutlineIcon /></button>
                                                            <button id='academicaEditDelete' onClick={() => handleEditarAcademia(index)}><EditIcon /></button>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                            <div className="tenInfoAcademica">
                                <div className="inInfoAcademica">
                                    <button className="btnGuardarAcademica">Guardar</button>
                                </div>
                            </div>
                            <div className="elevenInfoAcademica">
                                <div className="inInfoAcademica">
                                    <button className="btnCancelarAcademica">Cancelar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="3">
                    {/* Formulario informacion medica */}
                    <div className='pestañasContainer'>
                        <form className="formInfoMedica" >
                            <div className="oneInfoMedica">
                                <div className="inInfoMedica" >
                                    <h1>INFORMACIÓN<br /> MEDICA</h1>
                                </div>
                            </div>
                            <div className="twoInfoMedica">
                                <div className="inInfoMedica" >
                                    <div className="imagenPuntosInfoMedica">
                                    </div>
                                </div>
                            </div>
                            <div className="threeInfoMedica">
                                <div className="inInfoMedica">
                                    <label>RH</label>
                                    <input type="number" id="rh" name="rh" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="fourInfoMedica">
                                <div className="inInfoMedica">
                                    <label>ALERGICO A ALGUN MEDICAMENTO</label>
                                    <select name="alergia" id="alergia" required>
                                        <option value="">Selecciona:</option>
                                        <option value="si">SI</option>
                                        <option value="no">NO</option>
                                    </select>
                                </div>
                            </div>
                            <div className="fiveInfoMedica">
                                <div className="inInfoMedica">
                                    <label>USA MEDICAMENTOS</label>
                                    <select name="alergia" id="alergia" onChange={(e) => (handleShowMedicamentos(e))} required>
                                        <option value="">Selecciona:</option>
                                        <option value="1">SI</option>
                                        <option value="2">NO</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sixInfoMedica">
                                <div className="inInfoMedica">

                                </div>
                            </div>
                            {
                            showMedicamentos ==='1' &&(
                            <div className="sevenInfoMedica">
                                <div className="inInfoMedica">
                                    <label>¿CUALES?</label>
                                    <div className='divMedicamentos'>
                                        <textarea id='textMedicamento' className='textMedicamento' placeholder='Nombre...' value={medicamento} onChange={handleMedicamentoChange} />
                                        <select className='selectMedicamento' value={frecuencia} onChange={handleFrecuenciaChange}>
                                            <option value="">Seleccione una Frecuencia</option>
                                            <option value="4 HORAS">CADA 4 HORAS</option>
                                            <option value="6 HORAS">CADA 6 HORAS</option>
                                            <option value="8 HORAS">CADA 8 HORAS</option>
                                            <option value="12 HORAS">CADA 12 HORAS</option>
                                        </select>
                                        <button id='agregarMedicamento' onClick={handleAgregarMedicamento}><ControlPointIcon /></button>
                                    </div>
                                </div>
                            </div>
                                  )
                                }
                            {
                            showMedicamentos ==='1' &&(    
                            <div className="eightInfoMedica">
                                <div className="inInfoMedica">
                                    <TableContainer>
                                        <Table sx={{ minWidth: 500 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">MEDICAMENTO</TableCell>
                                                    <TableCell align="center">FRECUENCIA</TableCell>
                                                    <TableCell align="center">ACCION</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {datos.map((dato, index) => (
                                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align="center">{dato.medicamento}</TableCell>
                                                        <TableCell align="center">{dato.frecuencia}</TableCell>
                                                        <TableCell align="center">
                                                            <button id='medicamentoEditDelete' onClick={() => handleEliminarMedicamento(index)}><DeleteOutlineIcon /></button>
                                                            <button id='medicamentoEditDelete' onClick={() => handleEditarMedicamento(index)}><EditIcon /></button>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                              )
                            }
                            <div className="nineInfoMedica">
                                <div className="inInfoMedica">
                                    <button className="btnGuardarInfoMedica">Guardar</button>
                                </div>
                            </div>
                            <div className="tenInfoMedica">
                                <div className="inInfoMedica">
                                    <button className="btnCancelarInfoMedica">Cancelar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="4">
                    {/* Formulario Contratos de Trabajo */}
                    <div className='pestañasContainer'>
                        <form className="formConTrabajo" >
                            <div className="oneConTrabajo">
                                <div className="inConTrabajo" >
                                    <h1>CONTRATOS DE<br /> TRABAJO</h1>
                                </div>
                            </div>
                            <div className="twoConTrabajo">
                                <div className="inConTrabajo" >
                                    <div className="imagenPuntosConTrabajo">
                                    </div>
                                </div>
                            </div>
                            <div className="threeConTrabajo">
                                <div className="inConTrabajo">
                                    <label>CONTRATO 1</label>
                                    <input type="text" id="numVacantes" name="numVacantes" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="fourConTrabajo">
                                <div className="inConTrabajo">
                                    <input type="file" className='examinar' id="numVacantes" name="numVacantes" placeholder="apellidos" required />
                                </div>
                            </div>
                            <div className="fiveConTrabajo">
                                <div className="inConTrabajo">
                                    <label>CONTRATO 2</label>
                                    <input type="text" id="numVacantes" name="numVacantes" placeholder="apellidos" required />
                                </div>
                            </div>
                            <div className="sixConTrabajo">
                                <div className="inConTrabajo">
                                    <input type="file" className='examinar' id="numVacantes" name="numVacantes" placeholder="apellidos" required />
                                </div>
                            </div>
                            <div className="sevenConTrabajo">
                                <div className="inConTrabajo">
                                    <h1>HISTORIA LABORAL</h1>
                                </div>
                            </div>
                            <div className="eightConTrabajo">
                                <div className="inConTrabajo">
                                    <div className="imagenPuntosConTrabajo">
                                    </div>
                                </div>
                            </div>
                            <div className="nineConTrabajo">
                                <div className="inConTrabajo">
                                    {/* historia laboral */}
                                </div>
                            </div>
                            <div className="tenConTrabajo">
                                <div className="inConTrabajo">
                                    <button className="btnGuardarConTrabajo">Guardar</button>
                                </div>
                            </div>
                            <div className="elevenConTrabajo">
                                <div className="inConTrabajo">
                                    <button className="btnCancelarConTrabajo">Cancelar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default Pestaña_ModificarActPlanta