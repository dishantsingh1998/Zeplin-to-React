import React, { Component } from "react";
import accesstime from "../img/accesstime.svg";
import linkicon from "../img/linkicon.svg";
import Oval from "../Oval/Oval";
import Button from "../Button/Button";
import  TeachTeam  from "./TechTeam";
import "./DropDown.css";

export default class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      black: true,
    };
    this.state = {
      blue: true,
    };
    this.state = {
      brown: true,
    };
  }

  render() {
    return (
      <div>
        <div class="flex-container space-between Sales">
          Sales
      
          <div class="flex-item">
            <text class="Product-Demo">  Product Demo </text>
            <span className="span-switch">
              <Button rounded={true} />
            </span>
            <text class="minsRs50">45mins@Rs.50</text>

            <img src={accesstime} class="access_time-24px"></img>
            <img src={linkicon} class="linkicon"></img>
            <text class="two">+ 2 more</text>
            <div class ="linkicon"></div>
            <Oval/>
        
          </div>
          <div class="flex-item">
            <text class="Product-Demo">  Follow up with new clients </text>
            <span className="span-switch">
              <Button rounded={true} />
            </span>
            <text class="minsRs5">45mins@Rs.50</text>

            <img src={accesstime} class="access_time-24p"></img>
            <img src={linkicon} class="linkicon1"></img>
            <text class="ten">+ 10 more</text>
            <div class ="linkicon1"></div>
            <Oval/>
          </div>
          <div class="flex-item">
            <text class="Product-Demo">  Take feedback for new features</text>
            <span className="span-switch">
              <Button rounded={true} />
            </span>
            <text class="minsRs">45mins@Rs.50</text>

            <img src={accesstime} class="access_time-24"></img>
            <img src={linkicon} class="linkicon2"></img>
            <text class="five">+ 5 more</text>
            <div class ="linkicon2"></div>
            <Oval/>
          
          </div>
        </div>
        <TeachTeam/>
      </div>
    );
  }
}
