import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './content.css'


//data
//Functions
//render html

class App extends Component {

  //return something
  //for multiple line the return needed to be wrap in ()

  render(){

  return (
     <div>
      <div id="content">
       <div id="messages">
         <div className="message">
             <span className="author">Orasa O'Neal</span>
             <span className="date">1 Jul 2019 - 10:55</span>
             <div className="body">Good Moring Sexy Coder!</div>
        </div>

        <div className="message">
            <span className="author">Orasa O'Neal</span>
            <span className="date">1 Jul 2019 - 10:55</span>
            <div className="body">blah bla blah</div>
       </div>

       <div className="message">
           <span className="author">Orasa O'Neal</span>
           <span className="date">1 Jul 2019 - 10:55</span>
           <div className="body"> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised i

         </div>
       </div>

  
       <div className="input-group mb-3">
         <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
       </div>

       </div>
   </div>

      </div>
      )
   }

} // end class
export default App;
