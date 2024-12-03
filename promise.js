// const { error, log } = require("console")

const { resolve } = require("path");

// const a = new Promise((res, rej) => {
//     res("success")
// }).then((result) => console.log(result)
// ).catch((error) => console.log(error)
// )

//async await
const a = new Promise((res, rej) => {
    res("success")
})
async function handlePromise() {
    try {
        const res = await a
        console.log(res);

    } catch (error) {
        console.log(error);

    }
}
handlePromise()