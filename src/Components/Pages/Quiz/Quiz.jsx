import { Button } from "@mui/material";
import { useContext } from "react";
import { QUIZ_CONTEXT } from "../../Contexts/Contexts";


const Quiz = ({ }) => {

  const { number, difficulty, category, getJoke, joke, questions, getQuestions } = useContext(QUIZ_CONTEXT)
  console.log(questions);

  return (
    <>
      <Button onClick={() => (getQuestions())}>get questions </Button>
      <div>number of questions :  {number} </div>
      <div>chosen category :  {category} </div>
      <div>chosen difficulty :  {difficulty} </div>

    </>
  )
}

export default Quiz