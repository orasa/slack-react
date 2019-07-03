import React, { Component } from "react";
import './Content.css'




class Message extends Component {

  state = {
          messages: this.props.message
        }

 //pass as props
  render() {

    return (

    <div className="message">
     <span className="author"> {this.state.messages.author}</span>
     <span className="date"> {this.state.messages.date} </span>
     <div className="body"> {this.state.messages.body} </div>
    </div>

      )
    }
  }// end class
export default Message
