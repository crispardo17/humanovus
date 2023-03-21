import "./dataTableConfi.css"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

  { field: 'id', headerName: 'ID', type: 'int', width: 200 },
  { field: 'campaña', headerName: 'Campaña', type: 'string', width: 500 },
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
  { id: 1, campaña: 'AvVillas' },
  { id: 3, campaña: 'AvVillas' },
  { id: 2, campaña: 'AvVillas' },
  { id: 4, campaña: 'AvVillas' },
  { id: 5, campaña: 'AvVillas' },
  { id: 6, campaña: 'AvVillas' },
  { id: 7, campaña: 'AvVillas' },
  { id: 8, campaña: 'AvVillas' },
  { id: 9, campaña: 'AvVillas' },
];

export default function DataTableConfi() {
  return (
    <div style={{ height: 520, width: '100%' }}>
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