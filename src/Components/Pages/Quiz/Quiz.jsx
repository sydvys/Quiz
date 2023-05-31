import { useContext } from "react";
import { QUIZ_CONTEXT } from "../../Contexts/Contexts";
import { Button } from "@mui/material";


const Quiz = ({}) => {

  const {number, difficulty,  category,  getJoke, joke,  questions,  getQuestions} = useContext(QUIZ_CONTEXT)
  console.log(joke);
  console.log(questions);

  return (
    <>
    <Button onClick={getJoke}>get joke </Button>
      {joke}

    <Button onClick={getQuestions}>get questions </Button>
      {questions}
      
    <div>number of questions :  {number} </div>
    <div>chosen category :  {category} </div>
    <div>chosen difficulty :  {difficulty} </div>

    </>
  )
}

export default Quiz