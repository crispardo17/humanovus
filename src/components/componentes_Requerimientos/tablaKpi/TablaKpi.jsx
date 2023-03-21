import "./tablaKpi.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TablaKpi = () => {
  const rows = [
    {
      id:1018463250,
      psicologo:1018463250,
      campaña:1018463250,
      dias:1018463250,
      cargo:1018463250,
      cantidadSolicitada:1018463250,
      cantidadContratada:1018463250,
      porcentaje:1018463250,
    },
    {
      id:1018463250,
      psicologo:1018463250,
      campaña:1018463250,
      dias:1018463250,
      cargo:1018463250,
      cantidadSolicitada:1018463250,
      cantidadContratada:1018463250,
      porcentaje:1018463250,
    },
    {
      id:1018463250,
      psicologo:1018463250,
      campaña:1018463250,
      dias:1018463250,
      cargo:1018463250,
      cantidadSolicitada:1018463250,
      cantidadContratada:1018463250,
      porcentaje:1018463250,
    },
    {
      id:1018463250,
      psicologo:1018463250,
      campaña:1018463250,
      dias:1018463250,
      cargo:1018463250,
      cantidadSolicitada:1018463250,
      cantidadContratada:1018463250,
      porcentaje:1018463250,
    },
    {
      id:1018463250,
      psicologo:1018463250,
      campaña:1018463250,
      dias:1018463250,
      cargo:1018463250,
      cantidadSolicitada:1018463250,
      cantidadContratada:1018463250,
      porcentaje:1018463250,
    },
    
  ];
  return  <TableContainer component={Paper} className="tablaKpi" >
  <Table sx={{ minWidth: 500 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell className="tablecell" >ID</TableCell>
        <TableCell className="tablecell" >PSICOLOGO</TableCell>
        <TableCell className="tablecell" >CAMPAÑA</TableCell>
        <TableCell className="tablecell" >DIAS</TableCell>
        <TableCell className="tablecell" >CARGO</TableCell>
        <TableCell className="tablecell" >CANTIDAD SOLICITADA</TableCell>
        <TableCell className="tablecell" >CANTIDAD CONTRATADA</TableCell>
        <TableCell className="tablecell" >%</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell className="tablecell">{row.id} </TableCell>
          <TableCell className="tablecell">{row.psicologo}</TableCell>
          <TableCell className="tablecell">{row.campaña}</TableCell>
          <TableCell className="tablecell">{row.dias}</TableCell>
          <TableCell className="tablecell">{row.cargo}</TableCell>
          <TableCell className="tablecell">{row.cantidadSolicitada}</TableCell>
          <TableCell className="tablecell">{row.cantidadContratada}</TableCell>
          <TableCell className="tablecell">{row.porcentaje}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer> 
};

export default TablaKpi