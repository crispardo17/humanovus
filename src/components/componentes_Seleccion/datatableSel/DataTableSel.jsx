import "./dataTableSel.css"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

  { field: 'cedula', headerName: 'CEDULA', type: 'int', width: 130 },
  { field: 'nombre', headerName: 'NOMBRES Y APELLIDOS', type: 'string', width: 270 },
  { field: 'ciudad', headerName: 'CIUDAD', width: 130 },
  { field: 'cargo', headerName: 'CARGO', width: 150 },
  { field: 'campaña', headerName: 'CAMPAÑA', width: 150 },
  { field: 'fechaBusqueda', headerName: 'FECHA BUSQUEDA',  type: 'date', width: 170 },
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
  { id: 1, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', ciudad: 'Bogota', cargo: 'Desarollador',  campaña: 'AvVillas', fechaBusqueda:'18/12/2022'  },
  { id: 3, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', ciudad: 'Cali',   cargo: 'Auxiliar',      campaña: 'Popular',  fechaBusqueda:'18/12/2022' },
  { id: 2, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', ciudad: 'Cali',   cargo: 'Desarollador',  campaña: 'Popular',  fechaBusqueda:'18/12/2022' },
  { id: 4, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', ciudad: 'Cali',   cargo: 'Desarollador',  campaña: 'Popular',  fechaBusqueda:'18/12/2022' },
  { id: 5, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', ciudad: 'Bogota', cargo: 'Auxiliar',      campaña: 'Popular',  fechaBusqueda:'18/12/2022' },
  { id: 6, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', ciudad: 'Bogota', cargo: 'Auxiliar',      campaña: 'Popular',  fechaBusqueda:'18/12/2022' },
  { id: 7, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', ciudad: 'Bogota', cargo: 'Desarollador',  campaña: 'AvVillas', fechaBusqueda:'18/12/2022' },
  { id: 8, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', ciudad: 'Bogota', cargo: 'Auxiliar',      campaña: 'AvVillas', fechaBusqueda:'18/12/2022' },
  { id: 9, cedula: '1018463250', nombre: 'Camilo Andres Rojas Puentes', ciudad: 'Bogota', cargo: 'Auxiliar',      campaña: 'AvVillas', fechaBusqueda:'18/12/2022' },
];

export default function DataTableSel() {
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
