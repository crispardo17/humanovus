import "./tablaRef_Personal.css"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

  { field: 'nombre', headerName: 'NOMBRE', type: 'int', width: 260 },
  { field: 'telefono', headerName: 'TELEFONO', width: 105 },
  { field: 'tipoId', headerName: 'TIPO IDENTIFICACION', width: 190 },
  { field: 'numId', headerName: 'N° IDENTIFICACION', width: 170 },
  { field: 'parentesco', headerName: 'PAENTESCO',  type: 'date', width: 130 },
  { field: 'clasificacion', headerName: 'CLASIFICACION',  type: 'date', width: 130 },
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
  { id: 1, nombre: 'Christian Alejandro Pardo Cruz', telefono: '3176452741', tipoId: 'Cedula Ciudadania',  numId: '1018463250', parentesco:'Padre', clasificacion:'corresponde'  },
  { id: 2, nombre: 'Christian Alejandro Pardo Cruz', telefono: '3176452741', tipoId: 'Cedula Ciudadania',  numId: '1018463250', parentesco:'Padre', clasificacion:'corresponde'  },
  { id: 3, nombre: 'Christian Alejandro Pardo Cruz', telefono: '3176452741', tipoId: 'Cedula Ciudadania',  numId: '1018463250', parentesco:'Padre', clasificacion:'corresponde'  },
  { id: 4, nombre: 'Christian Alejandro Pardo Cruz', telefono: '3176452741', tipoId: 'Cedula Ciudadania',  numId: '1018463250', parentesco:'Padre', clasificacion:'corresponde'  },
];

export default function TablaRef_Personal () {
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