import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Content.css";
import Message from './Message'


class Content extends Component {
  state = { messages:  [
    {
      id: 1,
    auther: "Tony Russo",
    date: '2 July 2019 - 9.09am',
    body: 'Hellow world'
  },

      {
         id: 2,
      auther: "Orasa O'Neal",
      date: '1 July 2019 - 9.09am',
      body: 'Hey dude1'

      }, {
        id: 3,
      auther: "Tony Russo",
      date: '2 July 2019 - 9.09am',
      body: 'Blah blah'
      }


        ]

  }

  render() {
    return (
      <div>
        <div id="content">
          <div id="messages">
          {
            this.state.messages.map((m) => {
              return <Message message={m} key={m.id} />
            })
          }

          </div>
        </div>
      </div>
    );
  }
} // end class
export default Content;
