import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Quiz from '../Pages/Quiz/Quiz'
import Result from '../Pages/Result/Result'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/result" element={<Result/>}/>
    </Routes>
    </>
  )
}

export default Router