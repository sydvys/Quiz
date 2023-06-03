import { Box, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import { useContext, useEffect, useState } from "react";
import { QUIZ_CONTEXT } from "../../Contexts/Contexts";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { v4 as uuidv4 } from 'uuid';



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
              <Typography sx={{ px: 5 }}>Question : {setQuestions.question}</Typography>
              <Typography sx={{ px: 5, py: 1 }}>Answers : {setQuestions.correct_answer}</Typography>

              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <Radio name="answers" value="False" lable="False" onChange={event => setRadio(+event.target.value)} /> fales
                <Radio name="answers" value="True" lable="True" onChange={event => setRadio(+event.target.value)} /> true

                {(setQuestions.correct_answer == radio) ? console.log("t") : console.log("f")}
              </RadioGroup>
            </Box>
          )
        })}
        
      </getQuestions>

    </>
  )
}

export default Quiz