let arr = [1,2,3,45,5];

let f=function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
     sum=sum+arr[i];   
    }
    return sum;
}
console.log(f(arr));