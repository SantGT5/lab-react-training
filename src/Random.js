

let first = Math.floor(Math.random() * 6) + 1
let secund = Math.floor(Math.random() * 100) + 1

function Random(){
return(

<div>
    <p className="border">Random Value between 1 and 6 = {first}</p>
    <p className="border">Random Value between 1 and 100 = {secund}</p>
</div>

)

}

export default Random