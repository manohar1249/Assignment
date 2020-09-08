let obj = {
    name:"manohar",
    age : "22",
    year : "1998"
};

let f = function(obj){
let arr = Object.keys(obj);

let arr1 =Object.values(obj);
   // console.log(arr1);
let res = [[],[],[]];
    res[0][0]=arr[0];
    res[0][1]=arr1[0];
    res[1][0]=arr[1];
    res[1][1]=arr1[1];
    res[2][0]=arr[2];
    res[2][1]=arr1[2];
    console.log(res);
}

f(obj);