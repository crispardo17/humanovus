import "./dataTableReq.css"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

  { field: 'fechaSolicitud', headerName: 'FECHA DE SOLICITUD', type: 'date', width: 180 },
  { field: 'fechaVencimiento', headerName: 'FECHA DE VENCIMIENTO', type: 'date', width: 220 },
  { field: 'empresa', headerName: 'EMPRESA', width: 150 },
  { field: 'cargo', headerName: 'CARGO', width: 180 },
  { field: 'ciudad', headerName: 'CIUDAD', width: 150 },
  { field: 'solicitante', headerName: 'SOLICITANTE', width: 180 },
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
  { id: 1, fechaSolicitud: '19-03-2023', fechaVencimiento: '19-03-2023', empresa: 'Gopass', cargo: 'Desarollador Junior',  ciudad: 'Cali',        solicitante:'Andrez Gracia' },
  { id: 3, fechaSolicitud: '19-03-2023', fechaVencimiento: '19-03-2023', empresa: 'Novus',  cargo: 'Auxiliar',      ciudad: 'Bucaramanga', solicitante:'Andrez Gracia' },
  { id: 2, fechaSolicitud: '19-03-2023', fechaVencimiento: '19-03-2023', empresa: 'Novus',  cargo: 'Desarollador',  ciudad: 'Medellin',    solicitante:'Andrez Gracia' },
  { id: 4, fechaSolicitud: '19-03-2023', fechaVencimiento: '19-03-2023', empresa: 'Novus',  cargo: 'Desarollador',  ciudad: 'Bogota',      solicitante:'Andrez Gracia' },
  { id: 5, fechaSolicitud: '19-03-2023', fechaVencimiento: '19-03-2023', empresa: 'Gopass', cargo: 'Auxiliar',      ciudad: 'Bogota',      solicitante:'Andrez Gracia' },
  { id: 6, fechaSolicitud: '19-03-2023', fechaVencimiento: '19-03-2023', empresa: 'Gopass', cargo: 'Auxiliar',      ciudad: 'Cali',        solicitante:'Andrez Gracia' },
  { id: 7, fechaSolicitud: '19-03-2023', fechaVencimiento: '19-03-2023', empresa: 'Gopass', cargo: 'Desarollador',  ciudad: 'Bogota',      solicitante:'Andrez Gracia' },
  { id: 8, fechaSolicitud: '19-03-2023', fechaVencimiento: '19-03-2023', empresa: 'Gopass', cargo: 'Auxiliar',      ciudad: 'Bogota',      solicitante:'Andrez Gracia' },
  { id: 9, fechaSolicitud: '19-03-2023', fechaVencimiento: '19-03-2023', empresa: 'Gopass', cargo: 'Auxiliar',      ciudad: 'Bogota',      solicitante:'Andrez Gracia' },
];

export default function DataTableReq() {
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



