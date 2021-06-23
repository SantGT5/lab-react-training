

function Greetings(props){

    const greeObj = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    }

    function greeText(){
        let text = ""
        for(let key in greeObj){
            if (props.lang === key) {
                text += greeObj[key] + " ";
              }
        }
       
        return text
    }
    


return(

<div className="border">
    <p> {`${greeText()}`} </p>
</div>


)}

export default Greetings