let passBox=document.querySelector('#passBox')
let inputSlider=document.querySelector('#inputSlider')
let lowercase=document.querySelector('#lowercase')
let uppercase=document.querySelector('#uppercase')
let numbers=document.querySelector('#numbers')
let symbols=document.querySelector('#symbols')
let genBtn=document.querySelector('#genBtn')
let sliderValue=document.querySelector('#sliderValue')
let copyIcon=document.querySelector('#copyIcon')
sliderValue.textContent=inputSlider.value

inputSlider.addEventListener('input', (e)=>{
   sliderValue.textContent=e.target.value
})

genBtn.addEventListener('click', ()=>{
    passBox.value=generatePassword()
})

let lowletter='abcdefghijklmnopqrstuvwxyz'
    let upperletter='ABCDEFGHIJKLMNPQRSTUVWXYZ'
    let sym='!@#$%^&*'
    let num='0123456789'

function generatePassword(){
    let genPassword=" "
    let allchars=" "
    if (lowercase.checked){
        allchars+=lowletter
    }
    else {
        allchars+=""
    }

    if (uppercase.checked){
        allchars+=upperletter
    }
    else {
        allchars+=""
    }
    if (numbers.checked){
        allchars+=num
    }
    else{
        allchars+=""
    }
    if (symbols.checked){
        allchars+=sym
    }
    else {
        allchars+=""
    }
    if (allchars==""||allchars.length==0){
        return genPassword;
    }
    let i=0
    while(i<=inputSlider.value){
     genPassword+=allchars.charAt(Math.floor(Math.random()*allchars.length))
       
     i++
    }
    console.log(genPassword);
    return genPassword

}

copyIcon.addEventListener('click',()=>{
    navigator.clipboard.writeText(passBox.value)
    copyIcon.title="Password Copied";
    console.log(    navigator.clipboard.writeText(passBox.value));
})
