import React from 'react'
import "./pestañas_HojaDeVida.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



const Pestañas_HojaDeVida = () => {

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
            const nuevoDato = { medicamento, frecuencia };
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


    //contacto Emergencia

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [parentesco, setParentesco] = useState('');
    const [genero, setGenero] = useState('');
    const [ocupacion, setOcupacion] = useState('');
    const [celular, setCelular] = useState('');
    const [contactos, setContactos] = useState([]);


    const handleAgregarContacto = () => {
        if (nombre && edad && parentesco && genero && ocupacion && celular) {
            const nuevoContacto = { nombre, edad, parentesco, genero, ocupacion, celular };
            setContactos([...contactos, nuevoContacto]);
            setNombre('');
            setEdad('');
            setParentesco('');
            setGenero('');
            setOcupacion('');
            setCelular('');
        }
    };

    //contacto emergencia

    return (

        <div className='pestañas'>
            <Nav tabs className='navegador'>
                <NavItem>
                    <NavLink className={(activeTab == "1" ? "activeTab baseTab" : "baseTab")} onClick={() => cambiarTab("1")}>
                        <h6 className='tituloPestaña'>Informacion Personal</h6>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={(activeTab == "2" ? "activeTab baseTab" : "baseTab")} onClick={() => cambiarTab("2")}>
                        <h6 className='tituloPestaña'>Contacto de Emergencia</h6>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={(activeTab == "3" ? "activeTab baseTab" : "baseTab")} onClick={() => cambiarTab("3")}>
                        <h6 className='tituloPestaña'>Composición Familiar</h6>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={(activeTab == "4" ? "activeTab baseTab" : "baseTab")} onClick={() => cambiarTab("4")}>
                        <h6 className='tituloPestaña'>Formación Academica</h6>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={(activeTab == "5" ? "activeTab baseTab" : "baseTab")} onClick={() => cambiarTab("5")}>
                        <h6 className='tituloPestaña'>Experiencia Laboral</h6>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={(activeTab == "6" ? "activeTab baseTab" : "baseTab")} onClick={() => cambiarTab("6")}>
                        <h6 className='tituloPestaña'>Referencia Personal</h6>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={(activeTab == "7" ? "activeTab baseTab" : "baseTab")} onClick={() => cambiarTab("7")}>
                        <h6 className='tituloPestaña'>Seguridad Social</h6>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={(activeTab == "8" ? "activeTab baseTab" : "baseTab")} onClick={() => cambiarTab("8")}>
                        <h6 className='tituloPestaña'>Documentacion</h6>
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    {/* Formulario informacion personal */}
                    <div className='pestañasContainer'>
                        <form className="formHojaDeVida" >
                            <div className="onePersonal">
                                <div className="inPersonal" >
                                    <h1>INFORMACIÓN <br /> PERSONAL</h1>
                                </div>
                            </div>
                            <div className="twoPersonal">
                                <div className="inPersonal" >
                                    <div className="imagenPuntosPersonal">
                                    </div>
                                </div>
                            </div>
                            <div className="threePersonal">
                                <div className="inPersonal">

                                </div>
                            </div>
                            <div className="fourPersonal">
                                <div className="inPersonal">

                                </div>
                            </div>
                            <div className="fivePersonal">
                                <div className="inPersonal">
                                    <label>NOMBRES</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="sixPersonal">
                                <div className="inPersonal">
                                    <label>APELLIDOS</label>
                                    <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" required />
                                </div>
                            </div>
                            <div className="sevenPersonal">
                                <div className="inPersonal">
                                    <label>TIPO DE DOCUMENTO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" required />
                                </div>
                            </div>
                            <div className="eigntPersonal">
                                <div className="inPersonal">
                                    <label>DOCUMENTO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" required />
                                </div>
                            </div>
                            <div className="ninePersonal">
                                <div className="inPersonal">
                                    <label>FECHA DE EXPEDICION</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="tenPersonal">
                                <div className="inPersonal">
                                    <label>FECHA DE NACIMIENTO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="elevenPersonal">
                                <div className="inPersonal">
                                    <label>LUGAR DE NACIMIENTO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" required />
                                </div>
                            </div>
                            <div className="docePersonal">
                                <div className="inPersonal">
                                    <label>LIBRETA MILITAR</label>
                                    <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" required />
                                </div>
                            </div>
                            <div className="trecePersonal">
                                <div className="inPersonal">
                                    <label>GENERO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="catorcePersonal">
                                <div className="inPersonal">
                                    <label>NUMERO DE LIBRETA MILITAR</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="quincePersonal">
                                <div className="inPersonal">
                                    <label>DIRECCION</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="dieciseisPersonal">
                                <div className="inPersonal">
                                    <label>TIPO DED VIVIENDA</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="diecisietePersonal">
                                <div className="inPersonal">
                                    <label>ESTRATO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="dieciochoPersonal">
                                <div className="inPersonal">
                                    <label>TELEFONO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="diecinuevePersonal">
                                <div className="inPersonal">
                                    <label>CELULAR</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="veintePersonal">
                                <div className="inPersonal">
                                    <label>WHATSAPP</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="veintiunoPersonal">
                                <div className="inPersonal" >
                                    <label>USO DE TIEMPO LIBRE</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="veintidosPersonal">
                                <div className="inPersonal" >
                                    <label>ESTADO CIVIL</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="veintitresPersonal">
                                <div className="inPersonal" >
                                    <h1>INFORMACIÓN <br /> MEDICA</h1>
                                </div>
                            </div>
                            <div className="veinticuatroPersonal">
                                <div className="inPersonal" >
                                    <div className="imagenPuntosPersonal">
                                    </div>
                                </div>
                            </div>
                            <div className="veinticincoPersonal">
                                <div className="inPersonal" >
                                    <label>RH</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" required />
                                </div>
                            </div>
                            <div className="veintiseisPersonal">
                                <div className="inPersonal" >
                                    <label>ALERGICO A ALGUN MEDICAMENTO</label>
                                    <select name="alergia" id="alergia" required>
                                        <option value="">Selecciona:</option>
                                        <option value="si">SI</option>
                                        <option value="no">NO</option>
                                    </select>
                                </div>
                            </div>
                            <div className="veintisietePersonal">
                                <div className="inPersonal" >
                                    <label>USA MEDICAMENTOS</label>
                                    <select name="alergia" id="alergia" onChange={(e) => (handleShowMedicamentos(e))} required>
                                        <option value="">Selecciona:</option>
                                        <option value="1">SI</option>
                                        <option value="2">NO</option>
                                    </select>
                                </div>
                            </div>
                            <div className="veintiochoPersonal">
                                <div className="inPersonal" >

                                </div>
                            </div>
                            {
                                showMedicamentos === '1' && (
                                    <div className="veintinuevePersonal">
                                        <div className="inPersonal" >
                                            <label>¿CUALES?</label>
                                            <div className='divMedicamentos'>
                                                <textarea id='textMed' className='textMed' placeholder='Nombre...' value={medicamento} onChange={handleMedicamentoChange} required />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                showMedicamentos === '1' && (
                                    <div className="treintaPersonal">
                                        <div className="inPersonal" >
                                            <label>¿CON QUE FRECUENCIA?</label>
                                            <div className='divMedicamentos'>
                                                <select className='selectMed' value={frecuencia} onChange={handleFrecuenciaChange} required>
                                                    <option value="">Seleccione una Frecuencia</option>
                                                    <option value="4 HORAS">CADA 4 HORAS</option>
                                                    <option value="6 HORAS">CADA 6 HORAS</option>
                                                    <option value="8 HORAS">CADA 8 HORAS</option>
                                                    <option value="12 HORAS">CADA 12 HORAS</option>
                                                </select>
                                                <button id='agregarMed' onClick={handleAgregarMedicamento}><ControlPointIcon /></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                showMedicamentos === '1' && (
                                    <div className="treintayunoPersonal">
                                        <div className="inPersonal" >
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
                            <div className="treintaydosPersonal">
                                <div className="inPersonal" >

                                </div>
                            </div>
                            <div className="treintaytresPersonal">
                                <div className="inPersonal" >
                                    <div className='divNext' >
                                        <button id='buttonNext' onClick={handleAgregarMedicamento}><ArrowForwardIosIcon /></button>
                                        <label>SIGUIENTE</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="2">
                    {/* Formulario Composicion familiar */}
                    <div className='pestañasContainer'>
                        <form className="formConEmergencia" >
                            <div className="oneConEmergencia">
                                <div className="inInfoPersonal" >
                                    <TableContainer>
                                        <Table sx={{ minWidth: 800 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">NOMBRE COMPLETO</TableCell>
                                                    <TableCell align="center">EDAD</TableCell>
                                                    <TableCell align="center">PARENTESCO</TableCell>
                                                    <TableCell align="center">GENERO</TableCell>
                                                    <TableCell align="center">OCUPACION</TableCell>
                                                    <TableCell align="center">CELULAR</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {contactos.map((contacto, index) => (
                                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align="center">{contacto.nombre}</TableCell>
                                                        <TableCell align="center">{contacto.edad}</TableCell>
                                                        <TableCell align="center">{contacto.parentesco}</TableCell>
                                                        <TableCell align="center">{contacto.genero}</TableCell>
                                                        <TableCell align="center">{contacto.ocupacion}</TableCell>
                                                        <TableCell align="center">{contacto.celular}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                            <div className="twoConEmergencia">
                                <div className="inPersonal" >
                                    <label>NOMBRE COMPLETO</label>
                                    <input type="text" id="ConEmergencia" name="ConEmergencia" placeholder="nombre" value={nombre} />
                                </div>
                            </div>
                            <div className="threeConEmergencia">
                                <div className="inPersonal" >
                                    <label>EDAD</label>
                                    <input type="number" id="ConEmergencia" name="numVacantes" placeholder="nombre" value={edad} />
                                </div>
                            </div>
                            <div className="fourConEmergencia">
                                <div className="inPersonal" >
                                    <label>PARENTESCO</label>
                                    <select name="parentesco" id="selectConEmergencia" value={parentesco} required>
                                        <option value="">Selecciona:</option>
                                        <option value="1">Padre</option>
                                        <option value="2">Madre</option>
                                        <option value="3">Hermano</option>
                                    </select>
                                </div>
                            </div>
                            <div className="fiveConEmergencia">
                                <div className="inPersonal" >
                                    <label>GENERO</label>
                                    <select name="genero" id="selectConEmergencia" value={genero} required>
                                        <option value="">Selecciona:</option>
                                        <option value="1">Mujer</option>
                                        <option value="2">Hombre</option>
                                        <option value="3">Otro</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sixConEmergencia">
                                <div className="inPersonal">
                                    <label>OCUPACIÓN</label>
                                    <input type="text" id="ConEmergencia" name="numVacantes" placeholder="nombre" value={ocupacion} required />
                                </div>
                            </div>
                            <div className="sevenConEmergencia">
                                <div className="inPersonal" >
                                    <label>CELULAR</label>
                                    <input type="number" id="ConEmergencia" name="numVacantes" placeholder="nombre" value={celular} required />
                                </div>
                            </div>
                            <div className="eightConEmergencia">
                                <div className="inPersonal" >
                                    <button id='buttonBack'><ArrowBackIosIcon /></button>
                                </div>
                            </div>
                            <div className="nineConEmergencia">
                                <div className="inPersonal" >
                                    <button id='buttonAgregar' onClick={handleAgregarContacto}>AGREGAR</button>
                                </div>
                            </div>
                            <div className="tenConEmergencia">
                                <div className="inPersonal" >
                                    <button id='buttonNext'><ArrowForwardIosIcon /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="3">
                      {/* Formulario Composicion familiar */}
                      <div className='pestañasContainer'>
                        <form className="formComFamiliar" >
                            <div className="oneComFamiliar">
                                <div className="inInfoPersonal" >
                                    <TableContainer>
                                        <Table sx={{ minWidth: 800 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">NOMBRE COMPLETO</TableCell>
                                                    <TableCell align="center">EDAD</TableCell>
                                                    <TableCell align="center">PARENTESCO</TableCell>
                                                    <TableCell align="center">GENERO</TableCell>
                                                    <TableCell align="center">OCUPACION</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {contactos.map((contacto, index) => (
                                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align="center">{contacto.nombre}</TableCell>
                                                        <TableCell align="center">{contacto.edad}</TableCell>
                                                        <TableCell align="center">{contacto.parentesco}</TableCell>
                                                        <TableCell align="center">{contacto.genero}</TableCell>
                                                        <TableCell align="center">{contacto.ocupacion}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                            <div className="twoComFamiliar">
                                <div className="inPersonal" >
                                    <label>NOMBRE COMPLETO</label>
                                    <input type="text" id="ConEmergencia" name="ConEmergencia" placeholder="nombre" value={nombre} />
                                </div>
                            </div>
                            <div className="threeComFamiliar">
                                <div className="inPersonal" >
                                    <label>EDAD</label>
                                    <input type="number" id="ConEmergencia" name="numVacantes" placeholder="nombre" value={edad} />
                                </div>
                            </div>
                            <div className="fourComFamiliar">
                                <div className="inPersonal" >
                                    <label>PARENTESCO</label>
                                    <select name="parentesco" id="selectComFamiliar" value={parentesco} required>
                                        <option value="">Selecciona:</option>
                                        <option value="1">Padre</option>
                                        <option value="2">Madre</option>
                                        <option value="3">Hermano</option>
                                    </select>
                                </div>
                            </div>
                            <div className="fiveComFamiliar">
                                <div className="inPersonal" >
                                    <label>GENERO</label>
                                    <select name="genero" id="selectComFamiliar" value={genero} required>
                                        <option value="">Selecciona:</option>
                                        <option value="1">Mujer</option>
                                        <option value="2">Hombre</option>
                                        <option value="3">Otro</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sixComFamiliar">
                                <div className="inPersonal">
                                    <label>OCUPACIÓN</label>
                                    <input type="text" id="ConEmergencia" name="numVacantes" placeholder="nombre" value={ocupacion} required />
                                </div>
                            </div>
                            <div className="sevenComFamiliar">
                                <div className="inPersonal" >
                            
                                </div>
                            </div>
                            <div className="eightComFamiliar">
                                <div className="inPersonal" >
                                    <button id='buttonBack'><ArrowBackIosIcon /></button>
                                </div>
                            </div>
                            <div className="nineComFamiliar">
                                <div className="inPersonal" >
                                    <button id='buttonAgregar' onClick={handleAgregarContacto}>AGREGAR</button>
                                </div>
                            </div>
                            <div className="tenComFamiliar">
                                <div className="inPersonal" >
                                    <button id='buttonNext'><ArrowForwardIosIcon /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="4">
                      {/* Formulario Formación academica */}
                      <div className='pestañasContainer'>
                        <form className="formFormacionAcademica" >
                            <div className="oneFormacionAcademica">
                                <div className="inInfoPersonal" >
                                    <TableContainer>
                                        <Table sx={{ minWidth: 800 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">TITULO</TableCell>
                                                    <TableCell align="center">NIVEL</TableCell>
                                                    <TableCell align="center">AÑO DE GRADUACION</TableCell>
                                                    
                                                    <TableCell align="center">CERTIFICADO</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {contactos.map((contacto, index) => (
                                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align="center">{contacto.titulo}</TableCell>
                                                        <TableCell align="center">{contacto.nivel}</TableCell>
                                                        <TableCell align="center">{contacto.institucion}</TableCell>
                                                        <TableCell align="center">{contacto.anoGrado}</TableCell>
                                                        <TableCell align="center">{contacto.certificado}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                            <div className="twoFormacionAcademica">
                                <div className="inPersonal" >
                                    <label>TITULO</label>
                                    <input type="text" id="ConEmergencia" name="ConEmergencia" placeholder="nombre"  />
                                </div>
                            </div>
                            <div className="threeFormacionAcademica">
                                <div className="inPersonal" >
                                    <label>NIVEL</label>
                                    <input type="text" id="ConEmergencia" name="numVacantes" placeholder="nombre"  />
                                </div>
                            </div>
                            <div className="fourFormacionAcademica">
                                <div className="inPersonal" >
                                    <label>AÑO DE GRADUACION</label>
                                    <input type="number" id="ConEmergencia" name="numVacantes" placeholder="nombre"  />
                                </div>
                            </div>
                            <div className="fiveFormacionAcademica">
                                <div className="inPersonal" >
                                    <label>CERTIFICADOS</label>
                                    <input type="number" id="ConEmergencia" name="numVacantes" placeholder="nombre"  />
                                </div>
                            </div>
                            <div className="sixFormacionAcademica">
                                <div className="inPersonal">
                                    <label>INSTITUCION</label>
                                    <input type="text" id="ConEmergencia" name="numVacantes" placeholder="nombre"  />
                                </div>
                            </div>
                            <div className="sevenFormacionAcademica">
                                <div className="inPersonal" >
                                   
                                </div>
                            </div>
                            <div className="eightFormacionAcademica">
                                <div className="inPersonal" >
                                    <button id='buttonBack'><ArrowBackIosIcon /></button>
                                </div>
                            </div>
                            <div className="nineFormacionAcademica">
                                <div className="inPersonal" >
                                    <button id='buttonAgregar' onClick={handleAgregarContacto}>AGREGAR</button>
                                </div>
                            </div>
                            <div className="tenFormacionAcademica">
                                <div className="inPersonal" >
                                    <button id='buttonNext'><ArrowForwardIosIcon /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="5">
                      {/* Formulario Experiencia Laboral */}
                      <div className='pestañasContainer'>
                        <form className="formExpLaboral" >
                            <div className="oneExpLaboral">
                                <div className="inInfoPersonal" >
                                    <TableContainer>
                                        <Table sx={{ minWidth: 800 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">EMPRESA</TableCell>
                                                    <TableCell align="center">NIT</TableCell>
                                                    <TableCell align="center">CARGO</TableCell>
                                                    <TableCell align="center">TELEFONO</TableCell>
                                                    <TableCell align="center">DIRECCION</TableCell>
                                                    <TableCell align="center">EMAIL</TableCell>
                                                    <TableCell align="center">CAUSAL DE RETIRO</TableCell>
                                                    <TableCell align="center">CERTIFICADOS</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {contactos.map((contacto, index) => (
                                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align="center">{contacto.empresa}</TableCell>
                                                        <TableCell align="center">{contacto.edad}</TableCell>
                                                        <TableCell align="center">{contacto.parentesco}</TableCell>
                                                        <TableCell align="center">{contacto.genero}</TableCell>
                                                        <TableCell align="center">{contacto.ocupacion}</TableCell>
                                                        <TableCell align="center">{contacto.celular}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                            <div className="twoExpLaboral">
                                <div className="inPersonal" >
                                    <label>EMPRESA</label>
                                    <input type="text" id="ConEmergencia" name="ConEmergencia" placeholder="nombre" value={nombre} />
                                </div>
                            </div>
                            <div className="threeExpLaboral">
                                <div className="inPersonal" >
                                    <label>NIT</label>
                                    <input type="number" id="ConEmergencia" name="numVacantes" placeholder="nombre" value={edad} />
                                </div>
                            </div>
                            <div className="fourExpLaboral">
                                <div className="inPersonal" >
                                    <label>CARGO</label>
                                    <input type="number" id="ConEmergencia" name="numVacantes" placeholder="nombre" value={celular} required />
                                </div>
                            </div>
                            <div className="fiveExpLaboral">
                                <div className="inPersonal" >
                                    <label>TELEFONO</label>
                                    <input type="number" id="ConEmergencia" name="numVacantes" placeholder="nombre" value={celular} required />
                                </div>
                            </div>
                            <div className="sixExpLaboral">
                                <div className="inPersonal">
                                    <label>DIRECCIÓN</label>
                                    <input type="text" id="ConEmergencia" name="numVacantes" placeholder="nombre" value={ocupacion} required />
                                </div>
                            </div>
                            <div className="sevenExpLaboral">
                                <div className="inPersonal" >
                                    <label>EMAIL</label>
                                    <input type="number" id="ConEmergencia" name="numVacantes" placeholder="nombre" value={celular} required />
                                </div>
                            </div>
                            <div className="eightExpLaboral">
                                <div className="inPersonal" >
                                    <label>CAUSAL DE RETIRO</label>
                                    <input type="number" id="ConEmergencia" name="numVacantes" placeholder="nombre" value={celular} required />
                                </div>
                            </div>
                            <div className="nineExpLaboral">
                                <div className="inPersonal" >
                                    <label>CERTIFICADOS</label>
                                    <input type="number" id="ConEmergencia" name="numVacantes" placeholder="nombre" value={celular} required />
                                </div>
                            </div>
                            <div className="tenExpLaboral">
                                <div className="inPersonal" >
                                    <button id='buttonBack'><ArrowBackIosIcon /></button>
                                </div>
                            </div>
                            <div className="onceExpLaboral">
                                <div className="inPersonal" >
                                    <button id='buttonAgregar' onClick={handleAgregarContacto}>AGREGAR</button>
                                </div>
                            </div>
                            <div className="doceExpLaboral">
                                <div className="inPersonal" >
                                    <button id='buttonNext'><ArrowForwardIosIcon /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="6">
                      {/* Formulario Formación academica */}
                      <div className='pestañasContainer'>
                        <form className="formResPersonal" >
                            <div className="oneResPersonal">
                                <div className="inInfoPersonal" >
                                    <TableContainer>
                                        <Table sx={{ minWidth: 800 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">TITULO</TableCell>
                                                    <TableCell align="center">NIVEL</TableCell>
                                                    <TableCell align="center">AÑO DE GRADUACION</TableCell>
                                                    
                                                    <TableCell align="center">CERTIFICADO</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {contactos.map((contacto, index) => (
                                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align="center">{contacto.titulo}</TableCell>
                                                        <TableCell align="center">{contacto.nivel}</TableCell>
                                                        <TableCell align="center">{contacto.institucion}</TableCell>
                                                        <TableCell align="center">{contacto.anoGrado}</TableCell>
                                                        <TableCell align="center">{contacto.certificado}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                            <div className="twoResPersonal">
                                <div className="inPersonal" >
                                    <label>NOMBRE</label>
                                    <input type="text" id="ConEmergencia" name="ConEmergencia" placeholder="nombre"  />
                                </div>
                            </div>
                            <div className="threeResPersonal">
                                <div className="inPersonal" >
                                    <label>TELEFONO</label>
                                    <input type="text" id="ConEmergencia" name="numVacantes" placeholder="nombre"  />
                                </div>
                            </div>
                            <div className="fourResPersonal">
                                <div className="inPersonal" >
                                    <label>IDENTIFICACIÓN</label>
                                    <input type="number" id="ConEmergencia" name="numVacantes" placeholder="nombre"  />
                                </div>
                            </div>
                            <div className="fiveResPersonal">
                                <div className="inPersonal" >
                                    <label>TIPO DE DOCUMENTO</label>
                                    <input type="number" id="ConEmergencia" name="numVacantes" placeholder="nombre"  />
                                </div>
                            </div>
                            <div className="sixResPersonal">
                                <div className="inPersonal" >
                                    <button id='buttonBack'><ArrowBackIosIcon /></button>
                                </div>
                            </div>
                            <div className="sevenResPersonal">
                                <div className="inPersonal" >
                                    <button id='buttonAgregar' onClick={handleAgregarContacto}>AGREGAR</button>
                                </div>
                            </div>
                            <div className="eightResPersonal">
                                <div className="inPersonal" >
                                    <button id='buttonNext'><ArrowForwardIosIcon /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="7">
                      {/* Formulario Formación academica */}
                      <div className='pestañasContainer'>
                        <form className="formSeguridadSoc" >
                            <div className="oneSeguridadSoc">
                                <div className="inInfoPersonal" >
                                    <label> EPS </label>
                                    <input type="text" id="ConEmergencia" name="ConEmergencia" placeholder="nombre"  />
                                </div>
                            </div>
                            <div className="twoSeguridadSoc">
                                <div className="inPersonal" >
                                    <label>FONDO DE PENSIONES</label>
                                    <input type="text" id="ConEmergencia" name="ConEmergencia" placeholder="nombre"  />
                                </div>
                            </div>
                            <div className="threeSeguridadSoc">
                                <div className="inPersonal" >
                                    <label>CERTIFICADO EPS</label>
                                    <input type="text" id="ConEmergencia" name="numVacantes" placeholder="nombre"  />
                                </div>
                            </div>
                            <div className="fourSeguridadSoc">
                                <div className="inPersonal" >
                                    <label> FONDO DE PENSIONES</label>
                                    <input type="number" id="ConEmergencia" name="numVacantes" placeholder="nombre"  />
                                </div>
                            </div>
                            <div className="fiveSeguridadSoc">
                                <div className="inPersonal" >
                                    <button id='buttonBack'><ArrowBackIosIcon /></button>
                                </div>
                            </div>
                            <div className="sixSeguridadSoc">
                                <div className="inPersonal" >
                                    <button id='buttonAgregar' onClick={handleAgregarContacto}>AGREGAR</button>
                                </div>
                            </div>
                            <div className="sevenSeguridadSoc">
                                <div className="inPersonal" >
                                    <button id='buttonNext'><ArrowForwardIosIcon /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="8">
                      {/* Formulario Formación academica */}
                      <div className='pestañasContainer'>
                        <form className="formResPersonal" >
                            <div className="oneResPersonal">
                                <div className="inInfoPersonal" >
                                    <TableContainer>
                                        <Table sx={{ minWidth: 800 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">TITULO</TableCell>
                                                    <TableCell align="center">NIVEL</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {contactos.map((contacto, index) => (
                                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align="center">{contacto.titulo}</TableCell>
                                                        <TableCell align="center">{contacto.nivel}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                            <div className="twoResPersonal">
                                <div className="inPersonal" >
                                    <label>DOCUMENTO</label>
                                    <input type="text" id="ConEmergencia" name="ConEmergencia" placeholder="nombre"  />
                                </div>
                            </div>
                            <div className="threeResPersonal">
                                <div className="inPersonal" >
                                    <label>ADJUNTAR ARCHIVO</label>
                                    <input type="text" id="ConEmergencia" name="numVacantes" placeholder="nombre"  />
                                </div> 
                            </div>
                            <div className="sixResPersonal">
                                <div className="inPersonal" >
                                    <button id='buttonBack'><ArrowBackIosIcon /></button>
                                </div>
                            </div>
                            <div className="sevenResPersonal">
                                <div className="inPersonal" >
                                    <button id='buttonAgregar' onClick={handleAgregarContacto}>AGREGAR</button>
                                </div>
                            </div>
                            <div className="eightResPersonal">
                                <div className="inPersonal" >
                                    <button id='buttonNext'><ArrowForwardIosIcon /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default Pestañas_HojaDeVida