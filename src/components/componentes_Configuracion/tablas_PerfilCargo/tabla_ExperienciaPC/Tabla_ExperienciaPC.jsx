import React, { useState } from 'react';
import "./tabla_ExperienciaPC.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const Tabla_ExperienciaPC = () => {
  const [nivel, setNivel] = useState('');
  const [estado, setEstado] = useState('');
  const [datos, setDatos] = useState([]);

  const handleNivelChange = (event) => {
    setNivel(event.target.value);
  };

  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };

  const handleAgregar = () => {
    if (nivel && estado) {
      const nuevoDato = { nivel, estado };
      setDatos([...datos, nuevoDato]);
      setNivel('');
      setEstado('');
    }
  };

  const handleEliminar = (index) => {
    const nuevosDatos = datos.filter((dato, i) => i !== index);
    setDatos(nuevosDatos);
  };

  const handleEditar = (index) => {
    const dato = datos[index];
    setNivel(dato.nivel);
    setEstado(dato.estado);
    const nuevosDatos = datos.filter((dato, i) => i !== index);
    setDatos(nuevosDatos);
  };
  return (
    <div>
      <div className='divExperiencia'>
        <select className='selectExperiencia1' value={nivel} onChange={handleNivelChange}>
          <option value="">Seleccione el tiempo</option>
          <option value="Nivel 1">Sin experiencia</option>
          <option value="Nivel 2">Menos de un año</option>
          <option value="Nivel 3">1 Año</option>
          <option value="Nivel 3">2 Año</option>
          <option value="Nivel 3">3 Año</option>
          <option value="Nivel 3">Mas de 4 Año</option>
        </select>
        <textarea id='textExperiencia' className='textExperiencia' placeholder='Especificación...' value={estado} onChange={handleEstadoChange} />
        <button id='agregarButton' onClick={handleAgregar}><ControlPointIcon /></button>
      </div>
      <TableContainer>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">NIVEL</TableCell>
                <TableCell align="center">ESPECIFICACION</TableCell>
                <TableCell align="center">ACCION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datos.map((dato, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>   
                  <TableCell align="center">{dato.nivel}</TableCell>
                  <TableCell align="center">{dato.estado}</TableCell>
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

export default Tabla_ExperienciaPC

