import { FormControlLabel, FormGroup, Radio, RadioGroup } from '@mui/material';
import React, { useContext, useState } from 'react';
import { ProductContext } from './ProductContaxt';
import Data from '../Data/Data';
import { AppContext } from '../App';

export default function Color() {
  const { item, setItem } = useContext(ProductContext);
  const [selectedValue, setSelectedValue] = useState('');
  const { setOpen } = useContext(AppContext);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
     setOpen(false)
    // If "All" category is selected, reset the data to the original data
    
    
      const filteredData = Data.filter((elemnt) => {
        return elemnt.color === event.target.value;
      });
      setItem(filteredData);
    
  };

  return (
    <>
      <FormGroup>
        <RadioGroup value={selectedValue} onChange={handleChange}>
          <FormControlLabel
            value="red"
            control={<Radio size="small" style={{color:'red'}} />}
            label="Red"
            sx={{ fontWeight: 'bold', fontSize: '50px' }}
          />
          <FormControlLabel
            value="green"
            control={<Radio size="small" style={{color:'green'}} />}
            label="Green"
            sx={{ fontWeight: 'bold', fontSize: '50px' }}
          />
          <FormControlLabel
            value="blue"
            control={<Radio size="small" style={{color:'blue'}} />}
            label="Blue"
            sx={{ fontWeight: 'bold', fontSize: '50px' }}
          />
          <FormControlLabel
            value="black"
            control={<Radio size="small" style={{ color: 'black' }} />}
            label="Black"
            sx={{ fontWeight: 'bold', fontSize: '50px' }}
          />
          <FormControlLabel
            value="white"
            control={<Radio size="small"  />}
        
            label="White"
            sx={{ fontWeight: 'bold', fontSize: '50px' }}
          />
        </RadioGroup>
      </FormGroup>
    </>
  );
}
