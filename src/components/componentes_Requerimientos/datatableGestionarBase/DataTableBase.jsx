import "./dataTableBase.css"
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
  { id: 1, cedula:'1016458236', nombre:'Andres Felipe Vargas Ortega', edad: '21', celular: '3204198809', whatsapp: '3176452741', ciudad: 'Valledupar', cargo: 'Desarrollador Junior', campaña: 'Novus', fechaPoblado: '10/07/2022', ultCargo: 'Desarrollador junior'},
  { id: 2, cedula:'1016458236', nombre:'Andres Felipe Vargas Ortega', edad: '21', celular: '3204198809', whatsapp: '3176452741', ciudad: 'Valledupar', cargo: 'Desarrollador Junior', campaña: 'Novus', fechaPoblado: '10/07/2022', ultCargo: 'Desarrollador junior'},
  { id: 3, cedula:'1016458236', nombre:'Andres Felipe Vargas Ortega', edad: '21', celular: '3204198809', whatsapp: '3176452741', ciudad: 'Valledupar', cargo: 'Desarrollador Junior', campaña: 'Novus', fechaPoblado: '10/07/2022', ultCargo: 'Desarrollador junior'},
  { id: 4, cedula:'1016458236', nombre:'Andres Felipe Vargas Ortega', edad: '21', celular: '3204198809', whatsapp: '3176452741', ciudad: 'Valledupar', cargo: 'Desarrollador Junior', campaña: 'Novus', fechaPoblado: '10/07/2022', ultCargo: 'Desarrollador junior'},
  { id: 5, cedula:'1016458236', nombre:'Andres Felipe Vargas Ortega', edad: '21', celular: '3204198809', whatsapp: '3176452741', ciudad: 'Valledupar', cargo: 'Desarrollador Junior', campaña: 'Novus', fechaPoblado: '10/07/2022', ultCargo: 'Desarrollador junior'},
  { id: 6, cedula:'1016458236', nombre:'Andres Felipe Vargas Ortega', edad: '21', celular: '3204198809', whatsapp: '3176452741', ciudad: 'Valledupar', cargo: 'Desarrollador Junior', campaña: 'Novus', fechaPoblado: '10/07/2022', ultCargo: 'Desarrollador junior'},
  { id: 7, cedula:'1016458236', nombre:'Andres Felipe Vargas Ortega', edad: '21', celular: '3204198809', whatsapp: '3176452741', ciudad: 'Valledupar', cargo: 'Desarrollador Junior', campaña: 'Novus', fechaPoblado: '10/07/2022', ultCargo: 'Desarrollador junior'},
  { id: 8, cedula:'1016458236', nombre:'Andres Felipe Vargas Ortega', edad: '21', celular: '3204198809', whatsapp: '3176452741', ciudad: 'Valledupar', cargo: 'Desarrollador Junior', campaña: 'Novus', fechaPoblado: '10/07/2022', ultCargo: 'Desarrollador junior'},
  { id: 9, cedula:'1016458236', nombre:'Andres Felipe Vargas Ortega', edad: '21', celular: '3204198809', whatsapp: '3176452741', ciudad: 'Valledupar', cargo: 'Desarrollador Junior', campaña: 'Novus', fechaPoblado: '10/07/2022', ultCargo: 'Desarrollador junior'},
  { id: 10, cedula:'1016458236', nombre:'Andres Felipe Vargas Ortega', edad: '21', celular: '3204198809', whatsapp: '3176452741', ciudad: 'Valledupar', cargo: 'Desarrollador Junior', campaña: 'Novus', fechaPoblado: '10/07/2022', ultCargo: 'Desarrollador junior'},
];

export default function DataTableBase() {
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