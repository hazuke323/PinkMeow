import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './view/home'
import CatCalutPage from './view/calut'
import AboutPage from './view/about'
import DeclarationPage from './view/declaration'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <Router>
  //   <Routes>
  //     <Route exact path="/" element={<HomePage />}></Route>
  //     <Route path="/declaration" element={<DeclarationPage />}></Route>
  //     <Route path="/calut" element={<CatCalutPage />}></Route>
  //     <Route path="/about" element={<AboutPage />}></Route>
  //   </Routes>
  // </Router>
  <Router>
    <App></App>
  </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
