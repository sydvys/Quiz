import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUIZ_CONTEXT } from '../../Contexts/Contexts';
import Styles from './Home.module.css';


const Home = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false)
  const { number, setNumber, difficulty, setDifficulty, category, setCategory, categories } = useContext(QUIZ_CONTEXT)

  const difficultyLevels = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
  ];

  return (
    <>
      <Stack className={Styles.main} >

        {error ? <p className={Styles.error} > All Fields Must Be Filled </p> : null}

        <TextField
          className={Styles.TextField}
          id="outlined-number"
          label="Number"
          type="number"
          defaultValue="0"
          InputLabelProps={{
            shrink: true,
          }}
          name='number'
          onChange={(event) => {
            setNumber(event.target.value)
          }}
        />

        <TextField
          sx={{ my: 4 }}
          className={Styles.TextField}
          id="outlined-select-currency"
          select
          label="Category"
          value={category}
          name='category'
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className={Styles.TextField}
          id="outlined-select-currency"
          select
          label="Difficulty"
          value={difficulty}
          name='difficulty'
          onChange={(e) => setDifficulty(e.target.value)}
        >
          {difficultyLevels.map((level) => (
            <MenuItem key={level.value} value={level.value}>
              {level.label}
              {/* {console.log(level.label)} */}
            </MenuItem>
          ))}
        </TextField>

        <Button sx={{ my: 3, px: 5 }} size="large" variant="contained"
          onClick={() => {
            if (!number || !category || !difficulty) {
              setError(true)
              setTimeout(() => {
                setError(false)
              }, 2000)
            } else {
              setError(false);
              navigate("/Quiz")
            }
          }
          }
        >Start The Quiz</Button>
      </Stack>
    </>
  )
}

export default Home