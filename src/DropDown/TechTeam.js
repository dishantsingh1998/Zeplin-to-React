import React, { Component } from 'react'
import accesstime from "../img/accesstime.svg";
import linkicon from "../img/linkicon.svg";
import Oval from "../Oval/Oval";
import Button from "../Button/Button";
import './TechTeam.css'
import './DropDown.css'





export default class TechTeam extends Component {
    render() {
        return (
            <div>
              <div class="flex-container1 space-between1 Sales">
          Tech Team
      
          <div class="flex-item1">
            <text class="Product-Demo">Website quotation </text>
            <span className="span-switch">
              <Button rounded={true} />
            </span>
            <text class="minsRs501">45mins@Rs.50</text>

            <img src={accesstime} class="access_time-24px1"></img>
            <img src={linkicon} class="linkicon11"></img>
            <text class="two1">+ 2 more</text>
            <div class ="linkicon11"></div>
            <Oval/>
        
          </div>
          <div class="flex-item1">
            <text class="Product-Demo">Andriod app development </text>
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
          <div class="flex-item1">
            <text class="Product-Demo">IOS app development</text>
            <span className="span-switch">
              <Button rounded={true} />
            </span>
            <text class="minsRs1">45mins@Rs.50</text>

            <img src={accesstime} class="access_time-241"></img>
            <img src={linkicon} class="linkicon21"></img>
            <text class="five1">+ 5 more</text>
            <div class ="linkicon21"></div>
            <Oval/>
          
          </div>
          
          
          </div>
          <div class="flex-item12">
            <text class="Product-Demo">Machine Learning</text>
            <span className="span-switch">
              <Button rounded={true} />
            </span>
            <text class="minsRs15">45mins@Rs.50</text>

            <img src={accesstime} class="access_time-2415"></img>
            <img src={linkicon} class="linkicon215"></img>
            <text class="five15">+ 5 more</text>
            <div class ="linkicon215"></div>
            <Oval/>
          
          </div>
          <div class="flex-item122">
            <text class="Product-Demo">Simple Billing app</text>
            <span className="span-switch">
              <Button rounded={true} />
            </span>
            <text class="minsRs15">45mins@Rs.50</text>

            <img src={accesstime} class="access_time-2415"></img>
            <img src={linkicon} class="linkicon215"></img>
            <text class="five15">+ 5 more</text>
            <div class ="linkicon215"></div>
            <Oval/>
          
          </div>

          <div class ="rectangular">
          <text class ="Marketing">Marketing</text>
              
          </div>
                
            </div>
        )
    }
}
