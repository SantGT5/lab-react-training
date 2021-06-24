
import React from 'react'

class Carousel extends React.Component{
    state = {
        count: 0,
        first: 'https://randomuser.me/api/portraits/women/1.jpg',
        allImg: [
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
    ]
    }

    handlePicR = () => {
        let arr =[...this.state.allImg]
       if(this.state.count===3){

        this.setState({  count: 0});  
       }
          this.setState({ first: arr[this.state.count++]});  
        

        };

handlePicL = () => {
    let arr =[...this.state.allImg]
    if(this.state.count===0){

        this.setState({count: 3});  
       }
       
    this.setState({ first: arr[this.state.count--]});  
     
        };


    render(){
    return(


        <div>

        <button onClick={this.handlePicL}>Left</button>
        <img src= {`${this.state.first}`}/>
        <button onClick={this.handlePicR}>Right</button>

        </div>
          
            
        )
    }
}


export default Carousel