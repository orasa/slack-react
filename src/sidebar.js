import React, { Component } from "react";
import "./App.css";
import "./sidebar.css";
// import './Channel.css'

class Sidebar extends Component {
  state = {
    workspace: "Tortugar Coders",
    channels: [
      {
        id: 1,
        name: "general"
      },
      {
        id: 2,
        name: "programming"
      },
      {
        id: 3,
        name: "random"
      }
    ]
  };

  render() {
    return (
      <div id="sidebar">
        <h2>{this.state.workspace}</h2>
      </div>
      //  <h3>Channels</h3>
      // <ul className="list-unstyled" >
      //
      // {
      //   this.state.channnels.map((channel) => {
      //     return <Channel />
      //     <li>{Channel.name}</li>
      //   })
      // }
      // </ul>
    );
  }
}

export default Sidebar;
