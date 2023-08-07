import { Box, Card, Grid, Paper, Rating, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Data from '../Data/Data'
import MenuIcon from '@mui/icons-material/Menu';

import ProductCard from '../Commponent/ProductCard'
import { AppContext } from '../App';


export default function Mainbody() {
  const {setOpen}=useContext(AppContext)
  const openmenu=()=>
  {
    setOpen(true)
  }
  return (
<>
   <Box onClick={openmenu} display={{ lg:'none',md:'block',xs:'block',sm:'block',}} position='absolute' mt={1} ml={4}>
      <MenuIcon sx={{fontSize:'35px'}}></MenuIcon>
   </Box>
  <Box mt={10} >
  <Grid container spacing={5}>
    
    
      <ProductCard></ProductCard>
  
    

     
    
 
  </Grid>
  </Box>
</>
  )
}
