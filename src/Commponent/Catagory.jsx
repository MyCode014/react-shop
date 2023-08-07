import { FormControlLabel, FormGroup, Radio, RadioGroup } from '@mui/material';
import React, { useContext, useState } from 'react';
import { ProductContext } from '../Commponent/ProductContaxt';
import Data from '../Data/Data';
import { AppContext } from '../App';

export default function Catagory() {
  const { item, setItem } = useContext(ProductContext);
  const [selectedValue, setSelectedValue] = useState('');

  const { setOpen } = useContext(AppContext); // Use the correct name for the context, and only extract setOpen, not open itself

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setOpen(false);
    // If "All" category is selected, reset the data to the original data
    if (event.target.value === 'All') {
      setItem(Data);
    } else {
      const filteredData = Data.filter((element) => {
        return element.category === event.target.value;
      });
      setItem(filteredData);
    }
  };

  return (
    <>
      <FormGroup>
        <RadioGroup value={selectedValue} onChange={handleChange}>
          <FormControlLabel
            value="All"
            control={<Radio size="small" />}
            label="All"
            sx={{ fontWeight: 'bold', fontSize: '50px' }}
          />
          <FormControlLabel
            value="sneakers"
            control={<Radio size="small" />}
            label="Sneakers"
            sx={{ fontWeight: 'bold', fontSize: '50px' }}
          />
          <FormControlLabel
            value="flats"
            control={<Radio size="small" />}
            label="Flats"
            sx={{ fontWeight: 'bold', fontSize: '50px' }}
          />
          <FormControlLabel
            value="sandals"
            control={<Radio size="small" />}
            label="Sandals"
            sx={{ fontWeight: 'bold', fontSize: '50px' }}
          />
          <FormControlLabel
            value="heels"
            control={<Radio size="small" />}
            label="Heels"
            sx={{ fontWeight: 'bold', fontSize: '50px' }}
          />
        </RadioGroup>
      </FormGroup>
    </>
  );
}
