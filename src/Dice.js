
import diceEmpty from './DiceImg/dice-empty.png'
import dice1 from './DiceImg/dice1.png'
import dice2 from './DiceImg/dice2.png'
import dice3 from './DiceImg/dice3.png'
import dice4 from './DiceImg/dice4.png'
import dice5 from './DiceImg/dice5.png'
import dice6 from './DiceImg/dice6.png'

import React from "react"

class Dice extends React.Component{

    state = {
        diceEmpty: diceEmpty,
        dice3: dice3,
        allDice: [dice1, dice2, dice3, dice4, dice5, dice6]
    }



    shuffle = () =>{

        
        this.setState({dice3: diceEmpty})

        setTimeout(() => { 
            let dice3 = [...this.state.allDice]
            let random = Math.floor(Math.random() * dice3.length);
            this.setState({dice3: dice3[random]}); 
        
        }, 1000);
    }

    render(){
        return(

          <div>
              <button onClick={this.shuffle}>
                  <img src = {`${this.state.dice3}`}/>
              </button>
          </div>
        )
    }
}

export default Dice