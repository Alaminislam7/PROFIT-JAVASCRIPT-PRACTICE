const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const getUserNumberInput = () => {
    return parseInt(userInput.value)
}

const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}

const writeToLog = (operationName, operationPrevResult, operationNumber, operationResult) => {
    const logEntry = {
        operation: operationName,
        prevResult: operationPrevResult,
        number: operationNumber,
        result: operationResult
    }
    logEntries.push(logEntry)
    console.log(logEntries);
}

const add = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber)

    //**************************************array
    // logEntries.push(enteredNumber)

    //**************************************object
    // const logEntry = {
    //     operation: 'ADD',
    //     prevResult: initialResult,
    //     number: enteredNumber,
    //     result: currentResult
    // }
    // logEntries.push(logEntry)
    writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

const subtract = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber)
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

const multiply = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber)
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

const divided = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber)
    writeToLog('DIVIDED', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divided);
