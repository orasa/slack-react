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
      }
    ]
  }
  //function
  createMessage = (e) => {
    e.preventDefault()
      console.log(this.state.text);
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
