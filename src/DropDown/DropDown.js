import React, { Component } from 'react'
import accesstime from "../img/accesstime.svg";
import './DropDown.css';



export default class DropDown extends Component {
  constructor(){
    super();
    this.state = {
         black: true
        
    }
    this.state = {
      blue:true
 }
 this.state = {
  brown:true
}
}
changeColor(){
  this.setState({black: !this.state.black})
}
changeColor1(){
  this.setState({blue: !this.state.blue})
}
changeColor2(){
  this.setState({brown: !this.state.brown})
}

  render() {
    let btn_class = this.state.black ? "blackButton" : "whiteButton";
    let btn_class1 = this.state.blue ? "blackButton" : "whiteButton";
    let btn_class2 = this.state.brown? "blackButton" : "whiteButton";
    return (
      <div>
       
      <div class="flex-container space-between Sales">
      Sales
      {/* <div class ="Sales">Sales</div> */}
      <div class="flex-item"><text class="Product-Demo">ProductDemo </text> <text class ="minsRs50" >45mins@Rs.50</text>
      <button class ="hell" className={btn_class} onClick={this.changeColor.bind(this)}> </button> 
                  <img src={accesstime} class="access_time-24px"></img><div/> </div>
      <div class="flex-item"><text class="Product-Demo">Followupwithnewclients</text> <text class ="minsRs50">45mins@Rs.50</text>
      <button className={btn_class1} onClick={this.changeColor1.bind(this)}> </button> 
        <img src={accesstime} class="access_time-24px"></img><div class="rect"/></div>
      <div class="flex-item"><text class="Product-Demo">Takefeedbackfornewfeatures</text> <text class ="minsRs50">45mins@Rs.50</text> 
      <button className={btn_class2} onClick={this.changeColor2.bind(this)}> </button> <img src={accesstime} class="access_time-24px"></img><div class="rect"/></div>
      
    </div>
     
    
    </div>
    )
  }
}

