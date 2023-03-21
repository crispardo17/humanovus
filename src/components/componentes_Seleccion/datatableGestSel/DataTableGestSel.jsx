import "./dataTableGestSel.css"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

  { field: 'id', headerName: 'ID', type: 'number', width: 50 },
  { field: 'identificacion', headerName: 'IDENTIFICACION', type: 'number', width: 150 },
  { field: 'nombre', headerName: 'NOMBRE', type: 'text', width: 250 },
  { field: 'ciudad', headerName: 'CIUDAD', type: 'text', width: 110 },
  { field: 'cargo', headerName: 'CARGO', type: 'text', width: 170 },
  { field: 'campaña', headerName: 'CAMPAÑA',  type: 'text', width: 110 },
  { field: 'fBusqueda', headerName: 'FECHA BUSQUEDA',  type: 'text', width: 110 },
  { field: 'estado', headerName: 'ESTADO',  type: 'text', width: 110 },
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
  { id: 1, id: 1, identificacion:'1018463250', nombre:'Cristhian Alejandro Pardo Cruz', ciudad:'Valledupar', cargo:'Desarrollador Junior', campaña:'AvVillas', fBusqueda:'18/08/2022', estado:'Contratado', },
  { id: 1, id: 2, identificacion:'1018463250', nombre:'Cristhian Alejandro Pardo Cruz', ciudad:'Valledupar', cargo:'Desarrollador Junior', campaña:'AvVillas', fBusqueda:'18/08/2022', estado:'Contratado', },
  { id: 1, id: 3, identificacion:'1018463250', nombre:'Cristhian Alejandro Pardo Cruz', ciudad:'Valledupar', cargo:'Desarrollador Junior', campaña:'AvVillas', fBusqueda:'18/08/2022', estado:'Contratado', },
  { id: 1, id: 4, identificacion:'1018463250', nombre:'Cristhian Alejandro Pardo Cruz', ciudad:'Valledupar', cargo:'Desarrollador Junior', campaña:'AvVillas', fBusqueda:'18/08/2022', estado:'Contratado', },
  { id: 1, id: 5, identificacion:'1018463250', nombre:'Cristhian Alejandro Pardo Cruz', ciudad:'Barranquilla', cargo:'Desarrollador Junior', campaña:'AvVillas', fBusqueda:'18/08/2022', estado:'Contratado', },
  { id: 1, id: 6, identificacion:'1018463250', nombre:'Cristhian Alejandro Pardo Cruz', ciudad:'Barranquilla', cargo:'Desarrollador Junior', campaña:'AvVillas', fBusqueda:'18/08/2022', estado:'Contratado', },
  { id: 1, id: 7, identificacion:'1018463250', nombre:'Cristhian Alejandro Pardo Cruz', ciudad:'Barranquilla', cargo:'Desarrollador Junior', campaña:'AvVillas', fBusqueda:'18/08/2022', estado:'Contratado', },
  { id: 1, id: 8, identificacion:'1018463250', nombre:'Cristhian Alejandro Pardo Cruz', ciudad:'Barranquilla', cargo:'Desarrollador Junior', campaña:'AvVillas', fBusqueda:'18/08/2022', estado:'Contratado', },
  { id: 1, id: 9, identificacion:'1018463250', nombre:'Cristhian Alejandro Pardo Cruz', ciudad:'Barranquilla', cargo:'Desarrollador Junior', campaña:'AvVillas', fBusqueda:'18/08/2022', estado:'Contratado', },
  { id: 1, id: 10, identificacion:'1018463250', nombre:'Cristhian Alejandro Pardo Cruz', ciudad:'Barranquilla', cargo:'Desarrollador Junior', campaña:'AvVillas', fBusqueda:'18/08/2022', estado:'Contratado', },
  { id: 1, id: 11, identificacion:'1018463250', nombre:'Cristhian Alejandro Pardo Cruz', ciudad:'Barranquilla', cargo:'Desarrollador Junior', campaña:'AvVillas', fBusqueda:'18/08/2022', estado:'Contratado', },
];

export default function DataTableGestSel() {
  return (
    <div style={{ height: 525, width: '100%' }}>
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
