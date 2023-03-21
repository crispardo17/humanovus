import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "./modal_Generar.css"
import React, { useState } from "react";

const modal_Generar = ({ isOpen, closeModal }) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}>
        <div className="modal-fondoGenerar">
            <div className="modal-fondo1Generar">
                <div className="div-imagenGenerar">
                  <div className="imagenOjoGenerar"></div>
                </div>
                <h3 className="nombreModalGenerar">DOCUMENTOS A IMPRIMIR:</h3>
            </div>
            <div className="modal-fondo2Generar">
                <div className="grid-modalGenerar">
                    <div className="grid-modal1Generar" >
                    <TableContainer>
                        <Table sx={{ minWidth: 300 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>   
                                    <TableCell align="center">CONTRATO DE TRABAJO</TableCell>
                                    <TableCell align="center"><button id='verGenerar' className='verGenerar'>VER</button></TableCell>
                                    <TableCell align="center"><button id='generar' className='generar'>GENERAR</button></TableCell>
                                    <TableCell align="center"><button id='imprimir' className='imprimir'><LocalPrintshopIcon /></button></TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>   
                                    <TableCell align="center">ACUERDO DE CONFIDENCIALIDAD</TableCell>
                                    <TableCell align="center"><button id='verGenerar' className='verGenerar'>VER</button></TableCell>
                                    <TableCell align="center"><button id='generar' className='generar'>GENERAR</button></TableCell>
                                    <TableCell align="center"><button id='imprimir' className='imprimir'><LocalPrintshopIcon /></button></TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>   
                                    <TableCell align="center">PERFIL DE CARGO</TableCell>
                                    <TableCell align="center"><button id='verGenerar' className='verGenerar'>VER</button></TableCell>
                                    <TableCell align="center"><button id='generar' className='generar'>GENERAR</button></TableCell>
                                    <TableCell align="center"><button id='imprimir' className='imprimir'><LocalPrintshopIcon /></button></TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>   
                                    <TableCell align="center">ENCUESTA DE SALUD</TableCell>
                                    <TableCell align="center"><button id='verGenerar' className='verGenerar'>VER</button></TableCell>
                                    <TableCell align="center"><button id='generar' className='generar'>GENERAR</button></TableCell>
                                    <TableCell align="center"><button id='imprimir' className='imprimir'><LocalPrintshopIcon /></button></TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>   
                                    <TableCell align="center">RECOMENDACIONES MEDICAS</TableCell>
                                    <TableCell align="center"><button id='verGenerar' className='verGenerar'>VER</button></TableCell>
                                    <TableCell align="center"><button id='generar' className='generar'>GENERAR</button></TableCell>
                                    <TableCell align="center"><button id='imprimir' className='imprimir'><LocalPrintshopIcon /></button></TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>   
                                    <TableCell align="center">CODIGO DE VESTIMENTA</TableCell>
                                    <TableCell align="center"><button id='verGenerar' className='verGenerar'>VER</button></TableCell>
                                    <TableCell align="center"><button id='generar' className='generar'>GENERAR</button></TableCell>
                                    <TableCell align="center"><button id='imprimir' className='imprimir'><LocalPrintshopIcon /></button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </div>
                    <div className="grid-modal2Generar">
                        <button className="btnCerrarModalGenerar" onClick={closeModal}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default modal_Generar

