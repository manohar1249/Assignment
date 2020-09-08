let arr = [1,2,3,4,5];

(function(arr){
    let res=[];
    let k=5;
    for(let i=0;i<k;i++){
         res = arr.reverse();
        //console.log(res);
    }
    console.log(res);
})(arr);