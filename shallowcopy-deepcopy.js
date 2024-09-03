
//Shallow copy
const a = [[1, 2], [3, 4]]
const copy = [...a]
a[1][0] = 10;
console.log(a)
console.log(copy)
//
const obj = {
    name: 'shehin',
    address: {
        city: "Wonderland",
        postalCode: "12345"
    }
}

let shallowCopy = { ...obj };
shallowCopy.address.city = "Dreamland";
console.log(obj.address.city);
console.log(shallowCopy);

//Deep copy
const obj1 = {
    name:"shehin",
    address:{
        city:"wonderland",
        postalCode:"676301"
    }  
}
const deep1 = JSON.parse(JSON.stringify(obj1));
deep1.address.city = "Dreamland"
console.log(obj1);
console.log(deep1);

