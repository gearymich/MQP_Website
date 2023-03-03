import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

const StripedDataGrid = styled(DataGrid)(({}) => ({
  [`& .${gridClasses.row}.odd`]: {
    backgroundColor: '#ecebeb',
    '&:hover, &.Mui-hovered': {
      backgroundColor: 'lightblue',
      '@media (hover: none)': {
          backgroundColor: 'tranparent',
          },
      },
  },
    [`& .${gridClasses.row}.even`]: {
      backgroundColor: 'white',
      '&:hover, &.Mui-hovered': {
        backgroundColor: 'lightblue',
        '@media (hover: none)': {
          backgroundColor: 'tranparent',
          },
      },
  }
}));

export default StripedDataGrid;

