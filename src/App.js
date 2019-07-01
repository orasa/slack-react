import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Sidebar from './sidebar'
import Content from './Content'

//data
//Functions
//render html

class App extends Component {

  //return something
  //for multiple line the return needed to be wrap in ()

  render(){

  return (
     <div id="wrap">
      <Sidebar/>
       <Content/>

      </div>
      )
   }
}
export default App;
