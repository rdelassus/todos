import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//component file
import TodoContainer from "./functionBased/components/TodoContainer"
import About from "./functionBased/pages/About"
import NotMatch from "./functionBased/pages/NotMatch"

//stylesheet
import "./functionBased/App.css"
import Navbar from "./functionBased/components/Navbar";
import SinglePage from "./functionBased/pages/SinglePage";
import { HashRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<TodoContainer />}></Route>
            <Route path='about'>
              <Route path='' element={<About />} />
              <Route path=':slug' element={<SinglePage />} />
            </Route>
            <Route path='*' element={<NotMatch />}></Route>
          </Routes>
        </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
)
