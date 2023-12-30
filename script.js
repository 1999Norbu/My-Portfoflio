function myfunction(){
    var x= document.getElementById("navv");

    if (x.className === "nav"){
        x.className += " responsive";
    }

    else{
        x.className = "nav";
    }
    

}


let valueDispalys = document.querySelectorAll(".num");
let interval = 1000;

valueDispalys.forEach((valueDispalys) => {
    let startValue = 1;
    let endValue = parseInt(valueDispalys.getAttribute("data-val"));
    let duaration = Math.floor(interval / endValue);
    let counter = setInterval(function (){
        startValue += 1;
        valueDispalys.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, duaration);
})