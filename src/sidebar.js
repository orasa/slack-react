import React, { Component } from "react";
import "./Sidebar.css";
import Channel from './Channel' //import child element into parent Channel is a child of Sidebar

class Sidebar extends Component {
  state = {
    workspace: "*Aewsome Space* *************"
  };

  state = {

       channels: [
         {
           id: 1,
         name: 'general'
       }, {
         id: 2,
         name: 'programming'
       }, {
         id: 3,
         name: 'random'
        }
      ]
  }


  render() {

    return (
      <div id="sidebar">
        <h2>{this.state.workspace}</h2>
        <div class="box">
        <ul >
        {
          this.state.channels.map((c) => {
          return < Channel channel={c} />
          }
         )
        }
        </ul>
        </div>
      
      </div>
    )
 }
}

export default Sidebar;
