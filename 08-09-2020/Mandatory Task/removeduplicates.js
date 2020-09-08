let arr = [1,2,3,5,5];

(function(arr){
 for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            for(let k=i;k<arr.length;k++){
                arr[k]=arr[k+1];
            }
        }
    }
}
console.log(arr);
 })(arr);