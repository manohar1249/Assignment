let arr = [1,2,3,4,5];
let res = arr.filter((arr)=>{
    let count=0;
    for(i=1;i<=arr;i++){
        if(arr%i==0){
            count++;
        }
    }
    if(count==2){
        return arr;
    }
});

console.log(res)