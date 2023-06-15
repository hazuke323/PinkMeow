import './App.css'
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom'
import HomePage from './view/home'
import DeclarationPage from './view/declaration'
import CatCalutPage from './view/calut'
import AboutPage from './view/about'
import { Component } from 'react'
import React from 'react'


function App () {
  const location = useLocation()
  // render () {
  if (location.pathname == '/') {
    return <div className='App'>
      <HomePage></HomePage>
    </div>
  } else if (location.pathname == '/cat') {
    return <div className='App'>
      <AboutPage></AboutPage>
    </div>
  } else if (location.pathname == '/about')
    return <div className='App'>
      <CatCalutPage></CatCalutPage>
    </div>
  // return (
  //   <Router>
  //     <Link to="/" ></Link>
  //     <Route exact path="/" element={<HomePage/>}></Route>
  //     <Route path="/declaration" component={DeclarationPage}></Route>
  //     <Route path="/calut" component={CatCalutPage}></Route>
  //     <Route path="/about" component={AboutPage}></Route>
  //   </Router>
  // )
  // }
}

export default App



// export default function App () {
//   // const location = useLocation()
//   // console.log("lo", location)
//   return (
//     <div>
//       <HomePage></HomePage>
//     </div>
//   )
// }