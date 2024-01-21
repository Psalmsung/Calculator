    document.addEventListener("DOMContentLoaded", function () {
        const display = document.getElementById("display");
        const buttons = document.querySelectorAll(".buttons button");

        let output = "";

        const calculate = (btnValue) => {
            console.log(btnValue);
            if (btnValue === "=") {
                try {
                    output = eval(output);
                } catch (error) {
                    output = error;
                }
            } else if (btnValue === "AC") {
                output = "";
            } else if (btnValue === "DEL") {
                output = output.toString().slice(0, -1);
            } else if (btnValue === "sqrt") {
                output = Math.sqrt(parseFloat(output));
            } else if (btnValue === "log") {
                output = Math.log10(parseFloat(output));
            } else if (btnValue === "sin") {
                output = Math.sin(parseFloat(output));
            } else if (btnValue === "cos") {
                output = Math.cos(parseFloat(output));
            } else if (btnValue === "tan") {
                output = Math.tan(parseFloat(output));
            } else if (btnValue === "exp") {
                output = Math.exp(parseFloat(output));
            } else if (btnValue === "pi") {
                output += Math.PI;
            } else {
                output += btnValue;
            }
            display.value = output;
        };

        buttons.forEach((button) => {
            button.addEventListener("click", (e) => calculate(e.target.dataset.value));
        });
    });