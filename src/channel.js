import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Channel from './channel'


class Channel extends Component {

state = {

     workspace: 'ABC',
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
          <h2> {this.state.workspace}</h2>
          <h3>Channels</h3>
          <ul className="list-unstyled" >

          {
            this.state.channnels.map((channel) => {
              return <Channel />

          }

        )
      }
        </ul>
     }

    export default Sidebar
