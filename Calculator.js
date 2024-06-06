let first=document.getElementById('first')
let second=document.getElementById('second')
let result=document.getElementById('result')

let Add=()=>{
    let num1=parseInt(first.value)
    let num2=parseInt(second.value)
    sum=num1+num2;
    result.innerHTML=`${sum}`
    // alert(sum)
}
let Substract=()=>{
    let num1=parseInt(first.value)
    let num2=parseInt(second.value)
    Substract=num1-num2;
    result.innerHTML=`${Substract}`
    // alert(Substract)
}
let Multiplication=()=>{
    let num1=parseInt(first.value)
    let num2=parseInt(second.value)
    Multiplication=num1*num2;
    result.innerHTML=`${Multiplication}`
    // alert(Multiplication)
}
let Division=()=>{
    let num1=parseInt(first.value)
    let num2=parseInt(second.value)
    Division=num1/num2;
    result.innerHTML=`${Division}`
    // alert(Division)
}
