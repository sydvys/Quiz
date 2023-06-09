import { Check, Clear } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import he from 'he';
import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { QUIZ_CONTEXT } from "../../Contexts/Contexts";
import Styles from './Quiz.module.css';
import { useNavigate } from 'react-router-dom';



const Quiz = ({ }) => {
  const { questions, radio, setRadio } = useContext(QUIZ_CONTEXT)
  const [score, setScore] = useState(0);

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
    const selectedQuestion = questions.find((question) => question.correct_answer === radio);
    const newScore = selectedQuestion ? score + 1 : score;
    setScore(newScore);
  }

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
                value="True"
                onChange={handleRadioChange}
                checked={radio === "True"}
              />
              <label>t</label>

              <Radio
                value="False"
                onChange={handleRadioChange}
                checked={radio === "False"}
              />
              <label>f</label>

              {(setQuestions.correct_answer === radio) ? <Check className={Styles.true} /> : <Clear className={Styles.false} />}

            </div>
          )
        }
        )
      }

      <p>Total Score: {score} </p>


    </>
  )
}

export default Quiz