import React, { useState } from 'react';
import "./tabla_ExamOcupacionales.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const Tabla_ExamOcupacionales = () => {
  const [nivel, setNivel] = useState('');
  const [datos, setDatos] = useState([]);

  const handleNivelChange = (event) => {
    setNivel(event.target.value);
  };

  const handleAgregar = () => {
    if (nivel) {
      const nuevoDato = { nivel};
      setDatos([...datos, nuevoDato]);
      setNivel('');
    }
  };

  const handleEliminar = (index) => {
    const nuevosDatos = datos.filter((dato, i) => i !== index);
    setDatos(nuevosDatos);
  };

  const handleEditar = (index) => {
    const dato = datos[index];
    setNivel(dato.nivel);
    const nuevosDatos = datos.filter((dato, i) => i !== index);
    setDatos(nuevosDatos);
  };
  return (
    <div>
      <select className='selectExamOcupacional' value={nivel} onChange={handleNivelChange}>
        <option value="">Seleccione Nombre del Examen</option>
        <option value="AUDIOMETRIA">AUDIOMETRIA</option>
      </select>
      <button id='agregarButton' onClick={handleAgregar}><ControlPointIcon /></button>
      <TableContainer>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">NOMBRE DE EXAMEN</TableCell>
                <TableCell align="center">ACCION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datos.map((dato, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>   
                  <TableCell align="center">{dato.nivel}</TableCell>
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

export default Tabla_ExamOcupacionales
