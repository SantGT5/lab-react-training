

function BoxColor({r, g, b}){
return(

<div className= "border" style= {{backgroundColor: `rgb(${r}, ${g},${b})`}}>
    <p className= "text"> rgb({r}, {g},{b})</p>
</div>
)
}

export default BoxColor