import "./tablaRef_Laboral.css"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

  { field: 'empresa', headerName: 'EMPRESA', type: 'int', width: 90 },
  { field: 'cargo', headerName: 'CARGO', type: 'string', width: 100 },
  { field: 'telefono', headerName: 'TELEFONO', width: 110 },
  { field: 'direccion', headerName: 'DIRECCION', width: 120 },
  { field: 'email', headerName: 'EMAIL', width: 200 },
  { field: 'fechaIngreso', headerName: 'FECHA INGRESO',  type: 'date', width: 130 },
  { field: 'fechaRetiro', headerName: 'FECHA RETIRO',  type: 'date', width: 130 },
  { field: 'funcion', headerName: 'FUNCION',  type: 'date', width: 240 },
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
  { id: 1, empresa: 'Iwall', cargo: 'Director Tecnico', telefono: '31764527401', direccion: 'Cra 20 - 88 20',  email: 'cris.pardo17@gmail.com', fechaIngreso:'18/12/2022', fechaRetiro:'18/12/2022', funcion:'Desarrollo de software'    },
  { id: 2, empresa: 'Iwall', cargo: 'Director Tecnico', telefono: '31764527401', direccion: 'Cra 20 - 88 20',  email: 'cris.pardo17@gmail.com', fechaIngreso:'18/12/2022', fechaRetiro:'18/12/2022', funcion:'Desarrollo de software'    },
  { id: 3, empresa: 'Iwall', cargo: 'Director Tecnico', telefono: '31764527401', direccion: 'Cra 20 - 88 20',  email: 'cris.pardo17@gmail.com', fechaIngreso:'18/12/2022', fechaRetiro:'18/12/2022', funcion:'Desarrollo de software'    },
];

export default function TablaRef_Laboral () {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        checkboxSelection
      />
    </div>
  );
}