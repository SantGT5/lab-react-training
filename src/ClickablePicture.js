
import maxence from './persons/maxence.png'
import maxenceglasses from './persons/maxence-glasses.png'

import React from "react";

class ClickablePicture extends React.Component{

    state = {
        maxence: maxence,
        maxenceglasses: maxenceglasses
    }

change = () => {

this.setState({ maxence : this.state.maxenceglasses})
this.setState({ maxenceglasses : this.state.maxence})
}


    render(){
        return(
            <div>
                <button>
                    <img src ={ `${this.state.maxence}`} onClick ={this.change}/>
                </button>
            </div>
        )
    }

}

export default ClickablePicture