//Conver First letter to Capital

let arr = ["manohar","hari"];
(function(arr){
    for(let i=0;i<arr.length;i++){
        let a = arr[i].split("");
       let res= a[0].toUpperCase();
        a[0]=res;
       
        //console.log(res);
        console.log(a.join(""));
    }
})(arr);