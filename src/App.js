import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import Movie from './components/movie'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:type/:id" element={<Movie />} />
      </Routes>
    </Router>
  )
}

export default App
