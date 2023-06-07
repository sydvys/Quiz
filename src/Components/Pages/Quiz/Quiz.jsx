import { Box, Button, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { QUIZ_CONTEXT } from "../../Contexts/Contexts";
import Styles from './Quiz.module.css'


const Quiz = ({ }) => {
  const { questions, setQuestions, fetchData } = useContext(QUIZ_CONTEXT)
  const [radio, setRadio] = useState("")

  return (
    <>
      {
        questions.map((setQuestions, index) => {
          console.log(setQuestions.question);
          return (
            <div key={uuidv4()} >
              <h4>Question {index + 1}</h4>
              <p>{setQuestions.question}</p>
              <p>{setQuestions.difficulty}</p>
              <p>{setQuestions.correct_answer}</p>
            </div> 
          )
        })
      } 

      
{/* 
      {questions.map((setQuestions, index) => {
        console.log(setQuestions.correct_answer)
        return (
          <Box key={uuidv4()} sx={{ my: 2, mx: "auto", maxWidth: "90vw" }}>
            <Typography variant="h6" >Question {index + 1} </Typography>
            <Typography>{setQuestions.question.replace(/&quot;/g, '"')}</Typography>
            <Radio
              className={Styles.true}
              value="True"
              lable="True"
              onChange={event => setRadio(event.target.value)}
              checked={radio === "True"}
            /> true

            <Radio
              value="False"
              lable="False"
              onChange={event => setRadio(event.target.value)}
              checked={radio === "False"}
            /> false

            {(setQuestions.correct_answer === radio) ? <div className={Styles.true}>Your Answer Is Correct</div> : <div className={Styles.false}>Your Answer Is Incorrect</div>}

          </Box>
        )
      })} */}







    </>
  )
}

export default Quiz