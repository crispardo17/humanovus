import React, { useState } from 'react';
import "./tabla_HabilidadesPC.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const Tabla_HabilidadesPC = () => {
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
      <select className='selectHabilidad1' value={nivel} onChange={handleNivelChange}>
        <option value="">Seleccione una habilidad</option>
        <option value="COMUNICACION ASERTIVA">COMUNICACION ASERTIVA</option>
        <option value="TRABAJO EN EQUIPO">TRABAJO EN EQUIPO</option>
        <option value="ORIENTACION AL CUMPLIMIENTO DE SEGUIMIENTO DE NORMAS">ORIENTACION AL CUMPLIMIENTO DE SEGUIMIENTO DE NORMAS</option>
        <option value="RELACIONES INTERPERSONALES">RELACIONES INTERPERSONALES</option>
        <option value="TRABAJO BAJO PRESION">TRABAJO BAJO PRESION</option>
        <option value="TOLERANCIA A LA FRUSTRACION">TOLERANCIA A LA FRUSTRACION</option>
        <option value="CAPACIDAD DE LIDERAZGO">CAPACIDAD DE LIDERAZGO</option>
      </select>
      <select className='selectHabilidad2' value={estado} onChange={handleEstadoChange}>
        <option value="">Seleccione un nivel</option>
        <option value="ALTO">ALTO</option>
        <option value="MEDIO">MEDIO</option>
        <option value="BAJO">BAJO</option>
      </select>
      <button id='agregarButton' onClick={handleAgregar}><ControlPointIcon /></button>
      <TableContainer>
          <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">HABILIDAD</TableCell>
                <TableCell align="center">NIVEL</TableCell>
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

export default Tabla_HabilidadesPC

