let arr = ["mam","man"];

let f = function(arr){
    for(let i=0;i<arr.length;i++){
        let a= arr[i].split("");
        let b= a.reverse();
        let c= b.join("")
        //console.log(c);
        //console.log(arr[i]);
        if(c==arr[i]){
            console.log(arr[i]);
        }
    }
}

f(arr);