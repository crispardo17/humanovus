import React from 'react'
import "./pestañas_Entrevistar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';

const Pestañas_Entrevistar = () => {

    // tabs

    const [activeTab, setActiveTab] = useState("1");

    const cambiarTab = (numeroTab) => {
        if (activeTab !== numeroTab) {
            setActiveTab(numeroTab);
        }
    }

    // tabs

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
            </Nav>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    {/* Formulario informacion personal */}
                    <div className='pestañasContainer'>
                        <form className="formInfoEntrevistar" >
                            <div className="oneInfoEntrevistar">
                                <div className="inInfoEntrevistar" >
                                    <h1>INFORMACION <br /> PERSONAL</h1>
                                </div>
                            </div>
                            <div className="twoInfoEntrevistar">
                                <div className="inInfoEntrevistar" >
                                    <div className="imagenPuntosInfoEntrevistar">
                                    </div>
                                </div>
                            </div>
                            <div className="threeInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>NOMBRE</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="fourInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>APELLIDOS</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="apellidos" disabled />
                                </div>
                            </div>
                            <div className="fiveInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>TIPO DOCUMENTO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="direccion" disabled />
                                </div>
                            </div>
                            <div className="sixInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>DOCUMENTO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" disabled />
                                </div>
                            </div>
                            <div className="sevenInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>FECHA DE EXPEDICION</label>
                                    <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" disabled />
                                </div>
                            </div>
                            <div className="eigntInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>FECHA DE NACIMIENTO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" disabled />
                                </div>
                            </div>
                            <div className="nineInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>LUGAR DE NACIMIENTO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="tenInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>LIBRETA MILITAR</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="elevenInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>GENERO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" disabled />
                                </div>
                            </div>
                            <div className="doceInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>NUMERO DE LIBRETA MILITAR</label>
                                    <input type="number" id="numVacantes" name="numVacantes" min="1" max="100" placeholder="###" disabled />
                                </div>
                            </div>
                            <div className="treceInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>DIRECCION</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="catorceInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>TIPO DE VIVIENDA</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="quinceInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>ESTRATO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="dieciseisInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>TELEFONO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="diecisieteInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>CELULAR</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="dieciochoInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>WHATSAPP</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="diecinueveInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>USO DE TIEMPO LIBRE</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="veinteInfoEntrevistar">
                                <div className="inInfoEntrevistar">
                                    <label>ESTADO CIVIL</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="veintiunoEntrevistar">
                                <div className="inInfoEntrevistar" >
                                    <h1>INFORMACION <br /> MEDICA</h1>
                                </div>
                            </div>
                            <div className="veintidosInfoEntrevistar">
                                <div className="inInfoEntrevistar" >
                                    <div className="imagenPuntosInfoPersonal">
                                    </div>
                                </div>
                            </div>
                            <div className="veintitresInfoEntrevistar">
                                <div className="inInfoEntrevistar" >
                                    <label>RH</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="veinticuatroInfoEntrevistar">
                                <div className="inInfoEntrevistar" >
                                    <label>ALRGICO A MEDICAMENTO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="veinticincoInfoEntrevistar">
                                <div className="inInfoEntrevistar" >
                                    <label>CUALES</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="veintiseisInfoEntrevistar">
                                <div className="inInfoEntrevistar" >
                                    <label>USO DE MEDICAMENTO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="veintisieteInfoEntrevistar">
                                <div className="inInfoEntrevistar" >
                                    <label>MEDICAMENTO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="veintiochoInfoEntrevistar">
                                <div className="inInfoEntrevistar" >
                                    <label>FRECUENCIA</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="veintinueveInfoEntrevistar">
                                <div className="inInfoEntrevistar" >
                                    <label>MEDICAMENTO</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                            <div className="treintaInfoEntrevistar">
                                <div className="inInfoEntrevistar" >
                                    <label>FRECUENCIA</label>
                                    <input type="number" id="numVacantes" name="numVacantes" placeholder="nombre" disabled />
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="2">
                    {/* Formulario informacion personal */}
                    <div className='pestañasContainer'>
                        <form className="formInfoTabla" >
                            <div className="oneInfoPersonal">
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
                                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                    </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="3">
                    {/* Formulario informacion personal */}
                    <div className='pestañasContainer'>
                        <form className="formInfoTabla" >
                            <div className="oneInfoPersonal">
                                <div className="inInfoPersonal" >
                                    <TableContainer>
                                        <Table sx={{ minWidth: 900 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">TIPO DE IDENTIFICACION</TableCell>
                                                    <TableCell align="center">N° DE IDENTIFICACION</TableCell>
                                                    <TableCell align="center">NOMBRES Y APELLIDOS</TableCell>
                                                    <TableCell align="center">EDAD</TableCell>
                                                    <TableCell align="center">TIPO DE BENEFICIARIO</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                    </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="4">
                    {/* Formulario informacion personal */}
                    <div className='pestañasContainer'>
                        <form className="formInfoTabla" >
                            <div className="oneInfoPersonal">
                                <div className="inInfoPersonal" >
                                    <TableContainer>
                                        <Table sx={{ minWidth: 800 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">TITULO</TableCell>
                                                    <TableCell align="center">NIVEL</TableCell>
                                                    <TableCell align="center">INSTITUCION</TableCell>
                                                    <TableCell align="center">AÑO DE GRADUACION</TableCell>
                                                    <TableCell align="center">ANEXOS</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                    </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="5">
                    {/* Formulario informacion personal */}
                    <div className='pestañasContainer'>
                        <form className="formInfoTabla" >
                            <div className="oneInfoPersonal">
                                <div className="inInfoPersonal" >
                                    <TableContainer>
                                        <Table sx={{ minWidth: 800 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">EMPRESA</TableCell>
                                                    <TableCell align="center">CARGO</TableCell>
                                                    <TableCell align="center">TELEFONO</TableCell>
                                                    <TableCell align="center">CAUSAL DE RETIRO</TableCell>
                                                    <TableCell align="center">FECHA DE RETIRO</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                    </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="6">
                    {/* Formulario informacion personal */}
                    <div className='pestañasContainer'>
                        <form className="formInfoTabla" >
                            <div className="oneInfoPersonal">
                                <div className="inInfoPersonal" >
                                    <TableContainer>
                                        <Table sx={{ minWidth: 800 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">PARENTESCO</TableCell>
                                                    <TableCell align="center">NOMBRE COMPLETO</TableCell>
                                                    <TableCell align="center">TELEFONO</TableCell>
                                                    <TableCell align="center">IDENTIFICACION</TableCell>
                                                    <TableCell align="center">TIPO DE DOCUMENTO</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center"></TableCell>
                                                    </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default Pestañas_Entrevistar