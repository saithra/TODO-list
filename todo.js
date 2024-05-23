let input=document.getElementById("inp")
let button=document.getElementById("but")
let box2=document.getElementById("box2");

let num = [];

button.addEventListener("click",()=>{
    num.push(input.value)
    output(input.value)
    input.value=""
    console.log(num);


})

function output(num1) {
    let para=document.createElement('p')

    para.innerHTML=num1
    box2.appendChild(para) 

    para.id="para"
    console.log(para); 

    para.addEventListener("click",()=>{
          para.style.textDecoration="line-through"
    })

    para.addEventListener("dblclick",()=>{
            box2.remove(para)
    })

}