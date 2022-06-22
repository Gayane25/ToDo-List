import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {HeaderStyled} from "./HeaderStyled";

function Header() {
  let activeStyle = {

    // paddingLeft: "15px",
    // paddingRight: "15px",
    borderBottom:"4px solid #2F80ED",
    textDecoration:"none",
    paddingBottom:"30px"

  };
  return (
    <HeaderStyled>
        <h1>#Todo</h1>
        <ul>
          <li>
          <NavLink style={({ isActive }) =>
              isActive ? activeStyle : {textDecoration:"none"}
            } to="/">All</NavLink>
          </li>
          <li>
          <NavLink style ={({ isActive }) =>
              isActive ? activeStyle : {textDecoration:"none"}
            }  to="/active">Active</NavLink>
          </li>
          <li>
          <NavLink style ={({ isActive }) =>
              isActive ? activeStyle : {textDecoration:"none"}
            }  to="/completed">Completed</NavLink>
          </li>
          
        </ul>
      
        
    </HeaderStyled>
  )
}

export default Header;