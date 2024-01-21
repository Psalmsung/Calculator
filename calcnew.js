const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button"); 
const specialChars = ["%", "*", "/", "-", "="];
let output = "";

//Define function to calculate based on button clicked
const calculate = (btnValues) => {
    if(btnValues === "=" && btnValues !== ""){
    //if output has '%', replace with '/100' before evaluating
    output = eval(output.replace("%", "/100"));
} else if(btnValues === "AC"){
    output = "";
} else if(btnValues === "DEL"){
    //If DEL button is clicked, remove the last character from the output
    output = output.toString().slice(0, -1);
} else{
    //If output is empty and button is specialChars then return
    if(output === "" && specialChars.includes(btnValues)) return;
    output += btnValues;
}
display.value = output;
};

//Add event listener to buttons, call calculate() on click.
buttons.forEach((button)=>{
    //Button click listener calls calculate() with dataset value as argument
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
}); 




// document.addEventListener("DOMContentLoaded", function () {
//     const display = document.querySelector(".display");
//     const buttons = document.querySelectorAll(".buttons button");

//     let output = "";

//     const calculate = (btnValue) => {
//         if (btnValue === "=" && output !== "") {
//             // Replace "%" with "/100" before evaluating the expression
//             output = eval(output.replace("%", "/100"));
//         } else if (btnValue === "AC") {
//             output = "";
//         } else if (btnValue === "DEL") {
//             output = output.toString().slice(0, -1);
//         } else {
//             output += btnValue;
//         }
//         display.value = output;
//     };

//     buttons.forEach((button) => {
//         button.addEventListener("click", (e) => calculate(e.target.dataset.value));
//     });
// });
