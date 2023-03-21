import "./datatableExamenes.css"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'tipoId', headerName: 'TIPO IDENTIFICACION', type: 'number', width: 200 },
  { field: 'numId', headerName: 'N° IDENTIFICACION',type: 'number', width: 200 },
  { field: 'nombre', headerName: 'NOMBRES',type: 'text', width: 280 },
  { field: 'edad',headerName: 'EDAD', type: 'number',width: 140},
  { field: 'tipoBeneficiario',headerName: 'TIPO BENEFICIARIO', type: 'number',width: 210},
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, tipoId: 'CC', numId: '1012896524', nombre: 'Camilo Andres Ramirez Orozco', edad: 35, tipoBeneficiario: 'Padre' },
  { id: 2, tipoId: 'CC', numId: '1012896524', nombre: 'Camilo Andres Ramirez Orozco', edad: 35, tipoBeneficiario: 'Padre' },
  { id: 3, tipoId: 'CC', numId: '1012896524', nombre: 'Camilo Andres Ramirez Orozco', edad: 35, tipoBeneficiario: 'Padre' },
  { id: 4, tipoId: 'CC', numId: '1012896524', nombre: 'Camilo Andres Ramirez Orozco', edad: 35, tipoBeneficiario: 'Padre' },
  { id: 5, tipoId: 'CC', numId: '1012896524', nombre: 'Camilo Andres Ramirez Orozco', edad: 35, tipoBeneficiario: 'Padre' },
  { id: 6, tipoId: 'CC', numId: '1012896524', nombre: 'Camilo Andres Ramirez Orozco', edad: 35, tipoBeneficiario: 'Padre' },
  { id: 7, tipoId: 'CC', numId: '1012896524', nombre: 'Camilo Andres Ramirez Orozco', edad: 35, tipoBeneficiario: 'Padre' },
  { id: 8, tipoId: 'CC', numId: '1012896524', nombre: 'Camilo Andres Ramirez Orozco', edad: 35, tipoBeneficiario: 'Padre' },
  { id: 9, tipoId: 'CC', numId: '1012896524', nombre: 'Camilo Andres Ramirez Orozco', edad: 35, tipoBeneficiario: 'Padre' },
  { id: 10, tipoId: 'CC', numId: '1012896524', nombre: 'Camilo Andres Ramirez Orozco', edad: 35, tipoBeneficiario: 'Padre' },
  { id: 11, tipoId: 'CC', numId: '1012896524', nombre: 'Camilo Andres Ramirez Orozco', edad: 35, tipoBeneficiario: 'Padre' },
  { id: 12, tipoId: 'CC', numId: '1012896524', nombre: 'Camilo Andres Ramirez Orozco', edad: 35, tipoBeneficiario: 'Padre' },
];

export default function DatatableExamenes() {
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