import { createContext, useState } from "react";
import Axios from "axios"


export const QUIZ_CONTEXT = createContext({})

const Contexts = ({ children }) => {

    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [number, setNumber] = useState('')
    const [questions, setQuestions] = useState()
    const [score, setScore] = useState(0)

    const [joke, setJoke] = useState("")

    const getJoke = () => {
        Axios.get(
            " https://official-joke-api.appspot.com/jokes/random"
        ).then((response) => {
            setJoke(response.data.setup + response.data.punchline)
        })
    };



    const getQuestions = () => {
        Axios.get(
            `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=multiple`
        ).then((response) => {
            setQuestions(response.data.results.question)
        })
    }

    return (
        <QUIZ_CONTEXT.Provider value={{ number, setNumber, difficulty, setDifficulty, category, setCategory, getJoke, joke, setJoke, questions, setQuestions, getQuestions }}>
            {children}
        </QUIZ_CONTEXT.Provider>
    )
}

export default Contexts