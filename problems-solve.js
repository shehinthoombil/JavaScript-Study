// common elements from this and find sum
const arr1 = [3, 2, 1, 4, 2, 1]
const arr2 = [1, 3, 2, 6, 2, 3, 9]
let res = 0

for(let i = 0; i< arr1.length;i++){
    if(arr2.includes(arr1[i])){
        res+=arr1[i]
    }
}
console.log(res)

// let arr = [123,456]
// i want reverse this array 
// i want to get [321,654]
