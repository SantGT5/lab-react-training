  
import React from 'react';
import logo from './logo.svg';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import visa from './img/visa.png';
import master from './img/master-card.svg';
import LikeButton from './LikeButton';
import ClickablePicture from './ClickablePicture';
import Dice from './Dice'
import Carousel from './Carousel';
import Rating from './Rating';
import NumbersTable from './NumbersTable';
import FaceBook from './FaceBook';
import SignupPage from './SignupPage';
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


    
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>






    
        <LikeButton /> <LikeButton />

        <div>


        <ClickablePicture
        img='./persons/maxence.png'
        imgClicked='./persons/maxence-glasses.png'
      />
    </div>


      <div>
        <Dice />
      </div>
    
      <Carousel
      
  imgs={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />

<NumbersTable limit={12} />
<FaceBook />
<SignupPage />


    </div>
  );
}

export default App;
