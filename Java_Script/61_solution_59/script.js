
        function calculate(operation) {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            let result;
            let obj={
                "+":"-",
                "*":"+",
                "_":"/",
                "/":"**",
                "**":"*"
            }

            // Introduce a 10% chance of wrong answer
            if (Math.random() < 0.1) {
                // 10% chance to do an incorrect operation
                operation=obj[operation];
                result=eval(`${num1} ${operation} ${num2}`);
            } else {
                // Correct operation
                result=eval(`${num1} ${operation} ${num2}`);  
                
            }

            // Display the result
            document.getElementById("result").textContent = 'Result: '+result;
        }
    