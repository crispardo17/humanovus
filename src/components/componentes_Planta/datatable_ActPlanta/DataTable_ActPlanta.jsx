import "./dataTable_ActPlanta.css"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

  { field: 'id', headerName: 'ID', type: 'int', width: 60 },
  { field: 'cedula', headerName: 'CEDULA', type: 'int', width: 130 },
  { field: 'nombre', headerName: 'NOMBRES Y APELLIDOS', type: 'string', width: 280 },
  { field: 'cargo', headerName: 'CARGO', width: 140 },
  { field: 'campaña', headerName: 'CAMPAÑA', width: 150 },
  { field: 'ciudad', headerName: 'CIUDAD', width: 120 },
  { field: 'fechaIngreso', headerName: 'FECHA INGRESO',  type: 'date', width: 190 },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];
const rows = [
  { id: 1, id: 1, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', cargo: 'Desarollador', campaña: 'Desarollador',  ciudad: 'Bogota',  fechaIngreso:'18/12/2022' },
  { id: 3, id: 3, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', cargo: 'Auxiliar',     campaña: 'Auxiliar',      ciudad: 'Cali',    fechaIngreso:'18/12/2022' },
  { id: 2, id: 2, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', cargo: 'Desarollador', campaña: 'Desarollador',  ciudad: 'Cali',    fechaIngreso:'18/12/2022' },
  { id: 4, id: 4, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', cargo: 'Desarollador', campaña: 'Desarollador',  ciudad: 'Cali',    fechaIngreso:'18/12/2022' },
  { id: 5, id: 5, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', cargo: 'Auxiliar',     campaña: 'Auxiliar',      ciudad: 'Bogota',  fechaIngreso:'18/12/2022' },
  { id: 6, id: 6, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', cargo: 'Auxiliar',     campaña: 'Auxiliar',      ciudad: 'Bogota',  fechaIngreso:'18/12/2022' },
  { id: 7, id: 7, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', cargo: 'Desarollador', campaña: 'Desarollador',  ciudad: 'Bogota',  fechaIngreso:'18/12/2022' },
  { id: 8, id: 8, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', cargo: 'Auxiliar',     campaña: 'Auxiliar',      ciudad: 'Bogota',  fechaIngreso:'18/12/2022' },
  { id: 9, id: 9, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', cargo: 'Auxiliar',     campaña: 'Auxiliar',      ciudad: 'Bogota',  fechaIngreso:'18/12/2022' },
];

export default function DataTable_ActPlanta() {
  return (
    <div style={{ height: 530, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}