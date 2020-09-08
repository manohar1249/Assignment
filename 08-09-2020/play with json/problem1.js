var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
 // your code here
    let arr=[];
    count=0;
    for(let key in obj){
        arr[count]=obj[key];
        count++;
    }
    return arr;
}

let a=printAllValues(obj);
console.log(a);