import axios from "axios";
import { createContext, useState } from "react";

export const QUIZ_CONTEXT = createContext({})

const Contexts = ({ children }) => {

    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [number, setNumber] = useState('')
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState(0)

    const url = `https://opentdb.com/api.php?${number && `&amount=${number}`}${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`

    const getQuestions = async () => {
        const { data } = await axios.get(url);
        setQuestions(data.results);
    };

    return (
        <QUIZ_CONTEXT.Provider value={{ number, setNumber, difficulty, setDifficulty, category, setCategory, questions, setQuestions, getQuestions }}>
            {children}
        </QUIZ_CONTEXT.Provider>
    )
}

export default Contexts