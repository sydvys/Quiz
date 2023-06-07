import { Box, Button, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { QUIZ_CONTEXT } from "../../Contexts/Contexts";
import Styles from './Quiz.module.css'
import he from 'he';
import { Check, Clear } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



const Quiz = ({ }) => {
  const { questions, setQuestions, fetchData, score, setScore, radio, setRadio } = useContext(QUIZ_CONTEXT)

  const handleAnswerSelection = (selectedAnswer) => {
    if (selectedAnswer === setQuestions.correct_answer) {
      setScore(score + 1);
    }
  };


  return (
    <>
      {
        questions.map((setQuestions, index) => {
          console.log(setQuestions.question);
          return (
            <div key={uuidv4()} >
              <h3>Question {index + 1}</h3>
              <p>{he.decode(setQuestions.question)}</p>

              <Radio
                type="radio"
                label="True"
                value="True"
                onChange={(event) => {
                  setRadio(event.target.value);
                  handleAnswerSelection(event.target.value);
                }} 
                checked={radio === "True"}
              />
              <label>t</label>

              <Radio
                type="radio"
                label="False"
                value="False"
                onChange={(event) => {
                  setRadio(event.target.value);
                  handleAnswerSelection(event.target.value);
                }} 
                checked={radio === "False"}
              />
              <label>f</label>

              {(setQuestions.correct_answer === radio) ? <Check className={Styles.true} /> : <Clear className={Styles.false} />}


            </div>
          )
        }
        )
      }

      <p>Total Score: {score}</p>


    </>
  )
}

export default Quiz