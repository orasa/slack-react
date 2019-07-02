import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  Content from "./Content";



class Message extends Component {

  // state:  ={
  //   message: this.props.message
  // }

  render() {
    return (
      <div className="message">
         <span className="author">{this.state.message.auther}</span>
         <span className="date">{this.state.message.date}</span>
         <div className="body">{this.state.message.body}</div>
      </div>

      )
    }
  }// end class
export default Message
