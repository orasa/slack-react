import React, { Component } from "react";
import "./Sidebar.css";
import Channel from './Channel' //import child element into parent Channel is a child of Sidebar

class Sidebar extends Component {


  state = {
    workspace: "*Aewsome*Space* *******",

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

//set parameter id so we can access on return
  selectChannel = (id) => {
    let channels = this.state.channels
    channels.forEach((c) => delete c.active)

    let channel = this.state.channels.find((c) => c.id === id)
    channel.active = true

    console.log('test find Channel id',channel);
    this.setState({channels})
    console.log('test', this.state.channels);
  }

  createChannel = () => {
    let channels = this.state.channels
    channels.forEach((c) => {
      console.log("Hello Test function");
    }
  )
 }

  testFunction  = () => {
    console.log("Hello")
   }
  //pass as a props down at chanel component

  render() {

    return (
      <div id="sidebar">


        <div className="box">
          <h2>{this.state.workspace}</h2>
        <ul>
        {
          this.state.channels.map((c) => {
          return <Channel channel={c}
          key={c.id } selectChannel = {this.selectChannel}
          createChannel={this.createChannel}
          testFunction={this.testFunction}
          />
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
