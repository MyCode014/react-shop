import { Box, Grid, Paper, Rating, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ProductContext } from '../Commponent/ProductContaxt';

export default function ProductCard() {
  const { item } = useContext(ProductContext);
  

  return ( 

   <>

   {item.map((elemnt)=>
   {
      return(
        <Grid item lg={4} md={4} sm={6} xs={12}>
        <Paper elevation={12} sx={{padding:'10px'}}>
        <Stack alignItems='center' gap={1}>
          <img style={{width:'220px',height:"auto"}} src={elemnt.img} alt="" />
          <Typography component='span' sx={{fontWeight:'bold',fontSize:'20px'}}> {elemnt.title}</Typography>
        <Stack flexDirection='row' alignItems='center' gap={2}>
          
          <Rating sx={{fontSize:'18px'}} name="half-rating" defaultValue={2.5} precision={0.5} />
            <Typography variant='p' sx={{fontSize:'15px'}}>(123 reviews)</Typography>
            
          </Stack>
          <Typography variant='p' sx={{fontSize:'20px',fontWeight:'bold'}}>{`$ ${elemnt.newPrice}`}</Typography>
          <Box>
          
          </Box>
        </Stack>
      </Paper>
      </Grid>
      )
   })}
     
    
   </>
  )
}
