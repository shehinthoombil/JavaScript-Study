// function outer(){
//     let a = 10
//     function inner(){
//         let b = 20
//         console.log(a);
//         console.log(b);
//     }
//     inner()
// }
// outer()



function counter() {
    let count = 0
    return function () {
        count++
        console.log(count)
    }
}
const increment = counter()
increment()
increment()
increment()
increment()
