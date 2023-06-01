import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Categories from '../../Categories/Categories';
import { QUIZ_CONTEXT } from '../../Contexts/Contexts';
import Styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false)
  const { number, setNumber, difficulty, setDifficulty, category, setCategory } = useContext(QUIZ_CONTEXT)

  return (
    <>
      <Stack className={Styles.main} >

        <TextField
          className={Styles.TextField}
          id="outlined-number"
          label="Number"
          type="number"
          defaultValue="0"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) => {
            setNumber(event.target.value)
          }}
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
          {Categories.map((cat) => (
            <MenuItem key={cat.category} value={cat.value}>
              {cat.category}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className={Styles.TextField}
          id="outlined-select-currency"
          label="Difficulty"
          defaultValue="Easy"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <MenuItem key="Easy" value="easy">
            Easy
          </MenuItem>
          <MenuItem key="Medium" value="medium">
            Medium
          </MenuItem>
          <MenuItem key="Hard" value="hard">
            Hard
          </MenuItem>
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
    </>
  )
}

export default Home