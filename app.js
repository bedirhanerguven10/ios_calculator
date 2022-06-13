let subresult = document.querySelector('.screen-up');  
let result = document.querySelector('.screen-down');   
let ac = document.querySelector('.ac');                
let abs = document.querySelector('.abs');              
let modulus = document.querySelector('.modulus');       
let divide = document.querySelector('.divide');        
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let multiply = document.querySelector('.multiply');    
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');   
let minus = document.querySelector('.minus');           
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let plus = document.querySelector('.plus');             
let zero = document.querySelector('.zero');
let dot = document.querySelector('.dot');
let equal = document.querySelector('.equal');          

ac.addEventListener('click', ()=>{
    result.innerText = ' ';
    subresult.innerText = ' ';
});

abs.addEventListener('click', ()=>{
    if(result.innerText > 0 || result.innerText < 0){
        result.innerText *= -1;
        subresult.innerText = result.innerText;

    }else{
        result.innerText = subresult.innerText *= -1;
        subresult.innerText = ' ';
        subresult.innerText = result.innerText;
    }
})

modulus.addEventListener('click', ()=> {
    if(result.innerText > 0 || result.innerText < 0){
        result.innerText /= 100;
        subresult.innerText = result.innerText;
        

    }else{
    result.innerText = subresult.innerText / 100;
    subresult.innerText = result.innerText;
    }
})
    
seven.addEventListener('click', ()=> {
    subresult.innerText += 7;
})
eight.addEventListener('click', ()=> {
    subresult.innerText += 8;
})
nine.addEventListener('click', ()=> {
    subresult.innerText += 9;
})
four.addEventListener('click', ()=> {
    subresult.innerText += 4;
})
five.addEventListener('click', ()=> {
    subresult.innerText += 5;
})
six.addEventListener('click', ()=> {
    subresult.innerText += 6;
})
one.addEventListener('click', ()=> {
    subresult.innerText += 1;
})
two.addEventListener('click', ()=> {
    subresult.innerText += 2;
})
three.addEventListener('click', ()=> {
    subresult.innerText += 3;
})
zero.addEventListener('click', ()=> {
    subresult.innerText += 0;
})
dot.addEventListener('click', ()=> {
    subresult.innerText += '.';
})
divide.addEventListener('click', ()=> {
    subresult.innerText += '/';
})
multiply.addEventListener('click', ()=> {
    subresult.innerText += '*';
})
minus.addEventListener('click', ()=> {
    subresult.innerText += '-';
})
plus.addEventListener('click', ()=> {
    subresult.innerText += '+';
})



equal.addEventListener('click', ()=> {
    let son = eval(subresult.innerText)
    result.innerText = son.toFixed(2);
    subresult.innerText = result.innerText;
})


