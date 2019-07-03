import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";




class NewMessage  extends Component {

  state = {
    text: " "
  }

//while
  changeText = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  //clear messase after Send
  clearMessage =() => {
    this.setState({
      text: ''
    })

   }


  render() {
    return (

          <div id="NewMessages">

            <form onSubmit={(e) => {
                this.props.createMessage(e,this.state.text)
              this.clearMessage()}
            }>
             <div className="input-group mb-3">
                 <input type="text" className="form-control" placeholder="NewMessage..."
                   value={this.state.text} onChange={(e) => this.changeText(e)} />

                 <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
                </div>
             </div>
            </form>
        </div>

    )
  }
} // end class
export default NewMessage;
