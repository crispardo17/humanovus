import "./dataTableSel_GestCitacion.css"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

  { field: 'id', headerName: 'ID', type: 'int', width: 50 }, 
  { field: 'fCitacion', headerName: 'FECHA CITACION', type: 'date', width: 130 },
  { field: 'hCitacion', headerName: 'HORA CITACION', type: 'hour', width: 130 },
  { field: 'tCitacion', headerName: 'TIPO CITACION', type: 'text', width: 130 },
  { field: 'nombre', headerName: 'NOMBRES Y APELLIDOS', type: 'string', width: 260 },
  { field: 'cargo', headerName: 'CARGO', type: 'string', width: 170 },
  { field: 'entrevistador', headerName: 'ENTREVISTADOR', width: 150 },
  { field: 'entrevista', headerName: 'ENTREVISTA',  type: 'text', width: 130 },
  { field: 'estado', headerName: 'ESTADO', type: 'text', width: 150 },
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
  { id: 1, id: 1, fCitacion: '00/00/0000', hCitacion: '00-00', tCitacion: 'Entrevista', nombre: 'Christian Alejandro Pardo Cruz', cargo: 'Desarollador Junior',  entrevistador: 'Psicologo1', entrevista:'psicologia', estado:'Preseleccionado'  },
  { id: 2, id: 2, fCitacion: '00/00/0000', hCitacion: '00-00', tCitacion: 'Entrevista', nombre: 'Christian Alejandro Pardo Cruz', cargo: 'Desarollador Junior',  entrevistador: 'Psicologo1', entrevista:'psicologia', estado:'Preseleccionado'  },
  { id: 3, id: 3, fCitacion: '00/00/0000', hCitacion: '00-00', tCitacion: 'Entrevista', nombre: 'Christian Alejandro Pardo Cruz', cargo: 'Desarollador Junior',  entrevistador: 'Psicologo1', entrevista:'psicologia', estado:'Preseleccionado'  },
  { id: 4, id: 4, fCitacion: '00/00/0000', hCitacion: '00-00', tCitacion: 'Entrevista', nombre: 'Christian Alejandro Pardo Cruz', cargo: 'Desarollador Junior',  entrevistador: 'Psicologo1', entrevista:'psicologia', estado:'Preseleccionado'  },
  { id: 5, id: 5, fCitacion: '00/00/0000', hCitacion: '00-00', tCitacion: 'Entrevista', nombre: 'Christian Alejandro Pardo Cruz', cargo: 'Desarollador Junior',  entrevistador: 'Psicologo1', entrevista:'psicologia', estado:'Preseleccionado'  },
  { id: 6, id: 6, fCitacion: '00/00/0000', hCitacion: '00-00', tCitacion: 'Entrevista', nombre: 'Christian Alejandro Pardo Cruz', cargo: 'Desarollador Junior',  entrevistador: 'Psicologo1', entrevista:'psicologia', estado:'Preseleccionado'  },
  { id: 7, id: 7, fCitacion: '00/00/0000', hCitacion: '00-00', tCitacion: 'Entrevista', nombre: 'Christian Alejandro Pardo Cruz', cargo: 'Desarollador Junior',  entrevistador: 'Psicologo1', entrevista:'psicologia', estado:'Preseleccionado'  },
  { id: 8, id: 8, fCitacion: '00/00/0000', hCitacion: '00-00', tCitacion: 'Entrevista', nombre: 'Christian Alejandro Pardo Cruz', cargo: 'Desarollador Junior',  entrevistador: 'Psicologo1', entrevista:'psicologia', estado:'Preseleccionado'  },
  { id: 9, id: 9, fCitacion: '00/00/0000', hCitacion: '00-00', tCitacion: 'Entrevista', nombre: 'Christian Alejandro Pardo Cruz', cargo: 'Desarollador Junior',  entrevistador: 'Psicologo1', entrevista:'psicologia', estado:'Preseleccionado'  },
  { id: 10, id: 10, fCitacion: '00/00/0000', hCitacion: '00-00', tCitacion: 'Entrevista', nombre: 'Christian Alejandro Pardo Cruz', cargo: 'Desarollador Junior',  entrevistador: 'Psicologo1', entrevista:'psicologia', estado:'Preseleccionado'  },
  { id: 11, id: 11, fCitacion: '00/00/0000', hCitacion: '00-00', tCitacion: 'Entrevista', nombre: 'Christian Alejandro Pardo Cruz', cargo: 'Desarollador Junior',  entrevistador: 'Psicologo1', entrevista:'psicologia', estado:'Preseleccionado'  },
  { id: 12, id: 12, fCitacion: '00/00/0000', hCitacion: '00-00', tCitacion: 'Entrevista', nombre: 'Christian Alejandro Pardo Cruz', cargo: 'Desarollador Junior',  entrevistador: 'Psicologo1', entrevista:'psicologia', estado:'Preseleccionado'  },

];

export default function DataTableSel_GestCitacion() {
  return (
    <div style={{ height: 535, width: '100%' }}>
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
