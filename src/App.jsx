import { Box, Grid } from '@mui/material';
import React, { createContext, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Mainbody from './Mainbody/Mainbody';
import { ProductProvider } from './Commponent/ProductContaxt';

export const AppContext = createContext();

export default function App() {
  const [open, setOpen] = useState(false);

  const openSidemenu = () => {
    setOpen(!open);
  };

 

  return (
    <>
      <AppContext.Provider value={{ open, setOpen }}>
        <ProductProvider>
          <Grid container columnSpacing={3}>
            <Grid
              item
              lg={2}
              xs={12}
              position={open ? 'absolute' : ''}
              md={open ? 2 : 12}
              display={{
                md: open ? 'block' : 'none',
                lg: 'block',
                sm: open ? 'block' : 'none',
                xs: open ? 'block' : 'none',
              }}
            >
              <Sidebar ></Sidebar>
            </Grid>
            <Grid item lg={10} md={open ? 10 : 12}>
              <Mainbody openmenu={openSidemenu}></Mainbody>
            </Grid>
          </Grid>
        </ProductProvider>
      </AppContext.Provider>
    </>
  );
}
