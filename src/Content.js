import React, { Component } from "react";
import "./Content.css";
import Message from './Message'
import NewMessage from './NewMessage'


class Content extends Component {

  state = {
    messages:[

    {
    id: 1,
    author: "Tony Russo",
    date: '2 July 2019 - 9.09am',
    body: 'Hellow world'
  },

      {
      id: 2,
      author: "Orasa O'Neal",
      date: '1 July 2019 - 9.09am',
      body: 'Hey dude1'

      }, {
        id: 3,
      author: "Tony Russo",
      date: '2 July 2019 - 9.09am',
      body: 'Blah blah'
      }]
  }
  //function add param text, to recieve the in put from  send button,
  createMessage = (e,text) => {
    e.preventDefault()
      console.log(text);
      let message = {
        id: 7,
        author: "Nui",
        date: "July 3, 2019",
        body: text
      }
      let messages = this.state.messages
      messages.push(message)
      this.setState({messages})
  }




  render() {
    return (

      <div id="content">
          <div id="message">
           {
            this.state.messages.map((m) => {

              return <Message message={m} key={m.id} />
             }
            )
           }
          </div>
          <NewMessage createMessage={this.createMessage} />
      </div>

    )
  }
} // end class
export default Content
