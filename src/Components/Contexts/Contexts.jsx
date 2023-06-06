import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const QUIZ_CONTEXT = createContext({})

const Contexts = ({ children }) => {

    const [category, setCategory] = useState([]);
    const [difficulty, setDifficulty] = useState([]);
    const [number, setNumber] = useState('');
    const [questions, setQuestions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [difficultyLevels, setDifficultyLevels] = useState([]);



    const mainUrl = `https://opentdb.com/api.php?${number && `&amount=${number}`}${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=boolean`
    const categoryUrl = `https://opentdb.com/api_category.php`

    const fetchCategories = async () => {
          const response = await axios.get(categoryUrl);
          const { trivia_categories } = response.data;
          setCategories(trivia_categories);
      };

      useEffect(() => {
        fetchCategories()
      }, [])


    const fetchData = async () => {
          const response = await axios.get(mainUrl);
          setQuestions(response.data);
      };

      useEffect(() => {
        fetchData();
      }, [])
    
    //     const fetchDifficulty = async () => {
    //         const response = await axios.get('https://opentdb.com/api_category.php');
    //         const { data } = response;
    //         setDifficulty(data.difficulty);
    //     };

    //   useEffect(() => {
    //     fetchDifficulty();
    //   }, []);
    
    
    return (
        <QUIZ_CONTEXT.Provider value={{ number, setNumber, difficulty, setDifficulty, category, setCategory, questions, setQuestions,  category, setCategory, fetchCategories, fetchData, categories, setCategories, difficultyLevels, setDifficultyLevels,  }}>
            {children}
        </QUIZ_CONTEXT.Provider>
    )
}

export default Contexts