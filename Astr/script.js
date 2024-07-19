function getNumerologyValue(char) {
    const lowerChar = char.toLowerCase();
    if ('aijqy'.includes(lowerChar)) return 1;
    if ('bkr'.includes(lowerChar)) return 2;
    if ('cgls'.includes(lowerChar)) return 3;
    if ('dmt'.includes(lowerChar)) return 4;
    if ('ehnx'.includes(lowerChar)) return 5;
    if ('uv'.includes(lowerChar)) return 6;
    if ('oz'.includes(lowerChar)) return 7;
    if ('fp'.includes(lowerChar)) return 8;
    return 0;
}

function generatePattern() {
    let userInput = document.getElementById('userInput').value;
    userInput = userInput.replace(/\s+/g, '');
    const digits = [];

    let num = 0;
    for (let i = 0; i < userInput.length; i++) {
        let t = 0;
        const char = userInput[i];
        if (isNaN(char)) {
            t = getNumerologyValue(char);
        } else {
            t = parseInt(char, 10);
        }
        num = (num * 10) + t;
        digits.push(t);
    }

    let sum = digits.reduce((acc, val) => acc + val, 0);
    const originalNum = num.toString();
    
    let result = `Entered value is ${originalNum}\nTotal of Entered value is ${sum}`;
    if (sum > 9) {
        sum = Math.floor(sum / 10) + (sum % 10);
        result += ` = ${sum}`;
    }
    result += "\nPyramid Pattern is Below\n" + originalNum + "\n";

    let currentDigits = digits.slice();
    while (currentDigits.length > 1) {
        const nextDigits = [];
        for (let i = 0; i <currentDigits.length -1; i++) {
            let sum1 = currentDigits[i] + currentDigits[i + 1];
            if (sum1 > 9) {
                sum1 = Math.floor(sum1 / 10) + (sum1 % 10);
            }
            nextDigits.push(sum1);
        }
        
        result += nextDigits+' '.join('') + "\n";
        currentDigits = nextDigits;
    }

    document.getElementById('TotalSum').textContent = result.split('\n')[1];
    document.getElementById('PyramidPattern').textContent = result.split('\n').slice(2).join('\n');
}
