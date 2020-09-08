var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
 // your code here
    let arr=[];
    count=0;
    
        arr[count]=Object.keys(obj);
        
    
    return arr;
}

let a=printAllValues(obj);
console.log(a);