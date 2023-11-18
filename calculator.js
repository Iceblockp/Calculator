

const inputLabel = document.querySelector("#inputLabel");
const outputLabel = document.querySelector("#outputLabel");
const equal = document.querySelector("#equal");
const reset = document.querySelector("#reset");


window.addEventListener("click", (event) => { 
    if( Number.isInteger(Number(event.target.value)) || event.target.value == "+" || event.target.value == "-" || event.target.value == "*" || event.target.value == "/"){
        // console.log(event.target.value);
        inputLabel.innerText += event.target.value;
    }
   
 })
 

 equal.addEventListener("click", () => { 
    outputLabel.innerHTML = "Result :" + eval(inputLabel.innerText)
    inputLabel.innerText = "";
  })

  reset.addEventListener("click", () => { 
    inputLabel.innerText = "";
    outputLabel.innerText = "Result :";
   })
