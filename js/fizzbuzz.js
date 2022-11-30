function getValues() {
    
    let maxValue = document.getElementById("maxValue").value;
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    maxValue = parseInt(maxValue);
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if(Number.isInteger(maxValue) && Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        if((maxValue >= fizzValue) && (maxValue >= buzzValue)){
            let fbData = FizzBuzzC(maxValue, fizzValue, buzzValue);
            displayData(fbData);
        } else {
            alert("The maximum value should be bigger than the Fizz and Buzz values");
        }
    } else {
        alert("All entries should be integers");
    }

}

// Common way of creating the array
function FizzBuzzA(maxValue, value1, value2) {

    let returnArray = [];

    for(let i = 1; i <= maxValue; i++) {
        if((i % value1 == 0) && (i % value2 == 0)){
            returnArray.push("FizzBuzz");
        } else if (i % value1 == 0) {
            returnArray.push("Fizz");
        } else if (i % value2 == 0) {
            returnArray.push("Buzz");
        } else {
            returnArray.push(i);
        }
    }

    return returnArray;
}

// A slightly better way to create the array while following DRY (don't repeat yourself)
function FizzBuzzB(maxValue, value1, value2) {

    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for(let i = 1; i <= maxValue; i++) {
        Fizz = i % value1 == 0;
        Buzz = i % value2 == 0;

        switch(true) {
            case Fizz && Buzz:
                returnArray.push("FizzBuzz");
                break;
            case Fizz:
                returnArray.push("Fizz");
                break;
            case Buzz:
                returnArray.push("Buzz");
                break;
            default:
                returnArray.push(i);
                break;
        }
    }

    return returnArray;

}

// Return the array using a tienary operator
function FizzBuzzC(maxValue, value1, value2) {
    
    let returnArray = [];

    for(let i = 1; i <= maxValue; i++) {
        let value = ((i % value1 == 0 ? 'Fizz' : '') + (i % value2 == 0 ? 'Buzz' : '') || i);
        returnArray.push(value);
    }

    return returnArray;
}

function displayData(fbData) {

    let tableBody = document.getElementById("results");

    let templateRow = document.getElementById("fbTemplate");

    tableBody.innerHTML = "";

    for(let i = 0; i < fbData.length; i += 5) {
        const tableRow = document.importNode(templateRow.content, true);

        rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];

        rowCols[1].classList.add(fbData[i+1]);
        rowCols[1].textContent = fbData[i+1];

        rowCols[2].classList.add(fbData[i+2]);
        rowCols[2].textContent = fbData[i+2];

        rowCols[3].classList.add(fbData[i+3]);
        rowCols[3].textContent = fbData[i+3];

        rowCols[4].classList.add(fbData[i+4]);
        rowCols[4].textContent = fbData[i+4];

        tableBody.appendChild(tableRow);
    }
}