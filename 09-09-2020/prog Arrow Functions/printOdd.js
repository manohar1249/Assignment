let arr = [1,2,3,4,5]

let res = arr.filter((arr) => {
    if((arr%2)!=0){
        return arr;
    }
});

console.log(res);