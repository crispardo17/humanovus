import React, { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "./tabla_InfoComplementaria.css"

const Tabla_InfoComplementaria = () => {

    const [text, setText] = useState("");
    const [tableData, setTableData] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    const handleTextChange = (e) => {
    setText(e.target.value);
    };

    const handleAddText = () => {
    if (text !== "") {
      if (editIndex !== -1) {
        const newData = [...tableData];
        newData[editIndex] = text;
        setTableData(newData);
        setEditIndex(-1);
      } else {
        setTableData([...tableData, text]);
      }
      setText("");
    }
    };

    const handleEditar = (index) => {
    setText(tableData[index]);
    setEditIndex(index);
    };

    const handleEliminar = (index) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
    };

  return (
    <div>
      <div className='divComplementario'>
        <textarea id='infoComplementaria' className='infoComplementaria' placeholder='Ambiente de Trabajo...' value={text} onChange={handleTextChange} />
        <button id='agregarButton' onClick={handleAddText}><ControlPointIcon /></button>
      </div>
      <br />
      <TableContainer>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">AMBIENTE DE TRABAJO</TableCell>
              <TableCell align="center">ACCION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((data, index) => (
             <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">{data}</TableCell>
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

export default Tabla_InfoComplementaria
