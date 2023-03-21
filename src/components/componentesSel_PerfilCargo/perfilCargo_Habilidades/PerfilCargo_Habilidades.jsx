import "./perfilCargo_Habilidades.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PerfilCargo_Habilidades = () => {
  const rows = [
    {
        habilidad:'responsabilidad',
    },
    {
        habilidad:'actividad positiva',
    },
    {
        habilidad:'desarrollo de software',
    },
  ];
  return  <TableContainer component={Paper} className="perfilCargo_Habilidades" >
  <Table sx={{ minWidth: 400 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell className="tablecell" >HABILIDAD</TableCell>
        <TableCell className="tablecell" >NIVEL</TableCell>
        <TableCell className="tablecell" >RESULTADO</TableCell>
        <TableCell className="tablecell" >OBSERVACIONES</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell className="tablecell">{row.habilidad} </TableCell>
            <TableCell className="tablecell">     <select name="" id="" required>
                                                    <option value="">Selecciona:</option>
                                                    <option value="1">Cumple</option>
                                                    <option value="2">No cumple</option>
                                                </select>
            </TableCell>
            <TableCell className="tablecell">   <select name="" id="" required>
                                                    <option value="">Selecciona:</option>
                                                    <option value="1">Cumple</option>
                                                    <option value="2">No Cumple</option>
                                                </select>
            </TableCell>
          <TableCell className="tablecell">     <select name="" id="" required>
                                                    <option value="">Selecciona:</option>
                                                    <option value="1">Cumple</option>
                                                    <option value="2">No cumple</option>
                                                </select>
            </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer> 
};

export default PerfilCargo_Habilidades