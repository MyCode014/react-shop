import { Box, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Catagory from '../Commponent/Catagory'
import Color from '../Commponent/Color'
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from '../App';


export default function Sidebar() {
  const {setOpen}=useContext(AppContext)
  const close=()=>
  {
    setOpen(false)
  }
  return (
    <>
          <Box onClick={close}  sx={{position:'fixed',display:{xs:'bolck',lg:'none',md:'block',sm:"block"}}} ml={18} mt={3}  zIndex={999} >
            <CloseIcon sx={{fontSize:"40px"}}></CloseIcon>
          </Box>
     <Box zIndex={2}  sx={{height:'100vh',overflow:'hidden',width:{xs:'200px',md:"200px",sm:'200px'}, position:{lg:'sticky',md:'fixed',sm:'fixed',xs:'fixed'},top:'0 !important'}}>
         <Paper elevation={3} sx={{height:'100vh'}}>
      <Box pl={4}>
      <img  style={{width:'100px',height:'100px'}} src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?w=740&t=st=1691231102~exp=1691231702~hmac=6ca648e758abc2b511b78987668d3a7f4660ef23a8fae0483e810e1583ec9c96" alt="" />

      </Box>

       <Box mt={1} display='flex'  pl={5} gap={2} justifyContent='center' flexDirection='column' >
        <Typography variant='h6'  sx={{fontSize:"23px"}}>Catgory</Typography>
        <Box>
        <Catagory></Catagory>
       </Box>
       </Box>
       <Box mt={1} display='flex' pl={5} gap={2} justifyContent='center' flexDirection='column'>
        <Typography variant='h6'  sx={{fontSize:"23px"}}>Color</Typography>
        <Box mr={3}>
       <Color></Color>
       </Box>
       </Box>
     
         </Paper>

     </Box>
       
   
    </>
  )
}
