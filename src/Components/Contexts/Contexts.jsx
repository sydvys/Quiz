import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const QUIZ_CONTEXT = createContext({})

const Contexts = ({ children }) => {

    const [category, setCategory] = useState([]);
    const [difficulty, setDifficulty] = useState([]);
    const [number, setNumber] = useState('');
    const [questions, setQuestions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [difficultyLevels, setDifficultyLevels] = useState([]);
    const [radio, setRadio] = useState("")
    const [score, setScore] = useState(0);

    const url = `https://opentdb.com/api.php?${number && `&amount=${number}`}${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=boolean`;

    const fetchCategories = async () => {
          const response = await axios.get(`https://opentdb.com/api_category.php`);
          const { trivia_categories } = response.data;
          setCategories(trivia_categories);
      };

      useEffect(() => {
        fetchCategories()
      }, [])


    const fetchData = async () => {
          const response = await axios.get(url);
          setQuestions(response.data.results);
          console.log(response.data.results);
      };

      useEffect(() => {
        fetchData();
      }, [number, category, difficulty])    
    
    return (
        <QUIZ_CONTEXT.Provider value={{ number, setNumber, difficulty, setDifficulty, questions, setQuestions,  category, setCategory, fetchCategories, fetchData, categories, setCategories, difficultyLevels, setDifficultyLevels, radio, setRadio, score, setScore }}>
            {children}
        </QUIZ_CONTEXT.Provider>
    )
}

export default Contexts