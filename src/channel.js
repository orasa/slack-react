import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


class Channel extends Component {

  state = {
          channel: this.props.channel
        }

        componentDidMount() {
          console.log('Hello');
          console.log(this.props);
        }

// onClick ={} function right on
      render() {
      return(
        
         <li className={this.state.channel.active ? 'active': ''}
           onClick={ (c) => this.props.selectChannel(this.state.channel.id)} >
          {this.state.channel.name}
        </li>


              )
          }

      }


    export default Channel
