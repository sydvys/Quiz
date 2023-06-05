import { Box, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { QUIZ_CONTEXT } from "../../Contexts/Contexts";
import Styles from './Quiz.module.css'


const Quiz = ({ }) => {
  const { questions, getQuestions } = useContext(QUIZ_CONTEXT)
  const [radio, setRadio] = useState("")

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <>
      <Typography variant="h3" sx={{ textAlign: "center", py: 5 }}> Questions </Typography>

      <getQuestions>
        {questions.map((setQuestions) => {
          console.log(setQuestions.correct_answer)
          return (
            <Box key={uuidv4()} sx={{ my: 2, mx: "auto", maxWidth: "90vw" }}>
              <Typography sx={{ px: 5 }}>Question : {setQuestions.question.replace(/&quot;/g, '"')}</Typography>

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
        })}

      </getQuestions>

    </>
  )
}

export default Quiz