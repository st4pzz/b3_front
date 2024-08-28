import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Carregando() {
  return (
    <Box sx={{ display: 'flex', marginTop: 30, color: 'grey.500' }}>
      <CircularProgress color='inherit' />
    </Box>
  );
}