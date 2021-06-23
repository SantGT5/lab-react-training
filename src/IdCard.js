

function IdCard(props){
return(

    <div className="border d-flex flex-row bd-highlight mb-3">
        <img className = "picture" src={props.picture}/>
        <ul>
            <li className="idInfo"><strong>First name: </strong>{props.firstName}</li>
            <li className="idInfo"><strong>Last name: </strong>{props.lastName}</li>
            <li className="idInfo"><strong>Gender: </strong>{props.gender}</li>
            <li className="idInfo"><strong>Height: </strong>{props.height}</li>
            <li className="idInfo"><strong>Birth: </strong>{props.birth}</li>
        </ul>

    </div>
)}

export default IdCard