import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import Styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const Home = () => {

  const navigate = useNavigate();

  const [category, setCategory] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [number, setNumber] = useState(0)
  const [error, setError] = useState(false)


  return (
    <Stack className={Styles.main} >

      <TextField
        className={Styles.TextField}
        id="outlined-number"
        label="Number"
        type="number"
        defaultValue="0"
        value={number}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setNumber(e.target.value)}
      />

      <TextField
        className={Styles.TextField}
        sx={{ my: 4 }}
        id="outlined-select-currency"
        select
        label="Category"
        defaultValue="EUR"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        // sx={{ my: 4 }}
        className={Styles.TextField}
        id="outlined-select-currency"
        label="Difficulty"
        defaultValue="Easy"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Button sx={{ my: 3, px: 5 }} size="large" variant="contained" 
      onClick={() => {
        if (!category || !difficulty || !number) {
          setError(true)
        } else {
          setError(false);
          navigate("/Quiz")
        }
      }} 
      // href='http://localhost:3000/quiz'
      >Start The Quiz</Button>

    </Stack>
  )
}

export default Home