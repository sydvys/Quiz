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
  const { number, setNumber, difficulty, setDifficulty, category, setCategory, categories, fetchData, fetchCategories } = useContext(QUIZ_CONTEXT)

  const difficultyLevels = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
  ];


  const [isNumberValid, setNumberValid] = useState(false);
  const [isCategoryValid, setCategoryValid] = useState(false);
  const [isDifficultyValid, setDifficultyValid] = useState(false);

  const allFilled = () => {
    return isNumberValid && isCategoryValid && isDifficultyValid;
  };



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
          name='number'
          value={number}
          onChange={(event) => {
            setNumber(event.target.value)
            setNumberValid(event.target.value !== ''); 
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
          onChange={(e) => {
            setCategory(e.target.value);
            fetchData();
            setCategoryValid(e.target.value !== ''); 
          }}
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
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
          onChange={(e) => {
            setDifficulty(e.target.value);
            fetchData();
            setDifficultyValid(e.target.value !== '');

          }}        >
          {difficultyLevels.map((level) => (
            <MenuItem key={level.value} value={level.value}>
              {level.label}
            </MenuItem>
          ))}
        </TextField>

        <form
          onSubmit={(event) => {
            event.preventDefault(); 
            if (allFilled()) {
              navigate("/Quiz");
            }
          }}
        >
          <Button
            type="submit"
            sx={{ my: 3, px: 5 }}
            size="large"
            variant="contained"
            disabled={!allFilled()}
          >
            Start Quiz
          </Button>
        </form>


      </Stack>
    </>
  )
}

export default Home