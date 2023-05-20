const btn = document.querySelector("[type='submit']");
const input = document.querySelector("[type='email']"); 
const form = document.querySelector("form");

let validEmail;
let regex = /^\w+@\w+\.com/;


document.forms[0].addEventListener("submit", (e)=>{
    if(regex.test(input.value)===true){
        validEmail=true;
    }else{
        validEmail=false;
    }
    if(validEmail===false){
        e.preventDefault();
        input.value="";
        console.log(`email not sent`)
    }else{
        console.log('email sent')
    }
})
input.addEventListener('input', ()=>{
    if(regex.test(input.value)===false){
        input.style.borderColor="red";
    }else{
        input.style.borderColor="green";
    }
})