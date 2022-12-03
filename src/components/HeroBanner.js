import React from 'react';
import {Box,Stack,Typography,Button} from "@mui/material";

function HeroBanner() {
  return (
    <Box sx={{
      mt : { lg : '212px', xs : '70px'},
      ml : {sm : '50px'}
    }} position="relative" p="20px">
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography 
      fontWeight="700"  
      sx={{fontSize : {
        lg : '44px',
        xs : '40px'
      }}}
      >
        Sweat , Simle <br/> and  Repeat
      </Typography>
      <Typography  
      fontSize="22px"  
      LineHeight="35px"
       mb={3} >
       Checkout out the most effective exercise
      </Typography>
      <Button variant="contained">Explore</Button>

    </Box>
  )
}

export default HeroBanner