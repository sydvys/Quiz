import { Check, Clear } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import he from 'he';
import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { QUIZ_CONTEXT } from "../../Contexts/Contexts";
import Styles from './Quiz.module.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';



const Quiz = ({ }) => {
  const { questions, setScore, setQuestions } = useContext(QUIZ_CONTEXT)
  const navigate = useNavigate();
  const [selectedFlags, setSelectedFlags] = useState(Array(questions.length).fill(false));

  const handleRadioChange = (event, index) => {
    const selectedAnswer = event.target.value;
    const updatedQuestions = [...questions];
    updatedQuestions[index].radio = selectedAnswer;
    setQuestions(updatedQuestions);
  
    const currentQuestion = updatedQuestions[index];
    const isCorrect = currentQuestion.correct_answer === selectedAnswer;
  
    let updatedScore = 0;
    for (const question of updatedQuestions) {
      if (question.correct_answer === question.radio) {
        updatedScore++;
      }
    }
  
    setScore(updatedScore);

    const updatedSelectedFlags = [...selectedFlags];
    updatedSelectedFlags[index] = true;
    setSelectedFlags(updatedSelectedFlags);
  };

  return (
    <>
      {
        questions.map((question, index) => {
          console.log(question.question);
          return (
            <div key={uuidv4()} >
              <h3>Question {index + 1}</h3>
              <p>{he.decode(question.question)}</p>

              <Radio
                value="True"
                onChange={(event) => handleRadioChange(event, index)}
                checked={question.radio === "True"}
              />
              <label>t</label>

              <Radio
                value="False"
                onChange={(event) => handleRadioChange(event, index)}
                checked={question.radio === "False"}
              />
              <label>f</label>

              {selectedFlags[index] && (
              question.correct_answer === question.radio ? (
                <Check className={Styles.true} />
              ) : (
                <Clear className={Styles.false} />
              )
            )}
            </div>
          )
        }
        )
      }

      <Button
        sx={{ my: 3, px: 5 }}
        size="large"
        variant="contained"
        onClick={() => navigate("/Result")}>
        get score
      </Button>

    </>
  )
}

export default Quiz