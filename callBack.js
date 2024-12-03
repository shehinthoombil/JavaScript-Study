
// function A(B) {
//     console.log("fisrt")
//     B();
// }
// function B() {
//     console.log("second")
// }

// A(B);

// function A() {
//     console.log("1");
// }

// function B() {
//     setTimeout(() => {
//         console.log("2");
//     }, 3000);
// }

// function C() {
//     console.log("3");
// }

// A()
// B()
// C()

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback("Here is the data.");
    }, 2000); // Simulates a 2-second delay
}

fetchData((data) => {
    console.log(data); // Logs "Here is the data."
});
