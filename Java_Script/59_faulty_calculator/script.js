
        function calculate(operation) {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            let result;

            // Introduce a 10% chance of wrong answer
            if (Math.random() < 0.1) {
                // 10% chance to do an incorrect operation
                if (operation === '+') {
                    result = num1 - num2; // Perform subtraction instead of addition
                } else if (operation === '*') {
                    result = num1 + num2; // Perform addition instead of multiplication
                }
                else if (operation === '/') {
                    result = num1 ** num2; // Perform addition instead of multiplication
                }
                else if (operation === '-') {
                    result = num1 / num2; // Perform addition instead of multiplication
                }
                else if (operation === '**') {
                    result = num1 * num2; // Perform addition instead of multiplication
                }
            } else {
                // Correct operation
                if (operation === '+') {
                    result = num1 + num2;
                } else if (operation === '*') {
                    result = num1 * num2;
                }
                else if (operation === '/') {
                    result = num1 / num2;
                }
                else if (operation === '-'){
                    result = num1 - num2;
                }
                else if (operation === '**') {
                    result = num1 ** num2;
                }
            }

            // Display the result
            document.getElementById("result").textContent = 'Result: '+result;
        }
    