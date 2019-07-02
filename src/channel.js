import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'




class Channel extends Component {
  state = {
          channel: this.props.channel
        }


      render() {
      return(
            <li>{this.state.channel.name}</li>
              )
          }

      }


    export default Channel
