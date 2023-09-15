let sliderValue=document.getElementById("sliderValue")
let inputSlider=document.getElementById("inputSlider")
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById('numbers');
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon");

//showing input slider value

sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent=inputSlider.value;
})

genBtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
})

let lowerCharts = "abcdefghijklmnopqrstuvwxyz";
let upperCharts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numCharts = "0123456789";
let symCharts = "!@#$%^&*";



//fuction to geenerate Password
function generatePassword(){
    let genPassword="";
    let allChars="";
    allChars+=lowercase.checked ? lowerCharts: "";
    allChars+=uppercase.checked ? upperCharts :"";
    allChars+=numbers.chekced ? numCharts:"";
    allChars+=symbols.checked ? symCharts :"";
    if (allChars==""||allChars.length==0){
        return genPassword;
    }

    let i=1;
    while(i<=inputSlider.value){
    genPassword+=allChars.charAt(Math.floor(Math.
        random()*allChars.length));
    console.log(genPassword);
    i++;
    }

    console.log(genPassword);
    return genPassword ;

    
    }
//copy password
  copyIcon.addEventListener('click', ()=>{
    navigator.clipboard.writeText(passBox.value);
    copyIcon.title="Password Copied";
    
    console.log(   navigator.clipboard.writeText(passBox.value));
  })



