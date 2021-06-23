  
import React from 'react';
import logo from './logo.svg';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import visa from './img/visa.png';
import master from './img/master-card.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

let idObj = [{

  lastName: "Doe",
  firstName: "John",
  gender: "male",
  height: 178,
  birth: Date("1992-07-14"),
  picture: "https://randomuser.me/api/portraits/men/44.jpg"
},
{
  lastName: "Delores",
  firstName: "Obrien",
  gender: "female",
  height: 172,
  birth: Date("1988-05-11"),
  picture: "https://randomuser.me/api/portraits/women/44.jpg",

}]


let card = [{
  type: "Visa",
  number:"0123456789018845",
  expirationMonth: 3,
  expirationYear : 2021,
  bank: "BNP",
  owner: "Maxence Bouret",
  bgColor: "#11aa99",
  color: "white",
  img: visa

},

{
  type: "Master Card",
  number: "0123456789010995",
  expirationMonth: 3,
  expirationYear: 2021,
  bank: "N26",
  owner: "Maxence Bouret",
  bgColor: "#eeeeee",
  color: "#222222",
  img: master
},
{
  type: "Visa",
  number: "0123456789016984",
  expirationMonth: 12,
  expirationYear: 2019,
  bank: "Name of the Bank",
  owner: "Firstname Lastname",
  bgColor: "#ddbb55",
  color: "white",
  img: visa
}]




function App() {
  return (
    <div className="App">
        <div>
          {idObj.map((idObj) => {
            return ( 
            
            <IdCard
            picture = {idObj.picture}
            firstName = {idObj.firstName}
            lastName = {idObj.lastName}
            gender = {idObj.gender}
            height = {idObj.height}
            birth = {idObj.birth}
            />
          )

          })}

        </div>

        <div>
        <Greetings lang="de"></Greetings>
        <Greetings lang="fr"></Greetings>
        <Greetings lang="en"></Greetings>
        <Greetings lang="es"></Greetings>

        </div>
        
        <div>
          <Random />
        </div>

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <div>
          {card.map((card) =>{
            return(
              <CreditCard type= {card.type} bgColor={card.bgColor}
              img= {card.img}
              number= {card.number}
              expirationMonth= {card.expirationMonth}
              expirationYear= {card.expirationYear}
              bank= {card.bank}
              owner= {card.owner}
              />
            )
          })}
        </div>
        

    </div>
  );
}

export default App;
