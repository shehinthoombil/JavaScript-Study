//Call method
user1 = {
    name: "shehin",
    place: "Tirur",
}

user2 = {
    name: "adhil",
    place: "nilambur"
}

let calls = function () {
    console.log(`my name ${this.name} and place ${this.place}`);
}

calls.call(user1)
calls.call(user2)

//Apply method
user3 = {
    name:"adwaith",
    place:"kannur"
}
user4 = {
    name:"javad",
    place:"Tirur"
}

let applys = function(hello,happy){
    console.log(`${hello} my name ${this.name} and place ${this.place} ${happy}.`);
    
}
applys.apply(user3,['hello','happy'])
applys.apply(user4,['hello','happy'])

//Bind method

user5 = {
    name: "shehin",
    place: "Tirur",
}

user6 = {
    name: "adhil",
    place: "nilambur"
}

let binds = function(){
    console.log(`my name ${this.name} and place ${this.place}`);
    
}
const bind1 = binds.bind(user5)
const bind2 = binds.bind(user6)
bind1();
bind2();
