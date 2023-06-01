import { Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { QUIZ_CONTEXT } from "../../Contexts/Contexts";


const Quiz = ({ }) => {
  const { questions, getQuestions } = useContext(QUIZ_CONTEXT)

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <>
      <Typography variant="h3" sx={{ textAlign: "center", py: 5 }}> Questions </Typography>

      <getQuestions>
        {questions.map((setQuestions) => {
          return (
            <Box key={setQuestions.category} sx={{ my: 2, mx: "auto", maxWidth: "90vw" }}>
              <Typography sx={{ px: 5 }}>Question : {setQuestions.question}</Typography>
              <Typography sx={{ px: 5, py: 1 }}>Answers : {setQuestions.correct_answer}</Typography>
            </Box>
          )
        })}
      </getQuestions>
    </>
  )
}

export default Quiz