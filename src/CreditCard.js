

function CreditCard(props){
    return(

        <div type={props.type} className="cardBorder" style= {{backgroundColor: `${props.bgColor}`}}>
            <img className ="imgCard" src={props.img}></img>
            <span className="cardNumber">{props.number}</span>
            <div className="dateCard">
            <span > Expires {props.expirationMonth}/{props.expirationYear}</span>
            <span className="cardBank">{props.bank}</span>
            </div>
            
            <span className="cardOwner">{props.owner}</span>
        </div>

    )
}

export default CreditCard