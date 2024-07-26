import React, { useState } from "react";
// import { Link, Route, Router, Routes } from "react-router-dom";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Menu from "./Menu";
import Q5 from "./Q5";
function App() {
  // const[AffiCard,setAffiCard]=useState(true)
  // const [Year,setYear]=useState()
  // const getYear=(data)=>{
  //   setYear(data)
  // NOOOOOTHING
  // }
  
  return(
    <>
    <Menu></Menu>
      {/* <Q3 data={Year} AffiCard={AffiCard} setAffiCard={setAffiCard}/>
      <br></br>
      <br></br>
      <Q4 get={getYear}  AffiCard={AffiCard} setAffiCard={setAffiCard}/>
      <br></br>
      <br></br>
      <Q5></Q5> */}
      {/* <Routes>
        <Menu />
        <Route path="/" element={<Q3 />}/>
        <Route path="Q4" element={<Q4 />}/>
      </Routes> */}
      {/* <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Menu</Link>
              </li>
              <li>
                <Link to='/Q3'>Q3</Link>
              </li>
              <li>
                <Link to='/Q4'>Q4</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Menu} />
          <Route path="/Q3" component={<Q3></Q3>} />
          <Route path="/Q4" component={<Q4></Q4>} />
        </div>
      </Router> */}
    </>
  )
}
export default App;


