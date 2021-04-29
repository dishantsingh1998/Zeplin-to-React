import React from 'react'
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import DropDown from "./DropDown/DropDown";
import SearchBar from "./SearchBar/SearchBar";
import "./MainScreen.css"




const MainScreen = () => {
    return (
        <div>

      
        
        <NavBar/>
        <SideBar/>
        <div>
             <SearchBar/>
        </div>
       
        <DropDown/>
        
      
      
        </div>
            
        
    )
}

export default MainScreen
