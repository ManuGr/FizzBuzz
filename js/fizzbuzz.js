function getValues() {

    let maxValue = document.getElementById("maxValue").value;
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    maxValue = parseInt(maxValue);
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if(Number.isInteger(maxValue) && Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        if((fizzValue < maxValue) && (buzzValue < maxValue)){
            let fbData = FizzBuzzA(maxValue, fizzValue, buzzValue);
            displayData(fbData);
        } else {
            alert("The fizz and buzz values have to be smaller than the maximum value");
        }
    } else {
        alert("You must enter integers");
    }
}

function FizzBuzzA(maxValue, value1, value2) {
    let returnArray = [];
    let fizz = false;
    let buzz = false;
    for(let i = 1; i <= maxValue; i++){
        fizz = i % value1 == 0;
        buzz = i % value2 == 0;
        switch(true) {
            case fizz && buzz:
                returnArray.push("FizzBuzz")
                break;
            case fizz:
                returnArray.push("Fizz");
                break;
            case buzz:
                returnArray.push("Buzz");
                break;
            default:
                returnArray.push(i);
                break;
        }
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