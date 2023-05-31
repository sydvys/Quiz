import { useContext } from "react";
import { QUIZ_CONTEXT } from "../../Contexts/Contexts";


const Quiz = ({}) => {

  const {number, setNumber, difficulty, setDifficulty, category, setCategory} = useContext(QUIZ_CONTEXT)

  return (
    <>
    <div>number of questions :  {number} </div>
    <div>chosen category :  {category} </div>
    <div>chosen difficulty :  {difficulty} </div>
    </>
  )
}

export default Quiz