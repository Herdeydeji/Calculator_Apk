const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const exponenetial = document.querySelector('.power');
const percent = document.querySelector('percent');
const dot = document.querySelector('.dot');
const clearAll = document.querySelector('.clear');
const deleteNum = document.querySelector('.delete');
const equalTo = document.querySelector('.equalTo');
const equation = document.querySelector('.equation');
const result = document.querySelector('.result');

let numberStorage = [];

function emptyStorage(){
    numberStorage.length =0;
}
// calculator nmubers

one.addEventListener('click',(e) => { 
    e.preventDefault()
    const saved = numberStorage.push(1);
    const num = numberStorage.join("")
    equation.innerHTML=num;
 })
two.addEventListener('click',(e) => { 
    e.preventDefault()
    const saved = numberStorage.push(2);
    const num = numberStorage.join("")
    equation.innerHTML=num;
 })
three.addEventListener('click',(e) => { 
    e.preventDefault()
    const saved = numberStorage.push(3);
    const num = numberStorage.join("")
   equation.innerHTML=num;
 })
four.addEventListener('click',(e) => { 
    e.preventDefault()
    const saved = numberStorage.push(4);
    const num = numberStorage.join("")
    equation.innerHTML=num;
 })
five.addEventListener('click',(e) => { 
    e.preventDefault()
    const saved = numberStorage.push(5);
    const num = numberStorage.join("")
    equation.innerHTML=num;
 })
six.addEventListener('click',(e) => { 
    e.preventDefault()
    const saved = numberStorage.push(6);
    const num = numberStorage.join("")
    equation.innerHTML=num;
 })
seven.addEventListener('click',(e) => { 
    e.preventDefault()
    const saved = numberStorage.push(7);
    const num = numberStorage.join("")
    equation.innerHTML=num;
 })
eight.addEventListener('click',(e) => { 
    e.preventDefault()
    const saved = numberStorage.push(8);
    const num = numberStorage.join("")
    equation.innerHTML=num; 
 })
nine.addEventListener('click',(e) => { 
    e.preventDefault()
    const saved = numberStorage.push(9);
    const num = numberStorage.join("")
    equation.innerHTML=num;
 })
zero.addEventListener('click',(e) => { 
    e.preventDefault()
    const saved = numberStorage.push(0);
    const num = numberStorage.join("")
    equation.innerHTML=num;
 })
 
 
 // Arithmetic Operation
 
plus.addEventListener('click',(e) => { 
     e.preventDefault()
     const saved = numberStorage.push("+");
     const num = numberStorage.join("")
     equation.innerHTML=num;
  })

minus.addEventListener('click',(e) => { 
     e.preventDefault()
     const saved = numberStorage.push("-");
     const num = numberStorage.join("")
     equation.innerHTML=num;
  })

multiply.addEventListener('click',(e) => { 
     e.preventDefault()
     const saved = numberStorage.push("*");
     const num = numberStorage.join("")
     equation.innerHTML=num;
  })

exponenetial.addEventListener('click',(e) => { 
     e.preventDefault()
     const saved = numberStorage.push("**");
     const num = numberStorage.join("")
     equation.innerHTML=num;
  })

divide.addEventListener('click',(e) => { 
     e.preventDefault()
     const saved = numberStorage.push("/");
     const num = numberStorage.join("")
     equation.innerHTML=num;
  })

dot.addEventListener('click',(e) => { 
     e.preventDefault()
     const saved = numberStorage.push(".");
     const num = numberStorage.join("")
     equation.innerHTML=num;
  })

equalTo.addEventListener('click',(e) => { 
     e.preventDefault()
     const calc = numberStorage.join("");
     const equate = eval(calc)
     result.innerHTML=equate;
  })

deleteNum.addEventListener('click',(e) => { 
     e.preventDefault()
     numberStorage.pop()
     const removed = numberStorage.join("")
     equation.innerHTML=removed;
  })

divide.addEventListener('click',(e) => { 
     e.preventDefault()
     const saved = numberStorage.push("/");
     const num = numberStorage.join("")
     equation.innerHTML=num;
  })

clearAll.addEventListener('click',(e) => { 
     e.preventDefault()
     emptyStorage();
     equation.innerHTML="0";
     result.innerHTML="0";
  })

  
 
  
