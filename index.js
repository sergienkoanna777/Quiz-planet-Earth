const button=document.querySelector(".btn");
button.addEventListener("click", result);
const par = document.querySelector("#show");
function result(e){
    e.preventDefault(e);
    let point=0;
    if(document.querySelector("#answer1").checked){
        point++
    }
    if(document.querySelector("#answer2").checked){
        point++
    }
    if(document.querySelector("#answer3").checked){
        point++
    }
    if(document.querySelector("#answer4").checked){
        point++
    }
    if(document.querySelector("#answer5").checked){
        point++
    }
    if(document.querySelector("#answer6").checked){
        point++
    }
    if(document.querySelector("#answer7").checked){
        point++
    }
    if(document.querySelector("#answer8").checked){
        point++
    }
    if(document.querySelector("#answer9").checked){
        point++
    }
    if(document.querySelector("#answer10").checked){
        point++
    }
    par.textContent="Your result: "+ point;
}