import "./dataTableGestionar.css"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

  { field: 'fecha', headerName: 'FECHA', type: 'date', width: 105 },
  { field: 'fechaVencimiento', headerName: 'FECHA VENCIMIENTO', type: 'date', width: 170 },
  { field: 'empresa', headerName: 'EMPRESA', type: 'text', width: 120 },
  { field: 'ciudad', headerName: 'CIUDAD', type: 'text', width: 110 },
  { field: 'cargo', headerName: 'CARGO', width: 130 },
  { field: 'cantRequerimiento', headerName: 'CANT. REQUERIMIENTO',  type: 'number', width: 190 },
  { field: 'cantCitados', headerName: 'CANT. CITADOS',  type: 'int', width: 140 },
  { field: 'cantContacto', headerName: 'CANT. CONTACTO',  type: 'int', width: 150 },
  { field: 'cantCapacitado', headerName: 'CANT. CAPACITADO',  type: 'int', width: 160 },
  { field: 'diasVencimiento', headerName: 'DIAS PARA VENCIMIENTO',  type: 'int', width: 200 },
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
  { id: 1, fecha:'18/12/2022', fechaVencimiento:'18/12/2022', empresa: 'Grupo'      , ciudad: 'Barranquilla',  cargo: 'Desarollador', cantRequerimiento: '40', cantCitados: '10', cantContacto: '10', cantCapacitado: '10', diasVencimiento: '10'},
  { id: 2, fecha:'18/12/2022', fechaVencimiento:'18/12/2022', empresa: 'GoPass'     , ciudad: 'Barranquilla',  cargo: 'Desarollador', cantRequerimiento: '10', cantCitados: '50', cantContacto: '10', cantCapacitado: '10', diasVencimiento: '10'},
  { id: 3, fecha:'18/12/2022', fechaVencimiento:'18/12/2022', empresa: 'Grupo'      , ciudad: 'Bogota'      ,  cargo: 'Desarollador', cantRequerimiento: '20', cantCitados: '10', cantContacto: '10', cantCapacitado: '10', diasVencimiento: '10'},
  { id: 4, fecha:'18/12/2022', fechaVencimiento:'18/12/2022', empresa: 'Grupo Novus', ciudad: 'Barranquilla',  cargo: 'Desarollador', cantRequerimiento: '10', cantCitados: '10', cantContacto: '10', cantCapacitado: '10', diasVencimiento: '10'},
  { id: 5, fecha:'18/12/2022', fechaVencimiento:'18/12/2022', empresa: 'Grupo Novus', ciudad: 'Barranquilla',  cargo: 'Desarollador', cantRequerimiento: '10', cantCitados: '10', cantContacto: '10', cantCapacitado: '10', diasVencimiento: '10'},
  { id: 6, fecha:'18/12/2022', fechaVencimiento:'18/12/2022', empresa: 'Grupo Novus', ciudad: 'Barranquilla',  cargo: 'Desarollador', cantRequerimiento: '10', cantCitados: '10', cantContacto: '10', cantCapacitado: '10', diasVencimiento: '10'},
  { id: 7, fecha:'18/12/2022', fechaVencimiento:'18/12/2022', empresa: 'Grupo Novus', ciudad: 'Barranquilla',  cargo: 'Desarollador', cantRequerimiento: '10', cantCitados: '10', cantContacto: '10', cantCapacitado: '10', diasVencimiento: '10'},
  { id: 8, fecha:'18/12/2022', fechaVencimiento:'18/12/2022', empresa: 'Grupo Novus', ciudad: 'Barranquilla',  cargo: 'Desarollador', cantRequerimiento: '10', cantCitados: '10', cantContacto: '10', cantCapacitado: '10', diasVencimiento: '10'},
  { id: 9, fecha:'18/12/2022', fechaVencimiento:'18/12/2022', empresa: 'Grupo Novus', ciudad: 'Barranquilla',  cargo: 'Desarollador', cantRequerimiento: '10', cantCitados: '10', cantContacto: '10', cantCapacitado: '10', diasVencimiento: '10'},
  { id: 10, fecha:'18/12/2022', fechaVencimiento:'18/12/2022', empresa: 'Grupo Novus', ciudad: 'Barranquilla',  cargo: 'Desarollador', cantRequerimiento: '10', cantCitados: '10', cantContacto: '10', cantCapacitado: '10', diasVencimiento: '10'},


];

export default function DataTableGestionar() {
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