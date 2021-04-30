import React from 'react'
import group2 from "../img/group2.svg";
import "./NavBar.css"
import SideBar from "../SideBar/SideBar";


const NavBar = () => {
    return (
        <div>
        <body>
        <nav className ="Rectangl">
        <div className ="View-Events"> View Events</div>
        <div class = "Group-2">
        <img src={group2}></img> 
        </div>
 <div className ="Oval5">
 OF
 </div>
<div class="Omar-Faizan">Omar Faizan</div>
        </nav>

        </body>
       
        </div>
       
            
        
    )
}

export default NavBar
