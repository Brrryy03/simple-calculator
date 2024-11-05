 function calculate() {
            // Get the values from the form
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const operation = document.getElementById('operation').value;
            let result;

            // Switch statement to handle different operations
            switch (operation) {
                case 'add':
                    result = num1 + num2;
                    break;
                case 'subtract':
                    result = num1 - num2;
                    break;
                case 'multiply':
                    result = num1 * num2;
                    break;
                case 'divide':
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = 'Error: Division by zero';
                    }
                    break;
                default:
                    result = 'Invalid operation';
            }

            // Display the result
            document.getElementById('result').innerText = `Result: ${result}`;
        }
        function changeDivColor() {
            document.getElementById('color-box').style.backgroundColor = 'lightcoral'; 
        }
 
