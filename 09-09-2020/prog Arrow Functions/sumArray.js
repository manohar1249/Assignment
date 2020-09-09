let arr = [1,2,3,4,5];
let total = arr.reduce((initialTotal,arr)=>{
    return initialTotal+arr;
},0);

console.log("total sum of array is "+total);