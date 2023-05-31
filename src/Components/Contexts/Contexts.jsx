import { createContext, useReducer, useState } from "react";
import axios from "axios";


export const QUIZ_CONTEXT = createContext({})

const Contexts = ({ children }) => {

    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [number, setNumber] = useState('')
    


    const Q = async (category = "", difficulty = "") => {
        const { data } = await axios.get(
            `https://opentdb.com/api.php?amount=10${
                category && `&category=${category}`
              }${difficulty && `&difficulty=${difficulty}`}&type=multiple`);

        console.log("here");

    }

    return (
        <QUIZ_CONTEXT.Provider value={{number, setNumber, difficulty, setDifficulty, category, setCategory}}>
            {children}
        </QUIZ_CONTEXT.Provider>
    )
}

export default Contexts