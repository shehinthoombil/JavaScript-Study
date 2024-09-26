//nested callback

function fetchData(callback) {
    setTimeout(() => {
        callback('Data received');
    }, 1000);
}

function processData(data, callback) {
    setTimeout(() => {
        callback('Data processed');
    }, 1000);
}

function displayData(processedData, callback) {
    setTimeout(() => {
        callback('Data displayed');
    }, 1000);
}

fetchData((data) => {
    processData(data, (processedData) => {
        displayData(processedData, (result) => {
            console.log(result);
        });
    });
});