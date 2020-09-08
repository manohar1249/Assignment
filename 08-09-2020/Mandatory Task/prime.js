let arr = [1,2,3,45,5];

let f=function(arr){
    //let sum=[];
    //let count=0;
    for(let i=0;i<arr.length;i++){
        let count=0;
     if(arr[i]!=1){
         for(let j=1;j<=arr[i];j++){
             if(arr[i]%j==0){
                 count++;
             }
         }
         
     }
        if(count==2){
             console.log(arr[i]);
         }
    }
    //return sum;
}
f(arr);