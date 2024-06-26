import './App.css';
import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";
import React, { Component } from 'react'

import Newsitems from './components/Newsitems';

import Navbar2 from './components/Navbar2';



export default class App extends Component {
 
  render() {
    return (
      <>
      <BrowserRouter>
      {/* <Navbar/> */}
      <Navbar2 />
      <Routes>
      <Route exact path="/general" element= {<Newsitems key="general" category={"general"} country={"in"} />} />
      <Route exact path="/business" element= {<Newsitems key="business" category={"business"} country={"in"} />} />
      <Route exact path="/entertainment" element= {<Newsitems key="entertainment" category={"entertainment"} country={"in"} />} />
      <Route exact path="/health" element= {<Newsitems key="health" category={"health"} country={"in"} />} />
      <Route exact path="/science" element= {<Newsitems key="science" category={"science"} country={"in"} />} />
      <Route exact path="/sports" element= {<Newsitems key="sports" category={"sports"} country={"in"} />} />
      <Route exact path="/technology" element= {<Newsitems key="technology" category={"technology"} country={"in"} />} />     
      </Routes>
      <Outlet /> 
    </BrowserRouter>
      </>
    )
  }
}
// business
// entertainment
// general
// health
// science
// sports
// technology

