import React, { useState } from 'react';
import "./tipo_Documentacion.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const Tipo_Documentacion = () => {
  const [numero, setNumero] = useState('');
  const [documento, setDocumento] = useState('');
  const [datos, setDatos] = useState([]);

  const handleNumeroChange = (event) => {
    setNumero(event.target.value);
  };

  const handleDocumentoChange = (event) => {
    setDocumento(event.target.value);
  };

  const handleAgregar = () => {
    if (numero && documento) {
      const nuevoDato = { numero, documento};
      setDatos([...datos, nuevoDato]);
      setNumero('');
      setDocumento('');
    }
  };

  const handleEliminar = (index) => {
    const nuevosDatos = datos.filter((dato, i) => i !== index);
    setDatos(nuevosDatos);
  };

  const handleEditar = (index) => {
    const dato = datos[index];
    setNumero(dato.nivel);
    setDocumento(dato.estado);
    const nuevosDatos = datos.filter((dato, i) => i !== index);
    setDatos(nuevosDatos);
  };
  return (
    <div>
      <input id="numeroDocs" className='numeroDocs' type="number" value={numero} onChange={handleNumeroChange} min="1" max="10"></input>
      <select className='selectHabilidad2' value={documento} onChange={handleDocumentoChange}>
        <option value="">Tipo de documento</option>
        <option value="CEDULA DE CIUDADANIA">CEDULA DE CIUDADANIA</option>
        <option value="ANTECEDENTES DE LA POLICIA">ANTECEDENTES DE LA POLICIA</option>
        <option value="ANTECEDENTES DE LA PROCURADURIA">ANTECEDENTES DE LA PROCURADURIA</option>
        <option value="REFERENCIAS PERSONALES">REFERENCIAS PERSONALES</option>
        <option value="CERTIFICADOS LABORALES">CERTIFICADOS LABORALES</option>
        <option value="DIPLOMA Y ACTA DE BACHILLER, TECNICO, TECNOLOGO, PROFESIONAL, ETC.">DIPLOMA Y ACTA DE BACHILLER, TECNICO, TECNOLOGO, PROFESIONAL, ETC.</option>
        <option value="CERTIFICADO DE LA EPS">CERTIFICADO DE LA EPS</option>
        <option value="CERTIFICADO DE FONDO DE PENSIONES">CERTIFICADO DE FONDO DE PENSIONES</option>
        <option value="CERTIFICADO DE CESANTIAS">CERTIFICADO DE CESANTIAS</option>
      </select>
      <button id='agregarButton' onClick={handleAgregar}><ControlPointIcon /></button>
      <TableContainer>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">NUMERO DE DOCUMENTOS</TableCell>
                <TableCell align="center">TIPO DE DOCUMENTOS</TableCell>
                <TableCell align="center">ACCION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datos.map((dato, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>   
                  <TableCell align="center">{dato.numero}</TableCell>
                  <TableCell align="center">{dato.documento}</TableCell>
                  <TableCell align="center">
                    <button id='agregarEditDelete' onClick={() => handleEliminar(index)}><DeleteOutlineIcon /></button>
                    <button id='agregarEditDelete' onClick={() => handleEditar(index)}><EditIcon /></button>
                  </TableCell>
                </TableRow>
                ))}
            </TableBody>
          </Table>
      </TableContainer>
    </div>
  )
}

export default Tipo_Documentacion

