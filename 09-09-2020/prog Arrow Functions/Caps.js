let arr = ["manohar","hari"];

arr.filter((arr)=>{
    let a=arr.split("");
    //console.log(a);
    let b=a[0].toUpperCase();
   // console.log(b);
    a[0]=b;
   arr=a.join("");
    console.log(arr);
    //return arr;
});
//console.log(res)