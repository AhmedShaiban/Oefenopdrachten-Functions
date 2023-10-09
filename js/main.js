//Opdracht 1

function greet(){
    console.log("Hello World");
}
    greet();

//Opdracht 2
function welcome() {
    document.body.textContent = "Welkom bij ROC Mondriaan";
}
  
    welcome();

//Opdracht 3
function calculateSum() {
    const sum = 3 + 4;
    console.log(sum);
}
  
    calculateSum();

//Opdracht 4
function calculateDivision() {
    const division = 8 / 2;
    console.log(division);
}
  
    calculateDivision();
  
//Opdracht 5
function showArrayOfNumbers() {
    const primes = [2, 3, 5, 7, 11];
    console.log(primes);
}
  
    showArrayOfNumbers();


//Opdracht 6
function showArrayOfBrands() {
    const brands = ["Mercedes", "Volkswagen", "Peugeot", "Tesla", "Toyota"];
        for (let brand of brands) {
        console.log(brand);
    }
}
      
    showArrayOfBrands();

//Opdracht 7
    let computer = 7;
    const user = 5;
    let bid = "";
     
while (bid !== "hoger" && bid !== "lager") {
       bid = prompt("Is het getal hoger of lager?");
    }
     
function showVariables() {
    console.log("De computer heeft het getal " + computer);
    console.log("De gebruiker heeft het getal " + user);
    console.log("De gebruiker heeft geraden " + bid);
}
     
    showVariables();



//Opdracht 8
function showMessage(message) {
    console.log(message);
}
      
    showMessage("Hallo wereld!");



//Opdracht 9
function showNumbers(number1, number2) {
    console.log("Het eerste getal is: " + number1);
    console.log("Het tweede getal is: " + number2);
}
      
    showNumbers(10, 20);

//Opdracht 10
function showSum(number1, number2) {
    const sum = number1 + number2;
    console.log("De som van de twee getallen is: " + sum);
}
          
    showSum(10, 20);


//Opdracht 11
function showSum(number1, number2) {
    const sum = number1 + number2;
    console.log("De som van de twee getallen is: " + sum);
}
          
    showSum(10, 20);



//Opdracht 12
function concatenateStrings(string1, string2) {
    const concatenatedString = string1 + " " + string2;
    console.log(concatenatedString);
}
          
    concatenateStrings("Hallo", "wereld!");


//Opdracht 13
function showArray(array) {
    for (const element of array) {
        console.log(element);
    }
}
          
    let array = ["Hallo", "wereld!", "Hoi"];
    showArray(array);

//Opdracht 14

    computer = 7;
    const player = 5;
    const getBid = () => {
    const input = prompt("Hoger of lager?");
        return input;
    };
           
    const determineWinner = (computer, player, bid) => {
        if (bid === "hoger" && computer > player) {
            return "Computer";
        } else if (bid === "hoger" && computer < player) {
            return "Speler";
        } else if (bid === "lager" && computer > player) {
            return "Speler";
        } else {
               return "Computer";
             }
    };
           
    bid = getBid();
    const winner = determineWinner(computer, player, bid);
           
        console.log(`De winnaar is: ${winner}`);

           
 //Opdracht 15
function getSum(number1, number2) {
    const sum = number1 + number2;
        return sum;
}
              
    let result = getSum(10, 20);
        console.log(result);

//Opdracht 16

function getProduct(number1, number2) {
    const product = number1 * number2;
        return product;
}
              
    result = getProduct(10, 20);
    console.log(result);

//Opdracht 17
function getDivision(number1, number2) {
    if (number2 === 0) {
        return 0;
    } else {
        return number1 / number2;
    }
}
              
    result = getDivision(10, 2);
        console.log(result);  
              
    let result2 = getDivision(10, 0);
        console.log(result2);

//Opdracht 18
function getConcatenatedStrings(string1, string2) {
    if (string1 === null || string2 === null) {
        return null;
    } else {
        return string1 + " " + string2;
    }
}
              
    result = getConcatenatedStrings("Hallo", "wereld!");
        console.log(result);  
              
     result2 = getConcatenatedStrings(null, "wereld!");
        console.log(result2);  
              
    const result3 = getConcatenatedStrings("Hallo", null);
        console.log(result3);

//Opdracht 19
                
function getSumOfArray(array) {
    let sum = 0;
        for (const element of array) {
            sum += element;
        }
            return sum;
}
                  
    array = [1, 3, 5, 7, 11];
        result = getSumOfArray(array);
            console.log(result);