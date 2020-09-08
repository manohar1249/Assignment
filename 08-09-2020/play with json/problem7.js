//(parsing objects and checking equal or not)

var obj = {name : "RajiniKanth", age : 33};
var obj1 = {name : "RajiniKanh", age : 33};

let a=JSON.stringify(obj);
let b=JSON.stringify(obj1);

console.log(a==b);
