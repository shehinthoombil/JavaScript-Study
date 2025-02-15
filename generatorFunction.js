// function* generator() {

//   yield 1;
//   console.log("dasan")
//   yield 2;
//   console.log("asif")
//   yield 3;

// }
// const gen = generator()
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

//generator to find even number
function* evenNumber(){
  let num = 0
  while(true){
    if(num%2==0){
      yield num;
    }
    num++;
  }
}
const evenNum = evenNumber()

console.log(evenNum.next().value)
console.log(evenNum.next().value)
console.log(evenNum.next().value)
console.log(evenNum.next().value)
