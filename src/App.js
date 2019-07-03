import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Sidebar from './Sidebar'
import Content from './Content'

// import child component into parents and it will inherit elment on parent


class App extends Component {

  render() {

  return (
     <div id="wrap">
      <Sidebar/>
      <Content/>

      </div>
      )
   }
}
export default App;
