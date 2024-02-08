import React, { useState } from "react";
import { BrowserRouter, Link, NavLink, Route , Routes } from "react-router-dom";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q5 from "./Q5";
import Q6 from "./Q6";
import {Navbar, Nav,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function Menu() {
  const[AffiCard,setAffiCard]=useState(true)
  const [Year,setYear]=useState()
  const getYear=(data)=>{
    setYear(data)
  }
  return(
    <div>
        <BrowserRouter>
    <div>
    <Navbar collapseOnSelect expand="lg" bg="info" variant="success">
      <Container>
          <Nav className="me-auto">
            <NavLink  className='nav-link test-light' to="/" > Menu </NavLink>
            <NavLink  className='nav-link test-light' to="/Q3" > Q3 </NavLink>
            <NavLink className='nav-link test-light' to="/Q4"> Q4 </NavLink>
            <NavLink  className='nav-link test-light' to="/Q5" > Q5 </NavLink>
            <NavLink  className='nav-link test-light' to="/Q6" > Q6 </NavLink>
            </Nav>
        
      </Container>
    </Navbar>
    <Routes>
     <Route path="/" />
     <Route path='/Q3'  element={<Q3 data={Year} AffiCard={AffiCard} setAffiCard={setAffiCard}/>} />
     <Route path='/Q4'  element={<Q4 get={getYear}  AffiCard={AffiCard} setAffiCard={setAffiCard}/>} />
     <Route path="/Q5"  element={<Q5 />} />
     <Route path="/Q6"  element={<Q6 />} />
    </Routes>
    </div>
    </BrowserRouter>
    </div>
  )
}
export default Menu;


