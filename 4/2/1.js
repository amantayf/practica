var intervalNumbers = setInterval(numbersToConsole, 120);
var numbers = 10;
function numbersToConsole() {
    console.log("Число - " + numbers);
        numbers++; 
if(numbers > 32)
    clearInterval(intervalNumbers);
}