let arr = ["mam","man"];

let res = arr.filter((arr)=>{
    let a=arr.split("");
    let b=a.reverse();
    let c=b.join("");
    if(arr==c){
        return arr;
    }
    
});
console.log(res)