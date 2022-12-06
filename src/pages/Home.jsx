import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material'
import React from 'react'


const Home = () => {
    return (
    <Box
    sx={{
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    >
      <LoadingButton variant="outlined" color="">最初のメモを作成</LoadingButton>
    </Box>
  );
};

export default Home